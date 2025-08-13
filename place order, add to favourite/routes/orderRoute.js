import express from 'express';
import { placeOrder } from '../controllers/placeOrder.js';

const router = express.Router();

router.post('/place_order',  placeOrder);


router.get('/collectAddress', async (req, res) => {
      try {
      res.render('collectAddress', { user: req.user });
      } catch (err) {
        console.log(err);
        res.status(500).send('Error loading book for update');
      }
    });
export default router;