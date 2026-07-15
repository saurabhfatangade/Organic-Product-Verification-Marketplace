import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";

import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/products" element={<Products />} />

          <Route
            path="/products/:id"
            element={<ProductDetails />}
          />

          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />

          <Route path="*" element={<NotFound />} />
        <Route path="/cart" element={<Cart />} />
        
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;