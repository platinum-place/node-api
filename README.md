# API NEXTJS

Este es un repositorio que muestra la estructura para crear endpoints usando diversas librerías y consumiendo REST API, detalladas en forma de servicios y rutas que consumen dichos servicios. Todas las solicitudes necesitan el usuario y contraseña en su header. Ademas, es necesario el uso de credenciales (tokens, users, etc) en un archivo .env.local

# Rutas

#### Crear casos

> [https://node-api-murex.vercel.app/api/cases](https://node-api-murex.vercel.app/api/cases)

- Solo en solicitudes POST.
- Necesita encabezado y cuerpo en formato JSON.


#### Detalles caso

> [https://node-api-murex.vercel.app/api/cases/{id}](https://node-api-murex.vercel.app/api/cases/{id})

- Necesita el ID del caso.
- Los casos que hayan hecho contacto no retornaran información.