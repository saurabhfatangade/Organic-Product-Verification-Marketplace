import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";
function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await api.get("/orders");

        setOrders(response.data.orders || []);
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return (
      <div style={{ padding: "50px", textAlign: "center" }}>
        <h2>Loading orders...</h2>
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
      <h1 style={{ color: "#2E7D32" }}>
        My Orders
      </h1>

      {orders.length === 0 ? (
        <div
          style={{
            background: "white",
            padding: "30px",
            borderRadius: "10px",
            marginTop: "30px",
          }}
        >
          <h2>No orders found</h2>

          <p>
            Your orders will appear here after you place an order.
          </p>
        </div>
      ) : (
        orders.map((order) => (
          <div
            key={order.id}
            style={{
              background: "white",
              padding: "25px",
              marginTop: "20px",
              borderRadius: "10px",
              boxShadow: "0 3px 10px rgba(0,0,0,0.08)",
            }}
          >
            <h2>
              Order #{order.id}
            </h2>

            <p>
              <strong>Status:</strong>{" "}
              {order.status}
            </p>

            <p>
              <strong>Total:</strong>{" "}
              ₹{order.total}
            </p>

            <p>
              <strong>Items:</strong>{" "}
              {order.items?.length || 0}
            </p>

            <p>
              <strong>Date:</strong>{" "}
              {new Date(
                order.createdAt
              ).toLocaleString()}
            </p>

            <Link
  to={`/orders/${order.id}`}
  style={{
    display: "inline-block",
    marginTop: "15px",
    padding: "10px 18px",
    background: "#2E7D32",
    color: "white",
    borderRadius: "6px",
    textDecoration: "none",
  }}
>
  View Details
</Link>

          </div>
        ))
      )}
    </div>
  );
}

export default Orders;