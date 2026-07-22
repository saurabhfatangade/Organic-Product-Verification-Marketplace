import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Wishlist() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const data =
      JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(data);
  }, []);

  const removeItem = (id) => {
    const updated = wishlist.filter(
      (item) => item.id !== id
    );

    setWishlist(updated);

    localStorage.setItem(
      "wishlist",
      JSON.stringify(updated)
    );
  };

  return (
    <div
      style={{
        padding: "50px 30px",
        background: "#f7faf7",
        minHeight: "80vh",
      }}
    >
      <h1 style={{ color: "#2E7D32" }}>
        ❤️ My Wishlist
      </h1>

      {wishlist.length === 0 ? (
        <div
          style={{
            background: "white",
            padding: "30px",
            borderRadius: "10px",
            marginTop: "30px",
          }}
        >
          <h2>Your wishlist is empty.</h2>

          <Link to="/products">
            Browse Products
          </Link>
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(280px,1fr))",
            gap: "25px",
            marginTop: "30px",
          }}
        >
          {wishlist.map((product) => (
            <div
              key={product.id}
              style={{
                background: "white",
                borderRadius: "10px",
                padding: "20px",
                boxShadow:
                  "0 3px 10px rgba(0,0,0,0.08)",
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />

              <h3>{product.name}</h3>

              <p>₹{product.price}</p>

              <button
                onClick={() => removeItem(product.id)}
                style={{
                  background: "#D32F2F",
                  color: "white",
                  border: "none",
                  padding: "10px 18px",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;