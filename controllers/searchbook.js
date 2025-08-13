import Book from '../models/book.js'



/**
 * @swagger
 * /searchBook:
 *   get:
 *     summary: Search a book by its title.
 *     tags: [Searchbook]
 *     description: Search book in the database by title, using mongodb regex search.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               query:
 *                 type: string
 *                 description: Search keyword book title
 *                 example: cracking the coding interview.
 *     responses:
 *       200:
 *         description: successfully found the matching books renders the data in ejs.
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
export const searchBook = async (req, res) => {

    try {
        const query = req.body.query
        const books = await Book.find({
            title: { $regex: query, $options: 'i' }
        });

        res.render('showAllBooks', { books, user: req.user })

    } catch (error) {
        console.log(error.message);
        res.status(500).send('internal server error!')
    }
}