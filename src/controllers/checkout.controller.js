import { createCheckout, getCheckout, editCheckout } from "../models/checkout.model.js";

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
        const allCheckout = await getCheckout();
        handleResponse(res, 201, 'Checkout created successfully', allCheckout);
    } catch (err) {
        next(err)
    }
}


export const editCheckout = async (req, res, next) => {
    try {
        const { name, amount, item } = request.body;
        const updatedCheckout = await editCheckout(name, amount, item);
        handleResponse(res, 201, 'Checkout created successfully', updatedCheckout);
    } catch (error) {
        next(error)
    }
}