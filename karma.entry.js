const contexto = import.meta.webpackContext('./src', {
  recursive: true,
  regExp: /\.spec\.jsx?$/,
})
contexto.keys().forEach(contexto)
