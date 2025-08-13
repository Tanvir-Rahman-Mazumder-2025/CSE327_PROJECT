
import dummyUser from "../dummyuser.js";
import Book from "../models/book.js";


export const sortBookByDate = async (req, res) => {
    try {
        const sort = req.query.sort
        console.log(sort);
        const books = await Book.find().sort({ createdAt: sort === 'asc' ? 1 : -1 }).limit(10); 
        res.render('books', { books ,user:dummyUser,sort});
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error hi i am from setbookbydate controller' });
    }
};
