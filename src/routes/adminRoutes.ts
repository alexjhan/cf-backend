// Rutas para autenticación de admin
import { Router } from 'express';
import * as controller from '../controllers/adminController.js';

const r = Router();

// Login de admin
r.post('/login', controller.login);

export default r;
