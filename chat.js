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
    fetch("http://192.168.1.135:8000")
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