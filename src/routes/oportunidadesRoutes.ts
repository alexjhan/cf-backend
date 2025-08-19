// Rutas para oportunidades
import { Router } from 'express';
import * as controller from '../controllers/oportunidadesController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

// Instancia del router
const r = Router();

// Lectura pública
r.get('/', controller.listar);
r.get('/:id', controller.obtener);
// Mutaciones protegidas
r.post('/', authMiddleware, controller.crear);
r.put('/:id', authMiddleware, controller.actualizar);
r.delete('/:id', authMiddleware, controller.eliminar);

export default r;
