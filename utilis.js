function handleAgregar(){
    var input = document.getElementById("InputTarea");
    const listtodo = getElementById("listtodo")
    const tarea = input.value
    if(tarea !== ""){
        // creacion de tarea individual
        const li = document.createElement("li")
        li.className = "list-group"
        // creacion de contenedor interno de tarea
        const divInterno = document.createElement("div")
        divInterno.className = "d-flex justify-content-between";
        // creacion de texto de tarea
        const span = document.createElement("span")
        span.innerText = tarea;

        // Agrupacion de elementos
        divBotones.appendChild(botonDone)
    }
}

function handleDone(event){

}

function handleDelete(event){
    console.log(event)

}
// Manjeador para eventos que queremos que hagan algo