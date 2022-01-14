# Camisetas-Shop

Es un proyecto e-commerce creado desde cero con React Js. Se trata de un proyecto ficticio, el cual es el proyecto final del curso de React Js en Coderhouse.


## Como inicié mi proyecto?

A continuación, dejo los pasos de como fui creando el proyecto.


### `create-react-app`

Con este comando inicializamos el proyecto de React.


### `npm install`

Este es el comando con el que instalamos todas las dependencias y recursos que utilizaremos más adelante.


### `npm start`

Este comando es el que se utiliza para ejecutar la aplicación, en el localhost, lo cual nos permite ir viendo los cambios que vamos haciendo a la aplicación en el momento, nos permite saber cuando nos equivocamos.


### `node js`

Es muy importante instalar Node js en nuestro ordenador. Para ir descargando las dependencias necesarias, las cuales nos ayudaran a desarrollar el proyecto(ej: bootstrap)


## Cómo detengo la ejecución del programa?

### `Ctrl + c`

Es el comando necesario para detener la ejecución del programa y la visualización en el localHost. Es importante saberlo porque cuando necesitamos guardar cambios o alguna acción relacionada al versionado, debemos utilizarlo.


## Cómo manejo el proyecto y dónde lo guardamos.

### `git y github` 

Utilizo git para manejar las versiones del proyecto, guardar todos los cambios, y retroceder a versiones anteriores si fuera necesario.
Por otro lado utilizamos la herramienta de Github para subir el proyecto a la web y poder compartirlo.


## Containers

### `ItemListContainer y ItemDetailContainer`

Dos componentes contenedores, ubicados en la carpeta "src/containers". Estos componentes son los principales ya que en ellos se encuentra la mayoria del contenido de la app. Los colocamos en el archivo "App.js".


## Componentes

### `src/components`

En esta carpeta se encuentran los componentes utilizados en la app. Los mismos, son renderizados utilizando rendering condicional, el cuál lo vimos en clase con el profesor.


## Ruteo

### `react-router-dom`

Utilicé la dependencia react-router-dom para hacer el ruteo de la app. La versión utilizada es la 5.2.


## Context

### `CartContext`

En este proyecto no utilizamos el Redux, lo reemplazamos con context, el cual nos permitirá utilizar funciones y estados en diferentes componentes, ambitos. 


## Lenguajes y conocimientos utilizados.

### `Qué lenguajes y herramientas utilicé?`

+ Html
+ Css
+ Javascript
+ React Js
+ Node Js
+ Git
+ Github
+ Bootstrap


## Base de datos de productos

### `Firebase`

Al no contar con base de datos al comenzar el proyecto, los habiamos simulados con un archivo que se llamaba "products.js". Al final de la cursada, aprendimos a utilizar firebase, lo cual nos sirve como base de datos y con eso reemplazamos al archivo products.js. Traemos los datos de firebase (usando sus respectivos métodos. Ej: addDoc, getDoc) y las ordenes generadas se guardan allí también.

## Variables de entorno

### `.env`

Usamos las variables de entorno para proteger nuestra base de datos y no todo el mundo pueda utilizarla y tener acceso a ella. Hay un archivo que se llama ".env" el cual está a la misma altura que el Readme o el package.json. 

