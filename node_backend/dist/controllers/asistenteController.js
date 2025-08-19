// POST /api/asistente/ask
export async function ask(req, res) {
    // TODO: Implementar pipeline RAG (embed -> buscar -> generar)
    return res.json({ answer: 'placeholder', question: req.body?.question || '' });
}
