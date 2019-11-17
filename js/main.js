(function() {
   //variables
   var lista = document.getElementById("lista"),
       tareaInput = document.getElementById("tareaInput"),
       btnNuevaTarea = document.getElementById("btn-agregar");

   // funciones
var agregarTarea = function() {
    var tarea = tareaInput.value,
        nuevaTarea = document.createElement("li"),
        enlace = document.createElement("a"),
        contenido = document.createTextNode(tarea);

        if (tarea === "") {
          tareaInput.setAttribute("placeholder", "agrega una tarea validad");
          tareaInput.className = "error";
          return false;
        }
     // agregamos el contenido al enlace
      enlace.appendChild(contenido);
    // le establecemos un atributo href
      enlace.setAttribute("href", "#");
    // agregamos el enlace a la nuevatarea
      nuevaTarea.appendChild(enlace);
    // agregamos la nueva tarea a la Lista
      lista.appendChild(nuevaTarea);

      tareaInput.value = "";

      for (var i = 0; i <= lista.children.length -1; i++) {
        lista.children[i].addEventListener("click", function(){
          this.parentNode.removeChild(this);
        });
      }

};
var comprobarInput = function() {
   tareaInput.className = "";
   tareaInput.setAttribute("placeholder", "Agrega tu tarea");
};

var eliminarTarea = function() {
  this.parentNode.removeChild(this);
};

   // eventos

  // Agragar Tarea
   btnNuevaTarea.addEventListener("click", agregarTarea);
   tareaInput.addEventListener("keyup", function(event){
     if (event.keyCode === 13) {
       agregarTarea();
     }
   });

  // Comprobar input
  tareaInput.addEventListener("click", comprobarInput);

  // borrar elemetos de la lista
  for (var i = 0; i <= lista.children.length -1; i++) {
    lista.children[i].addEventListener("click", eliminarTarea);
  }




}());
