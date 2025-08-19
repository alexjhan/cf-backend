export function errorMiddleware(err, _req, res, _next) {
    // Evita doble envío si headers ya salieron
    if (res.headersSent)
        return;
    // Determina código de estado
    const status = err.status || 500;
    // Respuesta estructurada
    res.status(status).json({ error: { message: err.message || 'internal_error' } });
}
