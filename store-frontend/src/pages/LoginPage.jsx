import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/auth/login", form);
      const token = res.data.token;

      localStorage.setItem("token", token); // сохраняем токен
      alert("Вход выполнен!");

      navigate("/products"); // переходим на страницу товаров
    } catch (err) {
      alert("Ошибка: " + (err.response?.data?.error || "Неверный email или пароль"));
    }
  };

  return (
    <div>
      <h2>Вход</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
        /><br />
        <input
          name="password"
          type="password"
          placeholder="Пароль"
          onChange={handleChange}
        /><br />
        <button type="submit">Войти</button>
      </form>
    </div>
  );
}

export default LoginPage;
