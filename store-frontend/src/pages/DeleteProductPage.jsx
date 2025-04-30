import { useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function DeleteProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios.delete(`/products/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(() => {
        alert("Товар успешно удалён!");
        navigate("/products");
      })
      .catch((err) => {
        console.error("Ошибка:", err);
        alert("Не удалось удалить товар");
      });
  }, [id, navigate]);

  return <div>Удаление товара...</div>;
}

export default DeleteProductPage;