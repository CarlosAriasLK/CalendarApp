 # CalendarApp - Frontend

 Calendario avanzado realizado con React y Redux Toolkit. Incluye autenticación y comunicación con una API backend. Este repositorio contiene el frontend; la API se debe ejecutar por separado.

 ## Características
 - CRUD de eventos con modal y validaciones.
 - Calendario con `react-big-calendar` y localización en español.
 - Estado global con Redux Toolkit.
 - Diseño moderno y oscuro con variables CSS.
 - Animaciones suaves usando `framer-motion` en navbar, modal, eventos y FABs.

 ## Requisitos
 - Node.js 18+ y npm

 ## Variables de entorno
 Renombra `.env.template` a `.env` (si existe) o crea `.env` con al menos:

 ```
 VITE_API_URL=http://localhost:4000
 ```

 La app consume la API en `src/api` — revisa `api/index.js` para más detalles.

 ## Instalación y ejecución (frontend)

 ```bash
 npm install
 npm run dev
 ```

 ## Backend
 Este proyecto requiere una API REST para autenticar usuarios y almacenar eventos. Asegúrate de ejecutar el backend y apuntar `VITE_API_URL` a su URL.

 Repositorio backend: ```https://github.com/CarlosAriasLK/CalendarAppBackend.git```

 ## Mejores prácticas y notas para la presentación
 - Añadir capturas o gifs en la sección de demo.
 - Mencionar el uso de `date-fns` para manejo de fechas.
 - Explicar que los FABs, modal y elementos del calendario tienen micro-interacciones implementadas con `framer-motion`.

 ## Siguientes pasos recomendados
 - Añadir tests unitarios para reducers y hooks.
 - Integración con Google Calendar / exportación de eventos.

 Licencia: MIT
# Calendar APP

## Development pasos

1. Renombrar el archivo .env.template por .env
2. Hacer los cambios respectivos en las variables de entorno
