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

const DocumentoBaseSchema = z.object({
  titulo: z.string().min(3),                 // Título principal
  subtitulo: z.string().min(3).optional(),   // Subtítulo (opcional)
  tipo: z.array(TipoDocumentoEnum).min(1), // Ahora tipo es array obligatorio
  fecha: z.string()                          // Fecha (YYYY-MM-DD)
    .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/,'Formato fecha esperado YYYY-MM-DD'),
  link: z.string().url()                     // URL externa (Drive u otra)
});

export const DocumentoCreateSchema = DocumentoBaseSchema;

export const DocumentoUpdateSchema = DocumentoBaseSchema.partial();

// Actualización parcial (PUT enviaremos todos igualmente, pero permite reutilizar)

export type DocumentoCreate = z.infer<typeof DocumentoCreateSchema>;
export type DocumentoUpdate = z.infer<typeof DocumentoUpdateSchema>;
export interface Documento extends DocumentoCreate { id: string; created_at: string; updated_at?: string; }
