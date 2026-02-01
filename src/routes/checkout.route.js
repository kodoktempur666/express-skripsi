import express from 'express';
import { insertCheckout, getCheckouts } from '../controllers/checkout.controller.js';

const route = express.Router();

route.post('/', insertCheckout)

route.get('/', getCheckouts)

export default route;