// Definir el prototipo Persona
function Persona(nombre, edad, genero) {
  this.nombre = nombre;
  this.edad = edad;
  this.genero = genero;
}

// Método obtDetalles para Persona
Persona.prototype.obtDetalles = function() {
  console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}, Género: ${this.genero}`);
};

// Prototipo Estudiante que hereda de Persona
function Estudiante(nombre, edad, genero, curso, grupo) {
  Persona.call(this, nombre, edad, genero);
  this.curso = curso;
  this.grupo = grupo;
}

// Heredar de Persona
Estudiante.prototype = Object.create(Persona.prototype);
Estudiante.prototype.constructor = Estudiante;

// Método registrar para Estudiante
Estudiante.prototype.registrar = function() {
  console.log(`${this.nombre} ha sido registrado en el curso ${this.curso}, grupo ${this.grupo}`);
};

// Prototipo Profesor que hereda de Persona
function Profesor(nombre, edad, genero, asignatura, nivel) {
  Persona.call(this, nombre, edad, genero);
  this.asignatura = asignatura;
  this.nivel = nivel;
}

// Heredar de Persona
Profesor.prototype = Object.create(Persona.prototype);
Profesor.prototype.constructor = Profesor;

// Método asignar para Profesor
Profesor.prototype.asignar = function() {
  console.log(`${this.nombre} ha sido asignado a impartir ${this.asignatura} de nivel ${this.nivel}`);
};

// Crear objetos y casos de prueba
var persona1 = new Persona("rogelio", 39, "Masculino");
persona1.obtDetalles();

var estudiante1 = new Estudiante("cristina", 27, "Femenino", "Matematicas", "Grupo A");
estudiante1.obtDetalles();
estudiante1.registrar();

var profesor1 = new Profesor("MiguelAngel", 27, "Masculino", "AndroidStudio", "Develops");
profesor1.obtDetalles();
profesor1.asignar();