import express from 'express';
import { getBooks } from '../controllers/getbooks.js';
import { addFavourite } from '../controllers/addFavourite.js';
const router = express.Router();
router.get('/get_books', getBooks);
router.post('/add_to_favorites',addFavourite)
export default router;