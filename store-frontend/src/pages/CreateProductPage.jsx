import { useState } from "react";
import axios from "axios";

function CreateProductPage() {
  const [form, setForm] = useState({ name: "", description: "", price: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await axios.post("/products", form, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Товар успешно создан!");
    } catch (err) {
      console.error("Ошибка:", err);
      alert("Не удалось создать товар");
    }
  };

  return (
    <div>
      <h2>Создать товар</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Название" onChange={handleChange} /><br />
        <input name="description" placeholder="Описание" onChange={handleChange} /><br />
        <input name="price" type="number" placeholder="Цена" onChange={handleChange} /><br />
        <button type="submit">Создать</button>
      </form>
    </div>
  );
}

export default CreateProductPage;