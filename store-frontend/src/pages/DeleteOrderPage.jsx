import { useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function DeleteOrderPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios.delete(`/orders/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(() => {
        alert("Заказ успешно удалён!");
        navigate("/orders");
      })
      .catch((err) => {
        console.error("Ошибка:", err);
        alert("Не удалось удалить заказ");
      });
  }, [id, navigate]);

  return <div>Удаление заказа...</div>;
}

export default DeleteOrderPage;