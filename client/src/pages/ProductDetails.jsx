import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import api from "../services/api";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await api.get(`/products/${id}`);

        setProduct(response.data.product);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Product added to cart!");

    navigate("/cart");
  };

  if (loading) {
    return (
      <div style={{ padding: "60px", textAlign: "center" }}>
        <h2>Loading product...</h2>
      </div>
    );
  }

  if (!product) {
    return (
      <div style={{ padding: "60px", textAlign: "center" }}>
        <h2>Product not found</h2>

        <Link to="/products">
          ← Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div
      style={{
        background: "#f7faf7",
        minHeight: "80vh",
        padding: "60px 30px",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          background: "white",
          padding: "40px",
          borderRadius: "15px",
          boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
        }}
      >
        <Link
          to="/products"
          style={{
            color: "#2E7D32",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          ← Back to Products
        </Link>

        <div
          style={{
            textAlign: "center",
            fontSize: "80px",
            margin: "25px 0",
          }}
        >
          🌱
        </div>

        <h1
          style={{
            textAlign: "center",
            color: "#2E7D32",
          }}
        >
          {product.name}
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#666",
            fontSize: "18px",
          }}
        >
          {product.description}
        </p>

        <hr />

        <p>
          <strong>Category:</strong> {product.category}
        </p>

        <p
          style={{
            fontSize: "24px",
            color: "#2E7D32",
            fontWeight: "bold",
          }}
        >
          ₹{product.price}
        </p>

        <div
          style={{
            background: "#E8F5E9",
            padding: "15px",
            borderRadius: "8px",
            margin: "20px 0",
          }}
        >
          <strong>✅ Verified Organic Product</strong>

          <p>
            This product is listed on the OrganicVerify marketplace.
          </p>
        </div>

        <button
          onClick={handleAddToCart}
          style={{
            width: "100%",
            padding: "15px",
            background: "#2E7D32",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          🛒 Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;