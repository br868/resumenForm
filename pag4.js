
// Cargar datos guardados al abrir la página  
document.addEventListener('DOMContentLoaded', () => {  
    document.getElementById('fecha').value = localStorage.getItem('fecha') || '';  
    document.getElementById('hospital').value = localStorage.getItem('hospital') || '';  
    document.getElementById('diagnostico').value = localStorage.getItem('diagnostico') || '';  

});  

function submitData() {  
    const fecha = document.getElementById('fecha').value;  
    localStorage.setItem('fecha', fecha);
    const hospital = document.getElementById('hospital').value;  
    localStorage.setItem('hospital', hospital);
    const diagnostico = document.getElementById('diagnostico').value;  
    localStorage.setItem('diagnostico', diagnostico);
    
    // Aquí puedes hacer algo con los datos, como enviarlos a un servidor  
    const data = {  
        nombre: localStorage.getItem('nombre'),  
        apellido: localStorage.getItem('apellido'),  
        edad: localStorage.getItem('edad'),
        telefono: localStorage.getItem('telefono'),  
        nombreF: localStorage.getItem('nombre'),  
        parentesco: localStorage.getItem('parentesco'),
        edadF: localStorage.getItem('edad'),  
        enfermedad: localStorage.getItem('enfermedad'),  
        tiempo: localStorage.getItem('tiempo'),
        detalle: localStorage.getItem('detalle'),  
        fecha: localStorage.getItem('fecha'),
        hospital: localStorage.getItem('hospital'),  
        diagnostico: localStorage.getItem('diagnostico'),
          
    };  
    console.log("Datos enviados:", data);  
    alert('Datos guardados, revisa la consola para ver el resultado.');  




// Guardar el objeto en localStorage (convertido a cadena de texto)
localStorage.setItem("data", JSON.stringify(data));

// Recuperar el objeto desde localStorage
const usuarioRecuperado = JSON.parse(localStorage.getItem("data"));

// Mostrar el objeto en el HTML
const outputDiv = document.getElementById("output");
outputDiv.innerHTML = `

<fieldset>
<h1><strong><center>Resumen de  ${usuarioRecuperado.nombre} </center></strong></h1><br>

<h3><strong>Datos Personales</strong></h3><br>
<p><strong>Nombre de :</strong> ${usuarioRecuperado.nombre}</p>
<p><strong>Apellido:</strong> ${usuarioRecuperado.apellido}</p>
<p><strong>Edad:</strong> ${usuarioRecuperado.edad}</p>
<p><strong>Telefono:</strong> ${usuarioRecuperado.telefono}</p>

<br>

<h3><strong>Familiar Agregado</strong></h3><br>
<p><strong>Nombre:</strong> ${usuarioRecuperado.nombreF}</p>
<p><strong>Parentesco:</strong> ${usuarioRecuperado.parentesco}</p>
<p><strong>Edad :</strong> ${usuarioRecuperado.edadF}</p>

<br>

<h3><strong>Condiciones Preexistentes</strong></h3><br>
<p><strong>Enfermedad:</strong> ${usuarioRecuperado.enfermedad}</p>
<p><strong>Tiempo de la Enfermedad:</strong> ${usuarioRecuperado.parentesco}</p>
<p><strong>Detalle :</strong> ${usuarioRecuperado.detalle}</p>

<br>

<h3><strong>Registro de Internamientos Realizados</strong></h3><br>
<p><strong>Fecha:</strong> ${usuarioRecuperado.fecha}</p>
<p><strong>Centro Medico :</strong> ${usuarioRecuperado.hospital}</p>
<p><strong>Diagnostico :</strong> ${usuarioRecuperado.diagnostico}</p>
</fieldset>
`;
}
function atras(page) {  
    window.location.href = page; // Regresar a la página anterior  
}  
