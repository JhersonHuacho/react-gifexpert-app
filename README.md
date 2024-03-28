
Este es mi repositorio del proyecto de GifExpertApp de React

API: developers.giphy.com

* Estructura de archivos en React
https://es.legacy.reactjs.org/docs/faq-structure.html
https://hackernoon.com/structuring-projects-and-naming-components-in-react-1261b6e18d76

* useEffect
    - sirve para disparar efectos secundarios
    - no se puede usar async en useEffect
* Custom Hooks
    - 
* Archivos de barril o archivo indice
    - tengamos centralizado nuestros componentes
    - import { AddCategory, GifGrid } from "./components";
  
* Generar Build de producción y despliegues
  - Aprender cómo realizar backups a repositorios de Git
  - Subir nuestro repositorio a GitHub
  - Uso de Github Pages
  - Desplegar nuestra aplicación de React
  - Generar build de producción de nuestra aplicación
  
- 
* paquetes usados
https://www.npmjs.com/package/http-server

* para desplegar usamos:
  
https://www.netlify.com/

* git : retornar a como estaba en el último commit
  - git checkout -- .

* Testing
  
Seguir el camino de las pruebas
Pruebas en componentes específicos
Pruebas en componentes de forma individual
Pruebas con customHooks
Esperar cambios en un customHook
Simular eventos en inputs y formularios
Simular llamadas a funciones
Evaluar si existen elementos en el componente

https://gist.github.com/Klerith/ca7e57fae3c9ab92ad08baadc6c26177

1. Instalaciones:

npm install --dev jest babel-jest @babel/preset-env @babel/preset-react 
npm install -D jest@29.5.0 babel-jest@29.5.0 @babel/preset-env@7.21.5 @babel/preset-react@7.24.1

npm install --dev @testing-library/react @types/jest jest-environment-jsdom
npm install -D @testing-library/react@14.2.2 @types/jest@29.5.1 jest-environment-jsdom@29.7.0

2. Opcional: Si usamos Fetch API en el proyecto:

npm install --dev whatwg-fetch

* solo para React 16 y 17. En 18 ya no se usa.
  https://react-hooks-testing-library.com/