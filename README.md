# Left 4 Dead 2 Characters Info Page

Este proyecto es una página web creada con React que muestra información detallada de los personajes del juego Left 4 Dead 2.

### Características

- **Visualización de Personajes**: La página muestra una lista de personajes con su respectiva información.
- **Búsqueda**: Incluye una funcionalidad de búsqueda para encontrar personajes específicos.
- **Login**: Sistema de autenticación con almacenamiento de la sesión en localStorage.
- **Página de Error 404**: Muestra una página de error si se ingresa una URL inválida.
- **Rutas Protegidas**: Algunas rutas están protegidas, requiriendo autenticación para acceder.
- **Sin Backend**: La información de los personajes y el login se manejan a través de un array de objetos en el frontend.
- **Uso de Context y useReducer**: Utiliza Context y useReducer para el manejo del estado global y la lógica de la aplicación.
- **Estilos con TailwindCSS**: Se utilizó TailwindCSS para el diseño y la estilización de la interfaz.

---

### Tecnologías Utilizadas

- React + vite
- Tailwind CSS
- React Router v6.4
- Context API
- useReducer
- localStorage

---

### Propósito del Proyecto

Este proyecto fue creado con la finalidad de practicar y mejorar las habilidades en React.

---

### Demo

Ver demostración: [demo](https://l4d2-react.andevfrontend.site/).

---

### Instalación

Utilice [Node.js](https://nodejs.org/en/download/) 16 o superior.

#### 1) Clonar el repositorio:

     git clone https://github.com/andevfront/l4d2_react.git


#### 2) Navegue hasta el clon:

    cd l4d2_react

#### 3) Instale las dependencias de Node.js:

    npm i

#### 4) Iniciar:

    npm run dev
