import express from 'express';
import { main } from './app.controller';

const router = express.Router();


router.get('/', main);


export const websiteRouter = router;
