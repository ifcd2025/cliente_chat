function enviarMensaje() {
    const autor = document.getElementById("autor").value;
    const mensaje = document.getElementById("mensaje").value;
    if(/^.+$/.test(autor.trim()) || /$.{4,}^/.test(mensaje.trim())) {
        alert("Faltan datos o el mensaje es menor de 4 caracteres");
        return;
    }
    const datos = {
        method: "POST",
        body: JSON.stringify({"autor": autor, "mensaje": mensaje}),
        headers: new Headers({
            "Content-Type": "application/json; charset=UTF/8"
        })
    }
    fetch("http://192.168.1.132:8000")
    .then(respuesta => {
        if(respuesta.ok) {
            return respuesta.json();
        } else {
            throw new Error(respuesta.error);
        }
    })
    .then(datos => alert("mensaje añadido"))
    .catch( error => alert(error));
}

function obtenerMensajes() {
    fetch("http://192.168.1.132:8000/mensajes")
    .then(respuesta => {
        if(respuesta.ok) {
            return respuesta.json();
        } else {
            throw new Error(respuesta.status);
        }
    })
    .then(datos => {
        for(const mensaje of datos) {
            const mensajes = document.getElementById("mensajes")
            const div = document.createElement("div");
            mensajes.appendChild(div);
            div.classList.add("mensaje", "alert", "alert-dark", "m-3");
            div.textContent = JSON.stringify(mensaje);

        }
    })
}

setInterval(obtenerMensajes, 5000);


