import { Router } from "express";
import checkAuth from "../middleware/CheckAuth.js";

const router = Router();

//Controllers
import { newUser, userConfirm, updateUser, forgotPassword, Login, Home, checkToken } from "../Controllers/UserController.js";

//Routes
router.post('/create', newUser);
router.get('/confirm/:token', userConfirm);

router.post('/forgot-passwod', forgotPassword);

router.get('/update-password/:token', checkToken);
router.post('/update-password/:token', updateUser);

router.post('/login', Login);
router.get('/home', checkAuth, Home);

export default router