const express = require('express');
const app = express();
const path = require('path');

// Configuración para procesar los datos enviados desde el formulario HTML
app.use(express.urlencoded({ extended: true }));

// 1. RUTA PRINCIPAL (Carga la interfaz visual)
app.get('/', (req, res) => {
    // Usamos la ruta física exacta de tu proyecto en el disco F:
    const rutaArchivo = 'F:/A-UNIVERSIDADES/A-UNETI/III TRAYECTO/PROGRAMACION III/Ejercicio 1/index.html';
    res.sendFile(path.resolve(rutaArchivo));
});

// 2. RUTA DE INTERCEPTACIÓN (Procesa el animal y recarga la vista)
app.post('/mostrar', (req, res) => {
    // Interceptamos el nombre enviado desde el input "animal"
    const animalFavorito = req.body.animal;
    
    // Generamos y enviamos la nueva página HTML con el resultado
    res.send(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <title>Resultado - Evaluación Node</title>
            <style>
                body { 
                    font-family: 'Segoe UI', sans-serif; 
                    background: linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%);
                    display: flex; 
                    justify-content: center; 
                    align-items: center; 
                    height: 100vh; 
                    margin: 0; 
                }
                .card { 
                    background: white; 
                    padding: 2.5rem; 
                    border-radius: 20px; 
                    box-shadow: 0 15px 35px rgba(0,0,0,0.1); 
                    text-align: center;
                    border-top: 5px solid #3498db;
                }
                h1 { color: #2c3e50; margin-bottom: 1rem; }
                .animal-text { 
                    font-size: 2rem; 
                    color: #3498db; 
                    font-weight: bold; 
                    text-transform: uppercase;
                    display: block;
                    margin: 1rem 0;
                }
                .btn-volver {
                    display: inline-block;
                    margin-top: 1.5rem;
                    text-decoration: none;
                    color: #7f8c8d;
                    font-weight: 600;
                    border: 1px solid #7f8c8d;
                    padding: 8px 20px;
                    border-radius: 8px;
                    transition: all 0.3s;
                }
                .btn-volver:hover {
                    background: #7f8c8d;
                    color: white;
                }
            </style>
        </head>
        <body>
            <div class="card">
                <h1>Servidor Node.js</h1>
                <p>Has seleccionado como favorito al:</p>
                <span class="animal-text">${animalFavorito}</span>
                <a href="/" class="btn-volver">← Volver al inicio</a>
            </div>
        </body>
        </html>
    `);
});

// 3. INICIO DEL SERVIDOR
const PUERTO = 3000;
app.listen(PUERTO, () => {
    console.log('==============================================');
    console.log('   SERVIDOR UNETI - PROGRAMACIÓN III         ');
    console.log('==============================================');
    console.log(` Ejecutándose en: http://localhost:${PUERTO}`);
    console.log(' Presiona Ctrl+C para detener el servidor');
});