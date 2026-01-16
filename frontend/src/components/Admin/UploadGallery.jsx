import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import api from "../../api/axios.js";
import { toast, Toaster } from "sonner";

const UploadGallery = () => {
  const [files, setFiles] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(false);
  const fileRef = useRef(null);

  // 📥 Load gallery images
  const fetchGallery = async () => {
    try {
      
      const res = await api.get("/api/gallery/get");
      setGallery(res.data.data || []);
    } catch {
      toast.error("Failed to load gallery");
    }
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  // 🟢 Handle image selection
  const handleImageChange = (e) => {
    setFiles(Array.from(e.target.files));
  };

  // 🟢 Upload images
  const uploadGalleryImages = async (e) => {
    e.preventDefault();

    if (!files.length) {
      return toast.error("Please select images");
    }

    try {
      setLoading(true);
      toast.loading("Uploading images...");

      const { data } = await api.get("/api/cloudinary/get-signature");

      const uploadedUrls = await Promise.all(
        files.map(async (file) => {
          const formData = new FormData();
          formData.append("file", file);
          formData.append("api_key", data.api_key);
          formData.append("timestamp", data.timestamp);
          formData.append("upload_preset", "Mp_Advt");
          formData.append("signature", data.signature);

          const res = await axios.post(
            `https://api.cloudinary.com/v1_1/${data.cloud_name}/image/upload`,
            formData,
          );

          return res.data.secure_url;
        }),
      );

      await api.post("/api/gallery/upload", { images: uploadedUrls });

      toast.success("Gallery uploaded successfully!");
      setFiles([]);
      if (fileRef.current) fileRef.current.value = "";
      fetchGallery();
    } catch (error) {
      console.error(error);
      toast.error("Upload failed");
    } finally {
      toast.dismiss();
      setLoading(false);
    }
  };

  // ❌ Delete image
  const deleteImage = async (id) => {
    if (!window.confirm("Delete this image?")) return;

    try {
      await api.delete(`/api/gallery/delete/${id}`);
      toast.success("Image deleted");
      fetchGallery();
    } catch {
      toast.error("Delete failed");
    }
  };

  return (
    <main style={styles.main}>
      {/* Upload Box */}
      <section style={styles.card}>
        <h2 style={styles.title}>Gallery Upload</h2>

        <form onSubmit={uploadGalleryImages} style={styles.form}>
          <input
            ref={fileRef}
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageChange}
            className="custom-file-input"
            style={styles.file}
          />

          <div style={styles.previewGrid}>
            {files.map((file, i) => {
              const preview = URL.createObjectURL(file);
              return (
                <img
                  key={i}
                  src={preview}
                  alt="preview"
                  style={styles.previewImg}
                  onLoad={() => URL.revokeObjectURL(preview)}
                />
              );
            })}
          </div>

          <button disabled={loading} style={styles.uploadBtn}>
            {loading ? "Uploading..." : "Upload Images"}
          </button>
        </form>
      </section>

      {/* Gallery Grid */}
      <section style={styles.galleryCard}>
        <h3 style={styles.subtitle}>Gallery Images</h3>

        <div style={styles.galleryGrid}>
          {gallery.map((item) => (
            <div key={item._id} style={styles.imageBox}>
              <img src={item.image} alt="gallery" style={styles.galleryImg} />
              <button
                style={styles.deleteBtn}
                onClick={() => deleteImage(item._id)}
              >
                ✖
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Sonner Toaster */}
      <Toaster position="top-right" richColors />
    </main>
  );
};

export default UploadGallery;
const styles = {
  main: {
    minHeight: "100vh",
    padding: "2rem 1rem",
    background: "linear-gradient(180deg, #f6f8fc 0%, #eef2f7 100%)",
  },

  /* Upload Card */
  card: {
    maxWidth: "640px",
    margin: "0 auto",
    backgroundColor: "#ffffff",
    padding: "1.75rem",
    borderRadius: "16px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
  },

  title: {
    textAlign: "center",
    fontSize: "1.6rem",
    fontWeight: "700",
    color: "#1f2937",
    marginBottom: "1.25rem",
    letterSpacing: "-0.3px",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "14px",
  },

  file: {
    padding: "12px",
    borderRadius: "10px",
    border: "1.5px dashed #c7d2fe",
    backgroundColor: "#f8faff",
    cursor: "pointer",
    fontSize: "0.9rem",
  },

  uploadBtn: {
    marginTop: "8px",
    background: "linear-gradient(135deg, #ff4081, #ff6fa5)",
    color: "#ffffff",
    padding: "12px",
    fontSize: "1rem",
    fontWeight: "600",
    border: "none",
    borderRadius: "12px",
    cursor: "pointer",
    transition: "all 0.25s ease",
  },

  /* Image preview before upload */
  previewGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(90px, 1fr))",
    gap: "10px",
    marginTop: "6px",
  },

  previewImg: {
    width: "100%",
    height: "90px",
    objectFit: "cover",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.12)",
    transition: "transform 0.2s ease",
  },

  /* Gallery Section */
  galleryCard: {
    maxWidth: "1100px",
    margin: "3rem auto 0",
  },

  subtitle: {
    fontSize: "1.3rem",
    fontWeight: "700",
    color: "#1f2937",
    marginBottom: "1rem",
    textAlign: "center",
  },

  galleryGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "18px",
  },

  imageBox: {
    position: "relative",
    borderRadius: "14px",
    overflow: "hidden",
    backgroundColor: "#fff",
    boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
    transition: "transform 0.25s ease, box-shadow 0.25s ease",
  },

  galleryImg: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    display: "block",
  },

  deleteBtn: {
    position: "absolute",
    top: "10px",
    right: "10px",
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    border: "none",
    background: "rgba(0,0,0,0.6)",
    color: "#fff",
    fontSize: "14px",
    fontWeight: "bold",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "background 0.2s ease, transform 0.2s ease",
  },
};
