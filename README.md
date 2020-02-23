# nodejs-typescript-express

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

"scripts": {
    "tsc": "tsc"
},

Esta modificación nos permite llamar a funciones TypeScript desde la línea de comandos en la carpeta del proyecto.
Así que podemos usar el siguiente comando:

npm run tsc -- --init

Este comando inicializa el proyecto creando el fichero tsconfig.json. 
Dentro de este fichero descomentaremos la opción outDir y elegiremos una localización donde se dejarán los ficheros .js 
transpilados.
