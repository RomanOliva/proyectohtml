// Punto de entrada único de las pruebas: Webpack reúne todos los archivos *.spec.
// (Se usa import.meta.webpackContext porque el proyecto es "type": "module".)
const contexto = import.meta.webpackContext('./src', {
  recursive: true,
  regExp: /\.spec\.jsx?$/,
})
contexto.keys().forEach(contexto)
