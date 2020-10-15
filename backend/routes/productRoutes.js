import express from 'express';
import {
  getProductById,
  getProducts,
} from '../controllers/productControllers.js';
const router = express.Router();

//get all products
//public acess
//GET /api/products
router.route('/').get(getProducts);

//get one single product by id
//public acess
//GET /api/products/:id
router.route('/:id').get(getProductById);

export default router;
