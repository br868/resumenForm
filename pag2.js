  
// Cargar datos guardados al abrir la página  
document.addEventListener('DOMContentLoaded', () => {  
    document.getElementById('nombre').value = localStorage.getItem('nombreF') || '';  
    document.getElementById('parentesco').value = localStorage.getItem('parentesco') || '';  
    document.getElementById('edad').value = localStorage.getItem('edadF') || '';  

});  

function siguientePag(page) {  
    const nombreF = document.getElementById('nombre').value;  
    localStorage.setItem('nombre', nombreF); 
    const psrentesco = document.getElementById('parentesco').value;  
    localStorage.setItem('parentesco', parentesco); 
    const edadF = document.getElementById('edad').value;  
    localStorage.setItem('edad', edadF); // Guardar dato en localStorage  
  
    window.location.href = page; // Navegar a la siguiente página  
}  

function atras(page) {  
    window.location.href = page; // Regresar a la página anterior  
}  