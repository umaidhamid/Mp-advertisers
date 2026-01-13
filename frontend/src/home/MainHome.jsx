import React, { useEffect, useState } from "react";
import HeroSection from "./HeroSection";
import ImageSlider from "../components/Work/Slider";
import RotatingText from "../../animation/RotatingText.jsx";
import ProductCard from "../components/homepageproducts/ProductCard";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import api from "../api/axios.js";
import LogoLoop from "../../animation/LogoLoop";
import MapSection from "../components/Map/Map";
import Footer from "../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullhorn, faClock } from "@fortawesome/free-solid-svg-icons";
import {
  Printer,
  Image,
  Palette,
  PenTool,
  Layers,
  ScanLine,
  Camera,
  Megaphone,
  LayoutTemplate,
  Sticker,
} from "lucide-react";

const iconClass = "w-15 h-15 stroke-[1.2] transition-all duration-300 ease-out";

const logos = [
  {
    node: <Printer className={`${iconClass} text-blue-600`} />,
    ariaLabel: "Printing Services",
  },
  {
    node: <Image className={`${iconClass} text-emerald-500`} />,
    ariaLabel: "Photo Printing",
  },
  {
    node: <Palette className={`${iconClass} text-pink-500`} />,
    ariaLabel: "Creative Design",
  },
  {
    node: <PenTool className={`${iconClass} text-indigo-500`} />,
    ariaLabel: "Graphic Design",
  },
  {
    node: <LayoutTemplate className={`${iconClass} text-cyan-500`} />,
    ariaLabel: "Layout & Flex Printing",
  },
  {
    node: <Sticker className={`${iconClass} text-yellow-500`} />,
    ariaLabel: "Sticker & Label Printing",
  },
  {
    node: <Camera className={`${iconClass} text-violet-500`} />,
    ariaLabel: "Photography",
  },
  {
    node: <Megaphone className={`${iconClass} text-red-500`} />,
    ariaLabel: "Advertising & Marketing",
  },
  {
    node: <ScanLine className={`${iconClass} text-teal-500`} />,
    ariaLabel: "Large Format Printing",
  },
  {
    node: <Layers className={`${iconClass} text-orange-500`} />,
    ariaLabel: "Brand Identity",
  },
];
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
            limit: 3, // 👈 only show 3 on home page
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
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await api.get("/api/product/getmessage");
        if (response.data.success) {
          setMessage(response.data.latestMessage.message);
        }
      } catch (error) {
        console.error("❌ Error fetching message:", error);
      }
    };

    fetchMessage();
  }, []); // ✅ Run only once on mount
  return (
    <div className="bg-gray-300">
      <div
        style={{
          overflow: "hidden",
          whiteSpace: "nowrap",
          // background: "linear-gradient(90deg, #ff0000a7, #ff4d4d)",
          color: "white",
          padding: "8px 0",
          position: "relative",
          fontWeight: "600",
          fontSize: "18px",

          backgroundColor: "grey",
        }}
      >
        <div
          style={{
            display: "inline-block",
            animation: "scrollText 10s linear infinite",
          }}
        >
          <FontAwesomeIcon icon={faBullhorn} />
          {message}
          <FontAwesomeIcon icon={faClock} />
        </div>

        <style>
          {`
            @keyframes scrollText {
              0% { transform: translateX(100%); }
              100% { transform: translateX(-100%); }
            }
              
          `}
        </style>
      </div>
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
            Our Work
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
      <section
        style={{
          position: "relative",
          zIndex: 10,
          width: "100vw",
          padding: "60px 20px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "36px",
            fontWeight: "700",
            color: "#ec4899", // pink
            marginBottom: "16px",
          }}
        >
          Mission
        </h2>
        <p
          style={{
            fontSize: "18px",
            color: "#374151",
            maxWidth: "700px",
            margin: "0 auto",
            lineHeight: "1.6",
          }}
        >
          To make other brands great, giving them life through marketing.
        </p>
      </section>
      {/* Vision Section */}
      <section
        style={{
          position: "relative",
          zIndex: 10,
          padding: "60px 20px",
          textAlign: "center",
          backgroundColor: "#0f172a", // dark bg
        }}
      >
        <h2
          style={{
            fontSize: "36px",
            fontWeight: "700",
            color: "#ec4899",
            marginBottom: "16px",
          }}
        >
          Vision
        </h2>
        <p
          style={{
            fontSize: "18px",
            color: "#e5e7eb",
            maxWidth: "700px",
            margin: "0 auto",
            lineHeight: "1.6",
          }}
        >
          To be the preferred print and fulfillment partner to marketing
          managers, through consistency & reliability.
        </p>
      </section>
      {/* Purpose Section */}
      <section
        style={{
          position: "relative",
          zIndex: 10,
          padding: "60px 20px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "36px",
            fontWeight: "700",
            color: "#ec4899",
            marginBottom: "16px",
          }}
        >
          Our Purpose
        </h2>
        <p
          style={{
            fontSize: "18px",
            color: "#374151",
            maxWidth: "700px",
            margin: "0 auto",
            lineHeight: "1.6",
          }}
        >
          We exist to simplify and speed up the printing process to give you a
          hassle free experience.
        </p>
      </section>
      <section className="py-20 px-6  mx-auto">
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

      <div className="bg-white dark:bg-black flex flex-col justify-center">
        <LogoLoop
          logos={logos}
          speed={30}
          logoHeight={100}
          gap={100}
          pauseOnHover
          scaleOnHover
          fadeOut
          className="text-gray-700 dark:text-gray-200"
        />
      </div>
      {/* <MapSection /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default MainHome;
