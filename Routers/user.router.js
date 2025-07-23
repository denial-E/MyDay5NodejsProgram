import express from 'express'
import { loginUser, registerUser } from '../controllers/user.controller.js';

const router = express.Router()

router.post('/register',registerUser)//http://localhost:4000/api/register
router.post('/login',loginUser)//http://localhost:4000/api/login





export default router;