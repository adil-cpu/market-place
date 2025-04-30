import { useEffect, useState } from "react";
import axios from "axios";

function OrdersPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios.get("/orders", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        setOrders(res.data);
      })
      .catch((err) => {
        console.error("Ошибка:", err);
        alert("Не удалось загрузить заказы");
      });
  }, []);

  return (
    <div>
      <h2>Список заказов</h2>
      <ul>
        {orders.map((order) => (
          <li key={order.ID}>
            <strong>Заказ #{order.ID}</strong> — Товар ID: {order.product_id}, Количество: {order.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OrdersPage;