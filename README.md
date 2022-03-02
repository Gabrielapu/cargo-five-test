# Descripción del proyecto
```
Permite ver los puertos marítimos existentes con sus coordenadas respectivas
y al país y continente al que pertenecen
```

# Documentación del código
```
Carpetas:
  - assets: Contiene el logo de la empresa

  - components: Contiene 3 componentes:
    a. FilterInput: Input con un ícono que emite el valor ingresado
    b. PortsTable: Tabla que renderea los datos entregados de la api de mantera
                  paginada. Reacciona al input de búsqueda y al paginador.
    c. Pagination: Paginador que permite navegar entre el total de las páginas.
                  Cuanta con la opcion de ir de 1 página en una o también navegar 
                  a la primera o última página, como también a la anterior o posterior
                  a la página en curso.

  - plugins: Carpeta con 2 archivos .js:
    a. axios.js: Permite importar y configurar la url base para las peticiones. Además
                 lo hace disponible en los Single File Components.
    b. boostrapvue.js: Permite importar y configurar boostrapVue y sus iconos. Además 
                        quedan disponibles para usarlo en lo Single File Components.

  - store: Carpeta que contiene el módulo de puertos. La acción existente permite
          obtener los puertos por cada página.
  
  - views: Componente que ontiene la vista que agrupa los 3 componentes existentes
          y es esta asociado a la ruta raiz.

Funcionamiento:
  1. Se puede ingresar una palabra en el input de búsqueda y la tabla muetra los resultado disponibles en la página.
  2. Se puede cambiar de página con el paginador de manera sencilla.

Adicionales:
  1. Usando el código del contiente que viene en el JSON, con un mixin mostre el nombre del contiente.
  2. Si se hace click en la coordenadas con el formato: 13.09953 -59.625, se puede
  ver en el mapa de google maps. No funcionara con las coordenadas 
  con formato: 5231N 01323E 
    
```
## Para instalar las dependencias del proyecto:
```
npm install
```

### Para iniciar el proyecto
```
npm run serve
```

### Para construir el proyecto y dejarlo listo para producción
```
npm run build
```

