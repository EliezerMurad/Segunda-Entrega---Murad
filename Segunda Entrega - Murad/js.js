/* Selectores DOM*--------------------------------------------------------- */

let ingresar = document.querySelector("#ingresarMonto");
const btn12 = document.querySelector("#m12"),
  btn24 = document.querySelector("#m24"),
  btn36 = document.querySelector("#m36"),
  btn48 = document.querySelector("#m48"),
  btn60 = document.querySelector("#m60");
  

/* Funciones-----------------------------------------------------------------*/ 

btn12.addEventListener("click", () => {
    function Calculate() {
        let ingreso = ingresar.value;
        const total = ingreso * 1.3;
      
        document.querySelector("#contenedor").innerHTML = "$" + total;
        document.querySelector("#cuota").innerHTML = "$" + total/12;
      }
  Calculate();
});

btn24.addEventListener("click", () => {
    function Calculate() {
        let ingreso = ingresar.value;
        const total = ingreso * 1.65;
      
        document.querySelector("#contenedor").innerHTML = "$" + total;
        document.querySelector("#cuota").innerHTML = "$" + total/24;
      }
  Calculate();
});

btn36.addEventListener("click", () => {
    function Calculate() {
        let ingreso = ingresar.value;
        const total = ingreso * 2.05;
      
        document.querySelector("#contenedor").innerHTML = "$" + total;
        document.querySelector("#cuota").innerHTML = "$" + total/36;
      }
  Calculate();
});

btn48.addEventListener("click", () => {
    function Calculate() {
        let ingreso = ingresar.value;
        const total = ingreso * 2.5;
      
        document.querySelector("#contenedor").innerHTML = "$" + total;
        document.querySelector("#cuota").innerHTML = "$" + total/48;
      }
  Calculate();
});


btn60.addEventListener("click", () => {
    function Calculate() {
        let ingreso = ingresar.value;
        const total = ingreso * 3;
      
        document.querySelector("#contenedor").innerHTML = "$" + total;
        document.querySelector("#cuota").innerHTML = "$" + total/60;
      }
  Calculate();
});