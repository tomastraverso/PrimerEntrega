/*const BIENVENIDA = alert("Bienvenido a mi primer ejercicio complementario :D");
const INSTRUCCIONES = alert(
  "INSTRUCCIONES: A continuación va tener disponible 4 operaciones matemáticas básicas. Elija la que necesite :)"
);*/
//FUNCION SUMA
function suma() {
  let acumulador = 0;
  let cantNum = parseInt(prompt("¿Cuántas números en total desea sumar?"));
  for (let i = 0; i < cantNum; i++) {
    let nota = parseFloat(prompt(`Ingrese el valor del número`));
    acumulador += nota;
  }
  alert(`El resultado de la suma es: ${acumulador}`);
}
//FUNCION RESTA
function resta() {
  let cantNum = parseInt(prompt("¿Cuántas números le desea restar a otro?"));
  let acumulador = parseFloat(
    prompt(`Ingrese el número al que se los va a restar`)
  );
  for (let i = 0; i < cantNum; i++) {
    let nota = parseFloat(prompt(`Ingrese el número que desea restarle`));
    acumulador -= nota;
  }
  alert(`El resultado de la resta es: ${acumulador}`);
}
//FUNCION MULTIPLICACION
function multiplicacion() {
  let acumulador = 1;
  let cantNum = parseInt(
    prompt("¿Cuántas números en total desea multiplicar?")
  );
  for (let i = 0; i < cantNum; i++) {
    let nota = parseFloat(prompt(`Ingrese el valor del número`));
    acumulador *= nota;
  }
  alert(`El resultado de la multiplicación es: ${acumulador}`);
}
//FUNCION PROMEDIO
function promedio() {
  let acumulador = 0;
  let cantNum = parseInt(prompt("¿Cuántos números en total desea ingresar?"));
  for (let i = 0; i < cantNum; i++) {
    let nota = parseFloat(prompt(`Ingrese el valor de la nota`));
    acumulador += nota;
  }
  alert(`El promedio total es ${acumulador / cantNum}`);
}
