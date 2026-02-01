import { createCheckout, getAllCheckouts } from "../models/checkout.model.js";

const handleResponse = (res, status, message, data = null) => {
    res.status(status).json({
        status,
        message,
        data
    });
}

export const insertCheckout = async (req, res, next) => {
    const { name, amount, item } = req.body;
    try {
        const newCheckout = await createCheckout(name, amount, item);
        handleResponse(res, 201, 'Checkout created successfully', newCheckout);
    } catch (err) {
        next(err)
    }
}

export const getCheckouts = async (req, res, next) => {
    try {
        const allCheckpout = await getAllCheckouts();
        handleResponse(res, 201, 'Checkout created successfully', allCheckpout);
    } catch (err) {
        next(err)
    }
}