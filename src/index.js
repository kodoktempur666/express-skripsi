import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import pool from './config/db.js';
import checkoutRoute from './routes/checkout.route.js';
import errorHandler from './middlewares/error.js';


dotenv.config();

const app = express()
const port = process.env.PORT || 3001;


app.use(express.json());
app.use(cors())

app.use('/checkout', checkoutRoute);
app.use(errorHandler);


app.get('/', async (req, res) => {
    const result = await pool.query('SELECT current_database()');
    res.send(`Connected to database: ${result.rows[0].current_database}`);
})


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})
