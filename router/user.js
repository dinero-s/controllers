import express from 'express';
const router = express.Router();
import {getUser} from '../controller/index'

router.get('/search', getUser)

export default router