import express from 'express';
import dotenv from 'dotenv';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';
import colors from 'colors';
import productRoutes from './routes/productRoutes.js';
dotenv.config();

connectDB();
const app = express();
app.get('/', (req, res) => {
  res.send('Api is running');
});

app.use('/api/products', productRoutes);

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 5000;

app.listen(
  port,
  console.log(
    `server running on port ${port} and in ${process.env.NODE_ENV} mode`.yellow
      .bold
  )
);
