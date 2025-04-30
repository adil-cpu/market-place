import { useState } from "react";
import axios from "axios";

function RegisterPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/auth/register", form);
      alert("Регистрация успешна!");
    } catch (err) {
        alert("Ошибка: " + (err.response?.data?.error || "Что-то пошло не так"));
    }
  };

  return (
    <div>
      <h2>Регистрация</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Имя" onChange={handleChange} /><br />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} /><br />
        <input name="password" type="password" placeholder="Пароль" onChange={handleChange} /><br />
        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
}

export default RegisterPage;

