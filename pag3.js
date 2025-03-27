function siguientePag(page) {  
    const enfermedad = document.getElementById('enfermedad').value;  
    localStorage.setItem('enfermedad', enfermedad);
    const tiempo = document.getElementById('tiempo').value;  
    localStorage.setItem('tiempo', tiempo);  
    const detalle = document.getElementById('detalle').value;  
    localStorage.setItem('detalle',detalle);  
    window.location.href = page; // Navegar a la siguiente página  
}  
function atras(page) {  
    window.location.href = page; // Regresar a la página anterior  
}
