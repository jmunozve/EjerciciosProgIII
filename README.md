# 🚀 Evaluación 1: Programación III - UNETI

Este repositorio contiene la resolución técnica de la primera evaluación de la unidad curricular, enfocada en entornos asíncronos y tipado estricto. 

**Estudiante:** José Gregorio Muñoz
**Institución:** UNETI (Universidad Nacional Experimental de las Telecomunicaciones e Informática)
**Proyecto:** Implementación de Backend con Node.js y Lógica con TypeScript

---

## 🛠️ Requisitos Previos

Para ejecutar estos ejercicios, asegúrese de tener instalado:
*   **Node.js** (Versión LTS recomendada)
*   **TypeScript Compiler (TSC):** Puede instalarlo globalmente con `npm install -g typescript`

---

## 📂 Ejercicio 1: Interceptación de Datos con Node.js y Express

Este ejercicio consiste en un servidor que sirve una interfaz web, intercepta un dato enviado por el usuario y genera una respuesta dinámica.

### Pasos para ejecutar:
1.  **Instalar dependencias:** Abra una terminal en la carpeta del proyecto y ejecute:
    ```bash
    npm install express
    ```
2.  **Activar el servidor:** Inicie el proceso de Node con el siguiente comando:
    ```bash
    node app.js
    ```
3.  **Acceder a la Interfaz:** 
    *   Una vez que la terminal indique que el servidor está corriendo, busque en el código o en la terminal el enlace `http://localhost:3000`.
    *   Mantenga presionada la tecla **Ctrl** y haga **clic** sobre el enlace para abrir automáticamente el archivo `index.html` servido por Node.
4.  **Prueba:** Ingrese el nombre de su animal favorito y observe cómo el servidor intercepta el dato y recarga la página con el resultado.

---

## 📘 Ejercicio 2: Modelado con TypeScript (Enums e Interfaces)

En esta fase se aplicó el uso de enumeraciones para categorizar géneros de películas y países de origen de forma robusta.

### Pasos para ejecutar:
1.  **Compilación:** Es necesario transformar el código de TypeScript a JavaScript estándar:
    ```bash
    tsc ejercicio2.ts
    ```
2.  **Ejecución:** Una vez generado el archivo `.js`, ejecútelo con Node:
    ```bash
    node ejercicio2.js
    ```
3.  **Resultado:** Podrá visualizar en la consola una cartelera de cine organizada y formateada mediante la lógica de tipos aplicada.

---

## ⚙️ Estructura del Proyecto
*   `app.js`: Servidor principal en Express.
*   `index.html`: Interfaz de usuario profesional.
*   `ejercicio2.ts`: Lógica fuente de TypeScript.
*   `package.json`: Definición de dependencias y scripts.
*   `.gitignore`: Filtro de archivos para el repositorio (omite `node_modules`).

---
Este proyecto fue desarrollado bajo estándares de Ingeniería de Software, priorizando la claridad del código y la experiencia de usuario.