import Book from "../models/book.js";


/**
 * @swagger
 * /getBooks:
 *   get:
 *     summary: get all books from the database.
 *     tags: [Getbooks]
 *     description: fetch all books from the database and render showAllBooks ejs.
 *     responses:
 *       200:
 *         description: successfully retrieved books(ejs rendered).
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Internal server error.
 */

export const getBooks = async (req, res) => {
    try {
        const books = await Book.find();
        console.log(req.user);
        res.render('showAllBooks', { books, user: req.user });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error ' });
    }
};
