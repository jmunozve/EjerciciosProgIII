const express = require('express');
const app = express();
const path = require('path');

// Esta configuración la incluí para que mi servidor tenga la capacidad de interpretar 
// y extraer los datos que el usuario envía a través de los campos del formulario.
app.use(express.urlencoded({ extended: true }));

// La ruta principal que programé se encarga de servir mi archivo de interfaz. 
// Utilicé una ruta absoluta hacia mi directorio de trabajo para asegurar que 
// el servidor localice el archivo index.html correctamente en mi sistema.
app.get('/', (req, res) => {
    const rutaArchivo = 'F:/A-UNIVERSIDADES/A-UNETI/III TRAYECTO/PROGRAMACION III/Ejercicio 1/index.html';
    res.sendFile(path.resolve(rutaArchivo));
});

// En este bloque desarrollé la lógica de interceptación. Mi objetivo aquí es recibir 
// el dato del "animal" y construir en tiempo real una nueva página HTML. 
// Programé los estilos CSS directamente en la respuesta para que el resultado 
// se vea profesional y organizado dentro de una tarjeta visual.
app.post('/mostrar', (req, res) => {
    // Aquí capturo el valor específico que viaja en el cuerpo de la petición.
    const animalFavorito = req.body.animal;
    
    // La respuesta que diseñé utiliza plantillas de cadena para insertar el 
    // animal seleccionado dentro de la estructura HTML que construí.
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

// El cierre de mi código establece el puerto de escucha y define una serie de 
// mensajes informativos en la consola que me ayudan a confirmar que el servidor 
// de la UNETI está operando y listo para recibir conexiones.
const PUERTO = 3000;
app.listen(PUERTO, () => {
    console.log('==============================================');
    console.log('   SERVIDOR UNETI - PROGRAMACIÓN III         ');
    console.log('==============================================');
    console.log(` Ejecutándose en: http://localhost:${PUERTO}`);
    console.log(' Presiona Ctrl+C para detener el servidor');
});