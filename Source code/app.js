import express from 'express';
import dotenv from 'dotenv';
import connectDb from './config/database.js';

import adminRoute from './routes/adminRoute.js'
import dummyUser from './dummyuser.js';
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dotenv.config();

app.use(adminRoute)
app.get('/', (req, res) => {
   
    res.render('addbook', { user: dummyUser });
});
app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})