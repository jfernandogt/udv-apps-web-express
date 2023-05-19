module.exports = {
  // Todo el código va a usar la versión de Ecmascript 2018 en adelante
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  // Se extendera la configuración de eslint recomendada, se utilizara
  // una configuración compatible con prettier.
  extends: ["eslint:recommended", "prettier"],
  env: {
    // variables de entorno de EcmaScript 6
    es6: true,
    //variables de entorno de Node
    node: true,
    //  variables de entorno moca ¿Por qué?
    // Cuando lleguemos a la hora de hacer testsi utilizamos unas variables globales
    // eslint nos puede sacar un error, pero aqui le estamos especificando que son variables de moca
    mocha: true,
  },
  rules: {
    // La regla de no-console: no va ha ser un error si no un warning
    // porque aveces necesitamos dejarlo
    "no-console": "warn",
  },
};
