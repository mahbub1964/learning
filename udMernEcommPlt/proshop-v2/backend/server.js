//console.log("Hello World!");
import express from 'express';
import dotenv from 'dotenv'; dotenv.config();
import cookieParser from 'cookie-parser';
import connectDB from './config/db.js'; connectDB();
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
//import products from './data/products.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';

const port = process.env.PORT || 5000;
const app = express();

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Cookie Parser middleware
app.use(cookieParser());

app.get('/', (req, res) => { res.send('API is running...'); });
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);

app.get("/api/config/paypal", (req, res) => res.send({
  clientId: process.env.PAYPAL_CLIENT_ID
}));

// app.get('/api/products', (req, res) => { res.json(products); });
// app.get('/api/products/:id', (req, res) => {
//   const product = products.find((p) => p._id === req.params.id);
//   res.json(product);
// });

app.use(notFound); app.use(errorHandler);
app.listen(port, () => console.log(`Server is running on port ${port}`));
