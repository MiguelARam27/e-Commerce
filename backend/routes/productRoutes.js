import express from 'express';
import {
  getProductById,
  getProducts,
  deleteProductByID,
  updateProduct,
  createProduct,
} from '../controllers/productControllers.js';
import { protect, isAdmin } from '../middleware/authMiddleware.js';
const router = express.Router();

router.route('/').get(getProducts).post(protect, isAdmin, createProduct);

router
  .route('/:id')
  .get(getProductById)
  .delete(protect, isAdmin, deleteProductByID)
  .put(protect, isAdmin, updateProduct);

export default router;
