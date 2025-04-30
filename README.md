# Calculadora JS

Una calculadora simple implementada en JavaScript que permite realizar operaciones básicas.

## Instalación

```bash
npm install matematicas
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
```
const { sumar, dividir } = require('matematicas');
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

# Futuras mejoras
- Agregar interfaz gráfica con HTML/CSS
- Crear pruebas automatizadas con Jest
- Convertir en módulo NPM

<img src="/assets/img.jpg" alt="calculadora" style="width: 100%; margin: 0 auto;"> 

<img src="/assets/test.jpg" alt="calculadora" style="width: 100%; margin: 0 auto;"> 