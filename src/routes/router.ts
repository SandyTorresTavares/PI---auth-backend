import { Router } from "express";
import registerUser, { loginUser } from "../controllers/controller";
import { getProfile } from "../controllers/profileController";
import { authenticateToken } from "../middleware/auth";

const router = Router();

router.get('/profile', authenticateToken, getProfile);
router.post('/register', registerUser);
router.post('/login', loginUser);

export default router;