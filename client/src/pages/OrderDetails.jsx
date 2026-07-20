import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../services/api";
import OrderStatus from "../components/OrderStatus";

function OrderDetails() {
  const { id } = useParams();

  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await api.get(`/orders/${id}`);

        setOrder(response.data.order);
      } catch (error) {
        console.error("Error fetching order:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [id]);

  if (loading) {
    return (
      <div style={{ padding: "50px", textAlign: "center" }}>
        <h2>Loading order...</h2>
      </div>
    );
  }

  if (!order) {
    return (
      <div style={{ padding: "50px", textAlign: "center" }}>
        <h2>Order not found</h2>

        <Link to="/orders">
          ← Back to Orders
        </Link>
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
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <Link to="/orders">
          ← Back to Orders
        </Link>

        <div
          style={{
            background: "white",
            padding: "30px",
            marginTop: "25px",
            borderRadius: "12px",
          }}
        >
          <h1>Order #{order.id}</h1>

          <p>
            <strong>Status:</strong>{" "}
            {order.status}
          </p>

          <OrderStatus status={order.status} />

          <p>
            <strong>Customer:</strong>{" "}
            {order.customer?.name}
          </p>

          <p>
            <strong>Email:</strong>{" "}
            {order.customer?.email}
          </p>

          <p>
            <strong>Address:</strong>{" "}
            {order.customer?.address},{" "}
            {order.customer?.city} -{" "}
            {order.customer?.pincode}
          </p>

          <hr />

          <h2>Products</h2>

          {order.items?.map((product) => (
            <div
              key={product.id}
              style={{
                padding: "15px 0",
                borderBottom: "1px solid #ddd",
              }}
            >
              <strong>{product.name}</strong>

              <p>
                Quantity:{" "}
                {product.quantity || 1}
              </p>

              <p>
                Price: ₹{product.price}
              </p>
            </div>
          ))}

          <h2
            style={{
              color: "#2E7D32",
              marginTop: "25px",
            }}
          >
            Total: ₹{order.total}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default OrderDetails;