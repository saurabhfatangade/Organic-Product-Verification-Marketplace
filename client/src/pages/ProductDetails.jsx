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

  if (loading) {
    return <h2>Loading product...</h2>;
  }

  if (!product) {
    return (
      <div style={{ padding: "30px" }}>
        <h2>Product not found</h2>

        <Link to="/products">
          Back to Products
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push(product);

  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Product added to cart!");

  navigate("/cart");
};

  return (
    <div style={{ padding: "30px" }}>
      <Link to="/products">
        ← Back to Products
      </Link>

      <h1>{product.name}</h1>

      <p>{product.description}</p>

      <p>
        <strong>Category:</strong> {product.category}
      </p>

      <p>
        <strong>Price:</strong> ₹{product.price}
      </p>

      <p>
        <strong>Verification Status:</strong>{" "}
        Verified Organic Product
      </p>

<button onClick={handleAddToCart}>
  Add to Cart
</button>
    </div>
  );
}

export default ProductDetails;