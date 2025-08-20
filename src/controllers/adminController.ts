// Controlador para autenticación de admin
import { Request, Response, NextFunction } from 'express';
import { ENV } from '../config/env.js';

// POST /api/admin/login
export async function login(req: Request, res: Response, next: NextFunction) {
  try {
    const { token } = req.body;
    if (!token) {
      return res.status(400).json({ error: 'token_required' });
    }
    if (ENV.ADMIN_TOKEN && token === ENV.ADMIN_TOKEN) {
      return res.json({ ok: true });
    } else {
      return res.status(401).json({ error: 'unauthorized' });
    }
  } catch (e) {
    next(e);
  }
}
