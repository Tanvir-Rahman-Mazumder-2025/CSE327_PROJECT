import express from 'express';
import dotenv from 'dotenv';
import connectDb from './config/database.js';
import bookRoute from './routes/bookRoute.js';
import cartRoute from './routes/cartRoute.js';
import orderRoute from './routes/orderRoute.js'
const app = express();
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dotenv.config();
app.use('/api/book', bookRoute);
app.use('/api/cart', cartRoute);
app.use(orderRoute)
app.get('/', (req, res) => {

    res.redirect('/api/book/get_books' );
});
app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})