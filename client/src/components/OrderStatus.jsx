function OrderStatus({ status }) {
  const statuses = [
    "Pending",
    "Confirmed",
    "Shipped",
    "Delivered",
  ];

  const currentIndex = statuses.indexOf(status);

  return (
    <div style={{ marginTop: "25px" }}>
      <h3>Order Progress</h3>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "10px",
          flexWrap: "wrap",
        }}
      >
        {statuses.map((item, index) => {
          const completed =
            index <= currentIndex;

          return (
            <div
              key={item}
              style={{
                flex: 1,
                minWidth: "120px",
                padding: "15px",
                textAlign: "center",
                borderRadius: "8px",
                background: completed
                  ? "#2E7D32"
                  : "#e0e0e0",
                color: completed
                  ? "white"
                  : "#555",
                fontWeight: "bold",
              }}
            >
              {index + 1}. {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OrderStatus;