import express from 'express';
import { createCheckouts, getCheckouts, editCheckouts } from '../controllers/checkout.controller.js';

const route = express.Router();

route.post('/', createCheckouts)

route.get('/', getCheckouts)

route.patch('/', editCheckouts)

export default route;