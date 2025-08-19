// Middleware final de manejo de errores
import { Request, Response, NextFunction } from 'express';

export function errorMiddleware(err: any, _req: Request, res: Response, _next: NextFunction) {
  // Imprime el error completo en consola para debug en cloud
  console.error(err);
  // Evita doble envío si headers ya salieron
  if (res.headersSent) return;
  // Determina código de estado
  const status = err.status || 500;
  // Respuesta estructurada
  res.status(status).json({ error: { message: err.message || 'internal_error' } });
}
