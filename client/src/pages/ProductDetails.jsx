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

  const existingProduct = cart.find(
    (item) => item.id === product.id
  );

  let updatedCart;

  if (existingProduct) {
    updatedCart = cart.map((item) =>
      item.id === product.id
        ? {
            ...item,
            quantity: (item.quantity || 1) + 1,
          }
        : item
    );
  } else {
    updatedCart = [
      ...cart,
      {
        ...product,
        quantity: 1,
      },
    ];
  }

  localStorage.setItem(
    "cart",
    JSON.stringify(updatedCart)
  );

  alert("Product added to cart!");

  navigate("/cart");
};

  if (loading) {
    return (
      <div style={{ padding: "80px", textAlign: "center" }}>
        <h2>Loading product...</h2>
      </div>
    );
  }

  if (!product) {
    return (
      <div style={{ padding: "80px", textAlign: "center" }}>
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
        padding: "50px 30px",
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        <Link
          to="/products"
          style={{
            display: "inline-block",
            marginBottom: "20px",
            color: "#2E7D32",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          ← Back to Products
        </Link>

       <div
  className="product-details-card"
  style={{
    background: "white",
    borderRadius: "15px",
    padding: "40px",
    boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
  }}
>
          {/* Product Image */}
          <div
            style={{
              minHeight: "350px",
              background: "#E8F5E9",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "120px",
            }}
          >
            🌱
          </div>

          {/* Product Information */}
          <div>
            <p
              style={{
                color: "#2E7D32",
                fontWeight: "bold",
              }}
            >
              VERIFIED ORGANIC PRODUCT
            </p>

            <h1
              style={{
                color: "#2E7D32",
                fontSize: "36px",
              }}
            >
              {product.name}
            </h1>

            <p
              style={{
                color: "#666",
                fontSize: "18px",
                lineHeight: "1.6",
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
                fontSize: "30px",
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
              <strong>✅ Organic Verification</strong>

              <p>
                This product is listed as a verified organic product
                on OrganicVerify.
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
      </div>
    </div>
  );
}

export default ProductDetails;