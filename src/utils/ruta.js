// Prefija la ruta base del sitio (en GitHub Pages es "/nombre-del-repo/").
// Sirve para archivos de /public referenciados desde JavaScript.
export const ruta = (archivo) => `${import.meta.env?.BASE_URL ?? '/'}${archivo}`
