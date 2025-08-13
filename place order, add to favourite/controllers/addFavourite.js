import  FavouriteBook from '../models/favourite_book.js';

import Book from "../models/book.js";
import dummyUser from '../dummyuser.js';
export const addFavourite = async (req, res) => {
    try{
        // console.log(req.headers);
       console.log("working add favourite controller" );
        const user_id = dummyUser._id; 
        const book_id = req.body.bookId; 
        console.log(user_id, book_id  );
        
        const isFavourite = await FavouriteBook.findOne({ user_id, book_id });
        if (isFavourite) {
            let fav_msg = 'This book is already in your favourites.'
            // return res.status(200).json({ message: "This book is already in your favourites." });
             return res.render('confirmFavourite',{fav_msg});
        }
        const newFavourite = new FavouriteBook({ user_id, book_id });
        await newFavourite.save();
      //  return  res.status(200).json({ message: "Book added to favourites successfully." });
            let fav_msg = 'Book added to favourites successfully.'

             return res.render('confirmFavourite',{fav_msg});

        

    }catch (err) {
        console.error(err);
        res.status(500).json({message:'Internal Server Error hi i am from addFavourite controller'});
    }
};
