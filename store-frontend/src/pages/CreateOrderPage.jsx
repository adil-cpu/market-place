import { useState } from "react";
import axios from "axios";

function CreateOrderPage() {
  const [form, setForm] = useState({ product_id: "", quantity: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await axios.post("/orders", form, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Заказ успешно создан!");
    } catch (err) {
      console.error("Ошибка:", err);
      alert("Не удалось создать заказ");
    }
  };

  return (
    <div>
      <h2>Создать заказ</h2>
      <form onSubmit={handleSubmit}>
        <input name="product_id" type="number" placeholder="ID товара" onChange={handleChange} /><br />
        <input name="quantity" type="number" placeholder="Количество" onChange={handleChange} /><br />
        <button type="submit">Создать заказ</button>
      </form>
    </div>
  );
}

export default CreateOrderPage;