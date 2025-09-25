const express = require('express');
const path = require('path');
const app = express();

// Servir archivos estáticos desde la raíz del proyecto
app.use(express.static(path.join(__dirname)));  // Esto sirve todos los archivos en la raíz del proyecto

// Ruta para servir el archivo 'index.html'
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));  // Asegúrate de que 'index.html' está en la raíz
});

// Configuración del servidor HTTP
const port = 3000;
const host = '192.168.1.23';  // Asegúrate de que esta es la IP correcta en tu red local
app.listen(port, host, () => {
  console.log(`Servidor HTTP corriendo en http://${host}:${port}`);
});
