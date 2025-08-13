import express from 'express';
import { sortBookByDate } from '../controllers/sortBookByDate.js';
import { sortBookByPrice } from '../controllers/sortBookByPrice.js';
import { getBooks } from '../controllers/getbooks.js';
const router = express.Router();
router.get('/get_books', getBooks);
router.get('/sort_books_by_date', sortBookByDate);
router.get('/sort_books_by_price', sortBookByPrice);
export default router;