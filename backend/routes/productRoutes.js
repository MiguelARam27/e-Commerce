import express from 'express';
import {
  getProductById,
  getProducts,
  deleteProductByID,
} from '../controllers/productControllers.js';
import { protect, isAdmin } from '../middleware/authMiddleware.js';
const router = express.Router();

//get all products
//public acess
//GET /api/products
router.route('/').get(getProducts);

//get one single product by id
//public acess
//GET /api/products/:id
router
  .route('/:id')
  .get(getProductById)
  .delete(protect, isAdmin, deleteProductByID);

router.route('/:id');

export default router;
