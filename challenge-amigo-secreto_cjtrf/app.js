
let nombres = [];
function agregarNombre() {
    const input = document.getElementById('nombre');
    const nombre = input.value.trim();
    if (nombre) {
        nombres.push(nombre);
        input.value = '';
        actualizarLista();
    } else {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }
    
    if (nombres.length < 2) {
        alert("Debes ingresar al menos dos nombres para continuar.");
    }
}

function actualizarLista() {
    const lista = document.getElementById('listaNombres');
    lista.innerHTML = '';
    nombres.forEach(n => {
        const li = document.createElement('li');
        li.textContent = n;
        lista.appendChild(li);
    });
}



function sortearAmigo() {
    if (nombres.length > 0) {
        const indiceGanador = Math.floor(Math.random() * nombres.length);
        alert(`Tu amigo secreto es: ${nombres[indiceGanador]}`);
    } else {
        alert("Debe haber al menos un nombre para sortear.");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("btnadd").addEventListener("click", agregarNombre)
    document.getElementById("btnSort").addEventListener("click", sortearAmigo);
});