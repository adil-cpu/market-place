import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function ProductPage() {
  const { id } = useParams(); // Получаем ID из URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios.get(`/products/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.error("Ошибка:", err);
        alert("Не удалось загрузить товар");
      });
  }, [id]);

  if (!product) return <div>Загрузка...</div>;

  return (
    <div>
      <h2>Товар</h2>
      <p><strong>Название:</strong> {product.name}</p>
      <p><strong>Описание:</strong> {product.description}</p>
      <p><strong>Цена:</strong> {product.price}₸</p>
    </div>
  );
}

export default ProductPage;