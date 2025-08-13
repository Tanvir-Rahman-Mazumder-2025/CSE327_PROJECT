import express from 'express'
import dummyUser from '../dummyuser.js';
import { addBook } from '../controllers/addbook.js';
import { updateBook } from '../controllers/updatebook.js';
import { getBooks } from '../controllers/getbooks.js';
import Book from '../models/book.js';
const router = express.Router();

router.post('/add_book', addBook);
router.post('/update_book/:book_id', updateBook)
router.get('/get_books', getBooks);

router.get('/render/update/:id', async (req, res) => {
    try {

        const book = await Book.findById(req.params.id);
        console.log(book);
        if (!book) return res.status(404).send('Book not found');
        res.render('updatebook', { book, user: dummyUser });
    } catch (err) {
        console.log(err);
        res.status(500).send('Error loading book for update');
    }
});

export default router;