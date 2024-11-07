
    //Aparecer/ desaparecer input de numero y fecha
    const checkbox = document.getElementById('aceptar');
    const campoNumero = document.getElementById('inputNumero');
    const campoFecha = document.getElementById('inputFecha');


            checkbox.addEventListener('change', function() {
                if (checkbox.checked) {
                    campoNumero.style.display= "block";
                    campoFecha.style.display="block";
                } else {
                    campoNumero.style.display= "none";
                    campoFecha.style.display="none";
                }
            });

              //Validar la fecha
    const fechaInput = document.getElementById('fecha');
    const fecha = new Date(inputFecha.value);
    const hoy = new Date();
            hoy.setUTCHours(0, 0, 0, 0); // Establece la hora de hoy a 00:00:00 para comparación

            if (fecha < hoy) {
                alert('La fecha debe ser posterior al día de hoy.');
                event.preventDefault(); // Evita el envío del formulario
            }
       

        // Establecer la fecha mínima del campo de fecha a mañana
        const mañana = new Date();
        mañana.setDate(mañana.getDate());
        const fechaMinima = mañana.toISOString().split('T')[0]; // Formato YYYY-MM-DD
        fechaInput.setAttribute('min', fechaMinima);
   



function validarFormulario(event) {
    // Prevenir el envío del formulario si hay errores
    event.preventDefault();

    // Recupero los valores del formulario y los pongo en 3 constantes
    const nombreUsuario = document.getElementById('usuario').value;
    const contrasena = document.getElementById('contrasena').value;
    const checkbox = document.getElementById('aceptar').checked;

    // Valido el nombre de usuario
    if (nombreUsuario.length > 30) {
        alert('El nombre de usuario debe tener hasta 30 caracteres.');
        return false;
    }

    // Valido la contraseña
    if (contrasena.length <= 5) {
        alert('La contraseña debe tener más de 5 caracteres.');
        return false;
    }

    // Valido el checkbox
    if (!checkbox) {
        alert('Debes aceptar los términos.');
        return false;
    }

// Redirigir según el valor del usuario
if (nombreUsuario === 'danila') {
                window.location.href = 'admin.html'; // Redirige al HTML de administrador
            } else if (nombreUsuario === 'zaiart') {
                window.location.href = 'https://www.youtube.com/@zaiartt'; // Redirige al HTML de creador de contenido
            } else {
                window.location.href = 'home.html'; // Redirige al HTML de landing page
            }

            return true;
        }
