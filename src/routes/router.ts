import { Router } from "express";
import registerUser, { loginUser } from "../modules/auth/authController";
import { getProfile } from "../modules/user/profileController";
import { authenticateToken } from "../middleware/auth";

const router = Router();

router.get('/profile', authenticateToken, getProfile);
router.post('/register', registerUser);
router.post('/login', loginUser);

export default router;