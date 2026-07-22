import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";

function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortOption, setSortOption] = useState("default");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await api.get("/products");

        setProducts(response.data.products || response.data);
      } catch (error) {
        console.error("Error fetching products:", error);

        setError(
          "Unable to load products. Please make sure the backend server is running."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" ||
      product.category === category;

    return matchesSearch && matchesCategory;
  });

  const sortedProducts = [...filteredProducts];

  switch (sortOption) {
    case "price-low":
      sortedProducts.sort((a, b) => a.price - b.price);
      break;

    case "price-high":
      sortedProducts.sort((a, b) => b.price - a.price);
      break;

    case "name":
      sortedProducts.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      break;

    default:
      break;
  }

  if (loading) {
    return (
      <div
        style={{
          padding: "80px 30px",
          textAlign: "center",
        }}
      >
        <h1>🌱</h1>
        <h2>Loading organic products...</h2>
        <p>Please wait a moment.</p>
      </div>
    );
  }

  if (error) {
    return (
      <div
        style={{
          padding: "80px 30px",
          textAlign: "center",
        }}
      >
        <h1>⚠️</h1>

        <h2>Something went wrong</h2>

        <p>{error}</p>

        <button
          onClick={() => window.location.reload()}
          style={{
            padding: "12px 20px",
            background: "#2E7D32",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div
      style={{
        padding: "50px 30px",
        background: "#f7faf7",
        minHeight: "80vh",
      }}
    >
      <div
        style={{
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        <h1
          style={{
            color: "#2E7D32",
            fontSize: "36px",
          }}
        >
          Organic Products
        </h1>

        <p style={{ color: "#666" }}>
          Discover trusted and verified organic products.
        </p>

        <input
          type="text"
          placeholder="Search organic products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "100%",
            maxWidth: "500px",
            padding: "14px",
            margin: "20px auto",
            display: "block",
            border: "1px solid #ccc",
            borderRadius: "8px",
            fontSize: "16px",
          }}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{
            width: "100%",
            maxWidth: "500px",
            padding: "12px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            fontSize: "16px",
          }}
        >
          <option value="All">All Categories</option>
          <option value="Grains">Grains</option>
          <option value="Natural Products">
            Natural Products
          </option>
        </select>

        <div
          style={{
            marginTop: "20px",
          }}
        >
          <label>
            <strong>Sort By: </strong>
          </label>

          <select
            value={sortOption}
            onChange={(e) =>
              setSortOption(e.target.value)
            }
            style={{
              padding: "8px",
              marginLeft: "10px",
            }}
          >
            <option value="default">
              Default
            </option>

            <option value="price-low">
              Price: Low to High
            </option>

            <option value="price-high">
              Price: High to Low
            </option>

            <option value="name">
              Name (A-Z)
            </option>
          </select>
        </div>
                <p
          style={{
            marginTop: "20px",
            color: "#555",
          }}
        >
          Showing{" "}
          <strong>{filteredProducts.length}</strong> of{" "}
          <strong>{products.length}</strong> products
        </p>

        <button
          onClick={() => {
            setSearch("");
            setCategory("All");
            setSortOption("default");
          }}
          style={{
            marginTop: "10px",
            padding: "10px 20px",
            background: "#ffffff",
            color: "#2E7D32",
            border: "1px solid #2E7D32",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Clear Filters
        </button>
      </div>

      {sortedProducts.length === 0 ? (
        <div
          style={{
            textAlign: "center",
            padding: "40px",
          }}
        >
          <h2>No products found</h2>

          <p>
            Try changing your search or category filter.
          </p>
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "25px",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {sortedProducts.map((product) => (
            <Link
              key={product.id}
              to={`/products/${product.id}`}
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <div
                style={{
                  background: "white",
                  borderRadius: "12px",
                  padding: "20px",
                  border: "1px solid #e5e5e5",
                  boxShadow:
                    "0 4px 12px rgba(0,0,0,0.08)",
                  transition: "0.3s",
                  height: "100%",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "180px",
                    background: "#E8F5E9",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "70px",
                    marginBottom: "20px",
                  }}
                >
                  🌱
                </div>

                <h2
                  style={{
                    color: "#2E7D32",
                    marginBottom: "10px",
                    fontSize: "22px",
                  }}
                >
                  {product.name}
                </h2>

                <p
                  style={{
                    color: "#666",
                    minHeight: "50px",
                  }}
                >
                  {product.description}
                </p>

                <p
                  style={{
                    color: "#777",
                  }}
                >
                  <strong>Category:</strong>{" "}
                  {product.category}
                </p>

                <p
                  style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    color: "#2E7D32",
                    margin: "15px 0",
                  }}
                >
                  ₹{product.price}
                </p>

                <div
                  style={{
                    display: "inline-block",
                    padding: "10px 18px",
                    background: "#2E7D32",
                    color: "white",
                    borderRadius: "8px",
                    fontWeight: "bold",
                  }}
                >
                  View Details →
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Products;