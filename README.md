# nodejs-typescript-express
### para ejecutar la aplicacion
$ git clone https://github.com/josepereza/nodejs-typescript-express.git
$ cd nodejs-typescript-express/
$ npm install
$ node build/app.js

### Cuando agregemos o modifiquemos algo  en algun archivo .ts debemos ejecutar:
$ npm run tsc

## Como configurar un proyecto Express con TypeScript

Veamos paso por paso cómo crear un entorno para usar TypeScript dentro de un proyecto de Express.js

npm init

Instalaremos el paquete typescript
```
$ npm install @types/node --save-dev
$ npm install typescript ts-node --save-dev
```
Acerca del paquete de node TypeScript

Node.js es un motor que ejecuta JavaScript, no TypeScript.
EL paquete de node TypeScript nos permite transpilar tus ficheros .ts a scripts .js.
También se puede usar Babel para transpilar TypeScript, pero el estándar del mercado es el del paquete oficial de Microsoft.

Dentro de nuestro package.json introduciremos un script llamado tsc.
```
"scripts": {
    "tsc": "tsc"
},
```
Esta modificación nos permite llamar a funciones TypeScript desde la línea de comandos en la carpeta del proyecto.
Así que podemos usar el siguiente comando:
```
npm run tsc -- --init
```
Este comando inicializa el proyecto creando el fichero tsconfig.json. 
Dentro de este fichero descomentaremos la opción outDir y elegiremos una localización donde se dejarán los ficheros .js 
transpilados.


## Instalando Express.js

$ npm install express -s

Los paquetes de Express y TypeScript son independientes. Consecuentemente, TypeScript no reconoce los tipos de las clases de Express. Existe un paquete npm concreto para que TypeScript reconozca los tipos de Express.

$ npm install @types/express -s

Hola Mundo

Para hacer la aplicación lo más sencilla posible, usaremos el ejemplo de Hola Mundo del tutorial de Express (en inglés):

https://expressjs.com/pt-br/starter/hello-world.html

Dentro de nuestro proyecto crearemos una carpeta llamada app. Dentro de esta carpeta crearemos un fichero llamado app.ts con el siguiente contenido:
```
// lib/app.ts
import express = require('express');// Create a new express application instance
const app: express.Application = express();
app.get('/', function (req, res) {
  res.send('Hello World!');
});app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
```
Compilando nuestra primera aplicación:

$ npm run tsc

Como podemos ver, este comando ha creado automáticamente la carpeta build y el fichero .js.

### Ejecutando Express

$ node build/app.js

Así, tenemos nuestro servidor corriendo en el puerto 3000

## Ejecutar TypeScript sin transpilar

Puedes ejecutar TypeScript directamente en Node con el paquete ts-node.

Este paquete se recomienda sólo para desarrollo. Para realizar el despliegue final en producción, usa siempre la versión JavaScript de tu proyecto.

ts-node ya está incluido como dependencia en otro paquete, ts-node-dev. Después de instalar, ts-node-dev puede ejecutar comandos que reinician el servidor cuando los ficheros del proyecto se modifican.

$ npm install ts-node-dev -s

Dentro de nuestro package.json añadiremos dos scripts más.
```
"scripts": {
    "tsc": "tsc",
    "dev": "ts-node-dev --respawn --transpileOnly ./app/app.ts",
    "prod": "tsc && node ./build/app.js"
},
```
Para iniciar el entorno de desarrollo:

$ npm run dev

Para ejecutar el servidor en modo producción:

$ npm run prod

El proyecto final puede encontrarse en este repositorio de GitHub:

https://github.com/andregardi/ts-express

Puedes encontrar el artículo original en inglés en: https://medium.com/javascript-in-plain-english/typescript-with-node-and-express-js-why-when-and-how-eb6bc73edd5d

Puedes encontrar el artículo original en: http://developinginspanish.com/2019/08/11/como-y-por-que-deberias-usar-typescript-con-node-y-express/

