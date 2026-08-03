// client/src/App.js

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Orders from "./pages/Orders";
import AdminDashboard from "./pages/AdminDashboard";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import ManageOrders from "./pages/ManageOrders";

import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>

          <Navbar />

          <Routes>
            {/* User Routes */}
            <Route path="/" element={<Home />} />

            <Route path="/login" element={<Login />} />

            <Route path="/register" element={<Register />} />

            <Route
              path="/product/:id"
              element={<ProductDetails />}
            />

            <Route path="/cart" element={<Cart />} />

            <Route
              path="/checkout"
              element={<Checkout />}
            />

            <Route path="/orders" element={<Orders />} />

            {/* Admin Routes */}
            <Route
              path="/admin"
              element={<AdminDashboard />}
            />

            <Route
              path="/admin/add-product"
              element={<AddProduct />}
            />

            <Route
              path="/admin/edit-product/:id"
              element={<EditProduct />}
            />

            <Route
              path="/admin/orders"
              element={<ManageOrders />}
            />
          </Routes>

          <Footer />

        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
