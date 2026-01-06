import React, { useEffect, useState } from "react";
import HeroSection from "./HeroSection";
import ImageSlider from "../components/Work/Slider";
import RotatingText from "../../animation/RotatingText.jsx";
import LogoLoop from "../components/loop";
import ProductCard from "../components/homepageproducts/ProductCard";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
// import api from "../../api/axios.js";
import api from "../api/axios.js";
const MainHome = () => {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  /* ================= FETCH PRODUCTS ================= */
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        const res = await api.get("/api/product/getproducts", {
          params: {
            page: 1,
            limit: 6, // 👈 only show 3 on home page
          },
        });
        // console.log(res.data?.data);
        setProducts(res.data?.data || []);
      } catch (err) {
        console.error("❌ Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <HeroSection />
      <div
        style={{
          width: "100%",
          padding: "4rem 1rem",
          display: "flex",
          justifyContent: "center",
        }}
        className="bg-gray-900"
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1200px",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: "600",
              marginBottom: "2rem",
              color: "white",
            }}
          >
            Welcome
          </h2>

          <ImageSlider />
        </div>
      </div>
      <div className=" flex items-center bg-gray-900 justify-center text-3xl h-[100px] relative z-10">
        <RotatingText
          texts={[
            "Your Brand, Printed to Perfection.",
            "Make Your Brand Impossible to Ignore.",
            "Where Your Brand Meets Perfect Print.",
            "Your Brand, Seen Everywhere.",
            "We don’t just print designs",
            "we build brand identity.",
          ]}
          rotationInterval={2000}
          staggerDuration={0.02}
          mainClassName="
          text-center
          text-white
          font-semibold
          leading-tight
          max-w-[90%]
          mx-auto
      
          text-l
          sm:text-xl
          md:text-3xl
          lg:text-4xl
          xl:text-5xl
        "
          elementLevelClassName="
          inline-block
          bg-gradient-to-r
          from-indigo-400
          via-purple-500
          to-pink-500
          bg-clip-text
          text-transparent
        "
        />
      </div>
      <section className="section-box relative z-10 w-[100vw] ">
        <h2 className="heading pink">Mission</h2>
        <p>To make other brands great, giving them life through marketing.</p>
      </section>
      {/* Vision Section */}
      <section className="section-box dark-bg relative z-10  ">
        <h2 className="heading pink">Vision</h2>
        <p>
          To be the preferred print and fulfillment partner to marketing
          managers, through consistency & reliability.
        </p>
      </section>
      {/* Purpose Section */}
      <section className="section-box relative z-10">
        <h2 className="heading pink">Our Purpose</h2>
        <p>
          We exist to simplify and speed up the printing process to give you a
          hassle free experience.
        </p>
      </section>

      <section className="py-20 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-bold text-gray-900">Our Products</h2>
        </motion.div>

        {/* Product Cards */}
        {loading ? (
          <p className="text-center text-gray-500">Loading products...</p>
        ) : (
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
              <ProductCard key={product._id} product={product} index={index} />
            ))}
          </div>
        )}

        {/* See More */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
            onClick={() => navigate("/products")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "14px 36px",
              borderRadius: "999px",
              background: "linear-gradient(135deg, #6366f1, #7c3aed)",
              color: "#ffffff",
              fontSize: "15px",
              fontWeight: 600,
              border: "none",
              cursor: "pointer",
              boxShadow: "0 12px 30px rgba(99,102,241,0.35)",
              transition: "box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow =
                "0 16px 40px rgba(99,102,241,0.45)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.boxShadow =
                "0 12px 30px rgba(99,102,241,0.35)")
            }
          >
            See more products
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};

export default MainHome;
