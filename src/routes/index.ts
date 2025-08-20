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


router.use('/noticias', noticiasRoutes);
router.use('/oportunidades', oportunidadesRoutes);
router.use('/documentos', documentosRoutes);
router.use('/asistente', asistenteRoutes);
router.use('/admin', adminRoutes);
