// Router raíz que agrega los routers de cada dominio
import { Router } from 'express';
import noticiasRoutes from './noticiasRoutes.js';
import oportunidadesRoutes from './oportunidadesRoutes.js';
import documentosRoutes from './documentosRoutes.js';
import asistenteRoutes from './asistenteRoutes.js';
import adminRoutes from './adminRoutes.js';

// Instancia principal del router
export const router = Router();
// Monta subrutas por recurso

router.use('/admin', adminRoutes);
