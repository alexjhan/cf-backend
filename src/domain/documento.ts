import { z } from 'zod';

// Enumeración controlada de tipos permitidos (sin acentos para evitar problemas)
export const TipoDocumentoEnum = z.enum([
  'academico',          // Documentos académicos
  'administrativo',     // Procedimientos / oficios
  'reglamento',         // Reglamentos
  'formulario',         // Formularios descargables
  'guia',               // Guías
  'convenio'            // Convenios
]);

// Esquema de creación con metadata completa
export const DocumentoCreateSchema = z.object({
  titulo: z.string().min(3),                 // Título principal
  subtitulo: z.string().min(3).optional(),   // Subtítulo (opcional)
  tipo: TipoDocumentoEnum,                  // Tipo controlado
  categorias: z.array(z.string().min(1)).min(1), // Múltiples categorías
  fecha: z.string()                          // Fecha (YYYY-MM-DD)
    .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/,'Formato fecha esperado YYYY-MM-DD'),
  link: z.string().url()                     // URL externa (Drive u otra)
});

// Actualización parcial (PUT enviaremos todos igualmente, pero permite reutilizar)
export const DocumentoUpdateSchema = DocumentoCreateSchema.partial();

export type DocumentoCreate = z.infer<typeof DocumentoCreateSchema>;
export type DocumentoUpdate = z.infer<typeof DocumentoUpdateSchema>;
export interface Documento extends DocumentoCreate { id: string; created_at: string; updated_at?: string; }
