function siguientePag(page) {  
    const enfermedad = document.getElementById('enfermedad').value;  
    localStorage.setItem('enfermedad', enfermedad); // Guardar dato en localStorage 
    const tiempo = document.getElementById('tiempo').value;  
    localStorage.setItem('tiempo', tiempo); // Guardar dato en localStorage  
    const detalle = document.getElementById('detalle').value;  
    localStorage.setItem('detalle',detalle); // Guardar dato en localStorage   
    window.location.href = page; // Navegar a la siguiente página  
}  
function atras(page) {  
    window.location.href = page; // Regresar a la página anterior  
}
