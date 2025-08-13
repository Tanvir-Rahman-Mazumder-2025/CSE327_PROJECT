
import Book from "../models/book.js";


export const updateBook = async (req, res) => {
    try {
        const book_id = req.params.book_id;
        console.log("working updatebook", book_id);
        await Book.findByIdAndUpdate(book_id, {
            title: req.body.title,
            author: req.body.author,
            price: req.body.price,
            description: req.body.description,
            category: req.body.category,
            language: req.body.language,
            image_url: req.body.image_url,
            availavility_status: req.body.availavility_status,
        });
        // res.status(200).json({message:'Book updated successfully!!'});
        res.redirect('/get_books');
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error ' });
    }
};
