
import dummyUser from "../dummyuser.js";
import Book from "../models/book.js";


export const addBook = async (req, res) => {
    try {
        if (dummyUser.role !== 'admin') {
            return res.status(400).json({ message: "Only admins can add books." });
        }

        const book = new Book({
            title: req.body.title,
            author: req.body.author,
            price: req.body.price,
            description: req.body.description,
            category: req.body.category,
            language: req.body.language,
            image_url: req.body.image_url,
            availavility_status: req.body.availavility_status,
        })
        await book.save();
        res.redirect('get_books');
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error hi i am from addBook controller' });
    }
};
