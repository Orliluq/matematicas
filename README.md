# Calculadora JS

Una calculadora simple implementada en JavaScript que permite realizar operaciones básicas.

## Instalación

```bash
npm i @orliluq/matematicas
```

## Características

- Operaciones disponibles: `suma`, `resta`, `multiplicación`, `división`
- Código limpio y modular
- Listo para extenderse con interfaz web o CLI

## Instalación

Clona el repositorio:

```bash
git clone https://github.com/tu_usuario/calculadora-js.git
cd calculadora-js
```

# Pruebas rápidas
Edita `index.html` o usa consola del navegador:
```
<script src="calculadora.js"></script>
<script>
  console.log(sumar(2, 3)); // 5
  console.log(dividir(6, 2)); // 3
</script>
```
## Uso

```js
const { sumar, dividir } = require('@orliluq/matematicas');
console.log(sumar(2,3)); // 5
console.log(dividir(5,0)); // '💥'
```

# Estructura del Proyecto
```
matematicas/              
├── src/
│   ├── calculadora.js      # implementaciones de funciones
│   └── index.js            # punto de entrada del módulo
├── test/
│   └── calculadora.test.js # Pruebas automatizadas con Jest
├── package.json
├── README.md
└── LICENSE
```

# Mejoras
- Agregar interfaz gráfica con HTML/CSS
<img src="/assets/img.jpg" alt="calculadora" style="width: 100%; margin: 0 auto;"> 

- Crear pruebas automatizadas con Jest
<img src="/assets/test.jpg" alt="calculadora" style="width: 100%; margin: 0 auto;"> 

- Convertir en módulo NPM
[![npm version ](https://img.shields.io/npm/v/@orliluq/matematicas.svg)](https://www.npmjs.com/package/@orliluq/matematicas)