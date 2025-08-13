import express from 'express';
import dotenv from 'dotenv';
import connectDb from './config/database.js';
import bookRoute from './routes/bookRoute.js';
import cartRoute from './routes/cartRoute.js';
import dummyUser from './dummyuser.js';
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dotenv.config();
app.use('/api/book', bookRoute);
app.use('/api/cart', cartRoute);
app.get('/', (req, res) => {
    console.log(req.user);
    res.render('index', { user: dummyUser });
});
app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})