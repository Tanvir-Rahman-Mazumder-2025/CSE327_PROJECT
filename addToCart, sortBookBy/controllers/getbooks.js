
import dummyUser from "../dummyuser.js";
import Book from "../models/book.js";


export const getBooks = async (req, res) => {
    try{
  
       const books = await Book.find();
         res.render('books', {books,user:dummyUser || null,sort:null});
}catch (err) {
        console.error(err);
        res.status(500).json({message:'Internal Server Error hi i am from getbooks controller'});
    }
};
