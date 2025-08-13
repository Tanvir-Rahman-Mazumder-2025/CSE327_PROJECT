
import dummyUser from "../dummyuser.js";
import Book from "../models/book.js";


export const sortBookByPrice = async (req, res) => {
    try{
        const sort = req.query.sort
       const books = await Book.find().sort({price: sort==='asc'? 1:-1 }); 
        //  res.status(200).json({data: books});
        res.render('books', { books ,user:dummyUser,sort});
}catch (err) {
        console.error(err);
        res.status(500).json({message:'Internal Server Error hi i am from setbookbydate controller'});
    }
};
