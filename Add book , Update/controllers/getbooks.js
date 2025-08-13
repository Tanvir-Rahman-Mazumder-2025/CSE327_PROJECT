
import Book from "../models/book.js";
import dummyUser from "../dummyuser.js";


export const getBooks = async (req, res) => {
    try {
  
        const books = await Book.find();
        res.render('books', { books, user: dummyUser || null, });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
