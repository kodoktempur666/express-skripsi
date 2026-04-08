import pkg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pkg
const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    min: 0,
    max: 5,
})

pool.on('connect', () => {
    console.log('Connected to the database');
    console.log(`Database: ${process.env.DB_NAME}`);
    console.log(`User: ${process.env.DB_USER}`);
    console.log(`Host: ${process.env.DB_HOST}`);
    console.log(`Port: ${process.env.DB_PORT}`);
    console.log(`password: ${process.env.DB_PASSWORD ? '********' : 'Not Set'}`);
})

export default pool;