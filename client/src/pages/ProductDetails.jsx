import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import api from "../services/api";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await api.get(`/products/${id}`);
        setProduct(response.data.product);
      const allResponse = await api.get("/products");

setAllProducts(
  allResponse.data.products || allResponse.data
);} catch (error) {
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
<img
  src={product.image}
  alt={product.name}
  style={{
    width: "100%",
    maxWidth: "450px",
    height: "350px",
    objectFit: "cover",
    borderRadius: "12px",
    display: "block",
    margin: "0 auto 30px",
  }}
  onError={(e) => {
    e.target.src =
      "https://via.placeholder.com/500x350?text=Organic+Product";
  }}
/>

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
    marginBottom: "15px",
  }}
>
128 Verified Customer Reviews
</p>

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
    marginTop: "15px",
    marginBottom: "20px",
  }}
>
  <span
    style={{
      color: "#FFA000",
      fontSize: "22px",
    }}
  >
    ⭐⭐⭐⭐⭐
  </span>

  <span
    style={{
      marginLeft: "10px",
      color: "#666",
    }}
  >
    4.8 (128 Reviews)
  </span>
</div>

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

            <button
  onClick={() => {
    const wishlist =
      JSON.parse(localStorage.getItem("wishlist")) || [];

    const exists = wishlist.find(
      (item) => item.id === product.id
    );

    if (exists) {
      alert("Already in wishlist");
      return;
    }

    wishlist.push(product);

    localStorage.setItem(
      "wishlist",
      JSON.stringify(wishlist)
    );

    alert("Added to wishlist ❤️");
  }}
  style={{
    width: "100%",
    marginTop: "15px",
    padding: "15px",
    background: "#D32F2F",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "18px",
    cursor: "pointer",
  }}
>
  ❤️ Add to Wishlist
</button>

<hr style={{ margin: "40px 0" }} />

<h2>Customer Reviews</h2>

<div
  style={{
    background: "#f8f8f8",
    padding: "20px",
    borderRadius: "10px",
    marginTop: "20px",
  }}
>
  <strong>⭐⭐⭐⭐⭐ Rahul P.</strong>

  <p>
    Excellent quality. Packaging was good and
    the product feels genuine.
  </p>
</div>

<div
  style={{
    background: "#f8f8f8",
    padding: "20px",
    borderRadius: "10px",
    marginTop: "15px",
  }}
>
  <strong>⭐⭐⭐⭐ Sneha K.</strong>

  <p>
    Fresh organic product.
    Delivery was on time.
  </p>
</div>

<div
  style={{
    background: "#f8f8f8",
    padding: "20px",
    borderRadius: "10px",
    marginTop: "15px",
  }}
>
  <strong>⭐⭐⭐⭐⭐ Amit S.</strong>

  <p>
    I will definitely buy this again.
  </p>
  <hr style={{ margin: "50px 0" }} />

<h2
  style={{
    color: "#2E7D32",
    marginBottom: "25px",
  }}
>
Related Products
</h2>

<div
  style={{
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit, minmax(250px,1fr))",
    gap: "25px",
  }}
>
  {relatedProducts.map((item) => (
    <Link
      key={item.id}
      to={`/products/${item.id}`}
      style={{
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          boxShadow:
            "0 3px 10px rgba(0,0,0,0.08)",
        }}
      >
        <img
          src={item.image}
          alt={item.name}
          style={{
            width: "100%",
            height: "170px",
            objectFit: "cover",
            borderRadius: "8px",
          }}
        />

        <h3>{item.name}</h3>

        <p>₹{item.price}</p>
      </div>
    </Link>
  ))}
</div>
</div>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default ProductDetails;