Challenge Frontend

Deberás desarrollar un cliente para un Blog. 
El mismo debe ser armado en React, y consumir los datos de una JSON Placeholder, una API que expone datos ficticios en formato JSON.

Los endpoints que deberás utilizar son:

GET https://jsonplaceholder.typicode.com/posts
Devuelve un listado de posts

GET https://jsonplaceholder.typicode.com/posts/:id
Devuelve el detalle de un post en base al id especificado en el parámetro

POST https://jsonplaceholder.typicode.com/posts
Simula la creación de un nuevo post

PUT/PATCH https://jsonplaceholder.typicode.com/posts/:id
Simula la actualización de un post en base al id especificado en el parámetro

DELETE https://jsonplaceholder.typicode.com/posts/:id
Simula la eliminación de un post en base al id especificado en el parámetro

Requerimientos técnicos
Aprovechando las características de React, deberán crearse las siguientes secciones, y modularizar las mismas en componentes reutilizables.
Formulario de Login
El formulario se deberá renderizar al ingresar a cualquier ruta si el usuario no está autenticado, conteniendo los campos:
Email.
Password.
Botón de “Enviar”.
Al hacer click en “Enviar”, se deberá validar que ambos campos no estén vacíos, y mostrar un mensaje al usuario si lo estuviesen. Caso contrario, se deberá realizar una petición POST a la siguiente url, con los campos email y password en el BODY.
Los datos válidos para obtener un token son:
Email: challenge@alkemy.org
Password: react
En el caso de obtener un error de la API, se deberá mostrar una alerta, mientras que si es satisfactorio deberá redirigir al Home y almacenar el token obtenido en localStorage.
Las validaciones del formulario deberán realizarse utilizando la librería Formik.



Home
Mostrará un listado de posts. En este listado, deberá mostrarse solamente el título de cada uno, y las acciones para ir al detalle del mismo, editarlo o eliminarlo.

Detalle

Deberá recibir el identificador de un post y, en el caso de que exista, mostrar sus datos. Caso contrario, deberá mostrar un mensaje de error.

Formulario de creación

Deberá mostrar un formulario que permita crear un nuevo post. El formulario deberá contener los campos título y contenido, y realizar la validación de los mismos (ambos son obligatorios). Al hacer el submit, debe realizarse la petición al endpoint correspondiente.

Formulario de Edición

Deberá recibir el identificador de un post y mostrar un formulario que permita editarlo. En el caso de que no exista, mostrar un mensaje de error. El formulario deberá contener los campos título y contenido, y realizar la validación de los mismos (ambos son obligatorios). Al hacer el submit, debe realizarse la petición al endpoint correspondiente.

Otras consideraciones

La app deberá contener un encabezado con los links al Home y al Formulario de Edición. 
Debe ser responsive, se puede utilizar una plantilla. 
La acción de “Eliminar” que contendrán los posts listados en la sección Home deberán realizar la petición al endpoint correspondiente.
La gestión del estado puede realizarse de la forma que prefieran, como así también la lógica de navegación.

Criterios a evaluar
● Diseño responsive, moderno e intuitivo.

● Debe utilizarse Bootstrap para permitir que el proyecto sea responsive, y media queries
para los elementos personalizados que se desarrollen.
● Conocimientos básicos de React.
● Validación de formularios utilizando la librería Formik.
● Buenas prácticas de codificación.
● Buenas prácticas para nombre de rutas.
● Código modularizado en componentes reutilizables e independientes.



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
