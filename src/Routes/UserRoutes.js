import { Router } from "express";
import checkAuth from "../middleware/CheckAuth.js";

const router = Router();

//Controllers
import { newUser, userConfirm, updateUser, forgotPassword, Login, Home, checkToken, editProfile, addClient, getClients, deleteClient } from "../Controllers/UserController.js";

//Routes
router.post('/create', newUser);
router.get('/confirm/:token', userConfirm);

router.post('/forgot-passwod', forgotPassword);

router.get('/update-password/:token', checkToken);
router.post('/update-password/:token', updateUser);
router.put('/edit-profile', checkAuth, editProfile)

router.post('/login', Login);
router.get('/home', checkAuth, Home);

//Client Routing 

router.post('/add-client', checkAuth, addClient);
router.get('/get-clients', checkAuth, getClients);
router.delete('/delete-client/:id', checkAuth, deleteClient)

export default router