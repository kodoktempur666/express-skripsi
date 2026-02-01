import pool from '../config/db.js';

const getAllCheckouts = async () => {
    const result = await pool.query('SELECT * FROM checkouts');
    return result.rows;
}

const createCheckout = async (name, amount, item) => {
    const result = await pool.query(
        'INSERT INTO checkouts (name, amount, item) VALUES ($1, $2, $3) RETURNING *',
        [name, amount, item]
    );
    return result.rows[0];
}

export {
    getAllCheckouts,
    createCheckout
};
