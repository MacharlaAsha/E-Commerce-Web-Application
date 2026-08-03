# E-Commerce Web Application

A full-stack E-Commerce Web Application built with React.js, Node.js, Express.js, and MongoDB.

## Features

- User Registration & Login
- JWT Authentication
- Role-Based Access (Admin/User)
- Product Management
- Product Catalog
- Add to Cart
- Checkout
- Order Management
- Order Tracking
- Admin Dashboard
- RESTful APIs
- MongoDB Database Integration

## Tech Stack

### Frontend
- React.js
- React Router
- Axios
- Context API

### Backend
- Node.js
- Express.js
- JWT
- bcrypt.js

### Database
- MongoDB
- Mongoose

## Project Structure

```
E-Commerce/
│
├── client/
│
├── server/
│
└── README.md
```

## API Endpoints

### Authentication

- POST /api/auth/register
- POST /api/auth/login

### Products

- GET /api/products
- GET /api/products/:id
- POST /api/products
- PUT /api/products/:id
- DELETE /api/products/:id

### Orders

- POST /api/orders
- GET /api/orders
- GET /api/orders/admin
- PUT /api/orders/:id

## Installation

### Backend

```bash
cd server
npm install
npm run dev
```

### Frontend

```bash
cd client
npm install
npm start
```

## Environment Variables

Create a `.env` file inside the `server` folder.

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/ecommerce
JWT_SECRET=your_jwt_secret_key
```

## Future Enhancements

- Payment Gateway Integration
- Wishlist
- Product Reviews
- Search & Filters
- Image Upload with Cloudinary
- Email Notifications
- Invoice Generation

## Author

Developed by **Your Name**
