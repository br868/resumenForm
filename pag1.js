 
        function siguientePag(page) {  
            const nombre = document.getElementById('nombre').value;  
            localStorage.setItem('nombre', nombre); // Guardar dato en localStorage 
            const apellido = document.getElementById('apellido').value;  
            localStorage.setItem('apellido', apellido); // Guardar dato en localStorage  
            const telefono = document.getElementById('telefono').value;  
            localStorage.setItem('telefono',telefono); // Guardar dato en localStorage   
            
            window.location.href = page; // Navegar a la siguiente página  
        }  
    