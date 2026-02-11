import express from 'express';
import { insertCheckout, getCheckouts, editCheckout } from '../controllers/checkout.controller.js';

const route = express.Router();

route.post('/', insertCheckout)

route.get('/', getCheckouts)

route.patch('/', editCheckout)

export default route;