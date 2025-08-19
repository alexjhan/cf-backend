export function requestLogger(req, res, next) {
    // Marca tiempo inicial
    const start = Date.now();
    // Al finalizar respuesta calcula duración
    res.on('finish', () => {
        const ms = Date.now() - start;
        console.log(`${req.method} ${req.originalUrl} ${res.statusCode} ${ms}ms`);
    });
    // Avanza al siguiente middleware
    next();
}
