# Resumen de Ejercicio Consumiendo una API con Node.js

El código proporcionado muestra un ejemplo de cómo consumir una API utilizando Node.js y la biblioteca `node-fetch`.

## Importación de módulos

Se importan los siguientes módulos:

- `http`: se importa la función `createServer` del módulo `http` de Node.js, que se utiliza para crear un servidor HTTP.
- `node-fetch`: se importa la función `fetch` del módulo `node-fetch`, que se utiliza para hacer solicitudes HTTP.

## Creación del servidor HTTP

Se crea un servidor HTTP utilizando la función `createServer`. El servidor escucha las solicitudes entrantes y realiza las siguientes acciones cuando se recibe una solicitud:

- Verifica si la URL de la solicitud es '/asteroids'.

## Consumo de la API de la NASA

Se utiliza la función `fetch` para hacer una solicitud GET a la API de la NASA. La URL utilizada incluye una clave de API de demostración y especifica un rango de fechas para obtener información sobre asteroides cercanos a la Tierra.

Se manejan las respuestas utilizando las funciones `then`:

- Se convierte la respuesta en formato JSON.
- Se imprime la respuesta en la consola.
- Se extrae la información de los asteroides del objeto de datos recibido.
- Se construye una respuesta HTML para enviar al cliente, mostrando los detalles de cada asteroide.
- Se envía la respuesta al cliente.

## Configuración del servidor

Se configura el servidor con la siguiente información:

- Hostname: 127.6.9.10
- Puerto: 3000

El servidor se inicia y se muestra un mensaje en la consola indicando la dirección URL en la que se encuentra en funcionamiento.
