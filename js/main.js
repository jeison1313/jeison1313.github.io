(function() {
   //variables
   var lista = document.getElementById("lista"),
       tareaInput = document.getElementById("tareaInput"),
       btnNuevaTarea = document.getElementById("btn-agregar");

   // funciones
var agregarTarea = function() {
  alert("agregar");
};
var comprobarInput = function() {
  alert("comprobar");
};

var eliminarTarea = function() {
  alert("eliminar");
};

   // eventos

  // Agragar Tarea
   btnNuevaTarea.addEventListener("click", agregarTarea);

  // Comprobar input
  tareaInput.addEventListener("click", comprobarInput);

  // borrar elemetos de la lista
  for (var i = 0; i <= lista.children.length -1; i++) {
    lista.children[i].addEventListener("click", eliminarTarea);
  }




}());
