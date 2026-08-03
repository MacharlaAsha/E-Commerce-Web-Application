// client/src/services/api.js

import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach JWT token to every request
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// Authentication APIs
export const registerUser = (userData) =>
  API.post("/auth/register", userData);

export const loginUser = (userData) =>
  API.post("/auth/login", userData);

// Product APIs
export const getProducts = () =>
  API.get("/products");

export const getProductById = (id) =>
  API.get(`/products/${id}`);

export const addProduct = (productData) =>
  API.post("/products", productData);

export const updateProduct = (id, productData) =>
  API.put(`/products/${id}`, productData);

export const deleteProduct = (id) =>
  API.delete(`/products/${id}`);

// Order APIs
export const createOrder = (orderData) =>
  API.post("/orders", orderData);

export const getUserOrders = () =>
  API.get("/orders");

export const getAllOrders = () =>
  API.get("/orders/admin");

export const updateOrderStatus = (id, status) =>
  API.put(`/orders/${id}`, { status });

export default API;
