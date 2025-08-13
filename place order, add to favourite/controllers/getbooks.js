
import dummyUser from "../dummyuser.js";
import Book from "../models/book.js";


export const getBooks = async (req, res) => {
    try{
       
       const books = await Book.find();
         res.render('showbook', {books,user:dummyUser || null});
}catch (err) {
        console.error(err);
        res.status(500).json({message:'Internal Server Error '});
    }
};
