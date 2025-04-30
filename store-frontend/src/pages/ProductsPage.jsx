import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("Отправка запроса с токеном:", token);
    axios.get("/products", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        console.log("Ответ:", res.data);
        setProducts(res.data);
      })
      .catch((err) => {
        console.error("Ошибка:", err);
        alert("Не удалось загрузить товары");
      });
  }, []);

  return (
    <div>
      <h2>Список товаров</h2>
      <ul>
        {products.map((p) => (
          <li key={p.ID}>
            <strong>{p.name}</strong> — {p.description} — {p.price}₸
            <br />
            <Link to={`/product/${p.ID}`}>Подробнее</Link> |{" "}
            <Link to={`/delete-product/${p.ID}`}>Удалить</Link>
          </li>
        ))}
      </ul>
      <Link to="/create-product">Создать новый товар</Link>
      <br />
      <Link to="/create-order">Создать заказ</Link>
      <br />
      <Link to="/orders">Мои заказы</Link>
    </div>
  );
}

export default ProductsPage;