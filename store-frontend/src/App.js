import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProductsPage from "./pages/ProductsPage";
import ProductPage from "./pages/ProductPage"; 
import CreateProductPage from "./pages/CreateProductPage";
import CreateOrderPage from "./pages/CreateOrderPage";
import OrdersPage from "./pages/OrdersPage"; 
import DeleteOrderPage from "./pages/DeleteOrderPage";
import DeleteProductPage from "./pages/DeleteProductPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/create-product" element={<CreateProductPage />} />
        <Route path="/create-order" element={<CreateOrderPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/delete-order/:id" element={<DeleteOrderPage />} />
        <Route path="/delete-product/:id" element={<DeleteProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;