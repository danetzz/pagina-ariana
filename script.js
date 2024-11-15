// NAV (COMPONENTES)
document.addEventListener('DOMContentLoaded', () => {
    fetch('componentes/nav.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.text();
        })
        .then(html => {
            document.getElementById('navPlaceholder').innerHTML = html;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});

// FOOTER (COMPONENTES)
document.addEventListener('DOMContentLoaded', () => {
    fetch('componentes/footer.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.text();
        })
        .then(html => {
            document.getElementById('footerPlaceholder').innerHTML = html;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});




// MENSAJE DE BIENVENIDA Y POP UP
document.addEventListener('DOMContentLoaded', function() {
    const cargaDiv = document.getElementById('carga');
    const mensajeBienvenidaDiv = document.getElementById('mensajeBienvenida');
    const contenidoDiv = document.getElementById('contenido');
    const botonCerrar = document.querySelector('#mensajeBienvenida .cerrar');
    const popupAnuncioDiv = document.getElementById('popupAnuncio');
    const botonCerrarPopup = document.querySelector('#popupAnuncio .cerrar');
    
                // Mostrar el contenido real después de 1 segundo
                setTimeout(function() {
                    cargaDiv.style.display = 'none'; // Ocultar el div de carga
                    mensajeBienvenidaDiv.style.display = 'block'; // Mostrar el mensaje de bienvenida
                }, 1000); // 1 segundo
    
                // Evento para cerrar el mensaje de bienvenida y mostrar el contenido
                botonCerrar.addEventListener('click', function() {
                    mensajeBienvenidaDiv.style.display = 'none'; // Ocultar el mensaje de bienvenida
                    contenidoDiv.style.display = 'block'; // Mostrar el contenido real
                    document.body.style.overflow = ''; // Restaurar el scrollbar
                });
    
                // Mostrar el pop-up del anuncio después de 10 segundos
                setTimeout(function() {
                    popupAnuncioDiv.style.display = 'block'; // Mostrar el pop-up del anuncio
                }, 10000); // 10 segundos
    
                // Evento para cerrar el pop-up del anuncio
                botonCerrarPopup.addEventListener('click', function() {
                    popupAnuncioDiv.style.display = 'none'; // Ocultar el pop-up del anuncio
                });
            });

// MENSAJE COOKIES

document.addEventListener('DOMContentLoaded', () => {
    const mensajeCookies = document.getElementById('mensajeCookies');
    const aceptarCookiesBtn = document.getElementById('aceptarCookies');
    let cookiesAceptadas = false;
            
        function mostrarMensajeCookies() {
            if (!cookiesAceptadas) {
                 mensajeCookies.style.display = 'block';
                        // Bloquear el scroll
                        document.body.style.overflow = 'hidden';
            }
        }
            
        function aceptarCookies() {
            cookiesAceptadas = true;
            mensajeCookies.style.display = 'none';
            // Permitir el scroll de nuevo
            document.body.style.overflow = '';
        }
            
        window.addEventListener('scroll', () => {
            // Obtener la altura total del documento
            const alturaTotal = document.documentElement.scrollHeight;
            // Obtener la altura de la ventana del navegador
            const alturaVentana = window.innerHeight;
            // Obtener la distancia desde el top del scroll
            const distanciaScroll = window.scrollY;
            
            // Si el usuario ha scrolleado más allá de la mitad de la página
            if (distanciaScroll + alturaVentana >= alturaTotal / 2) {
                mostrarMensajeCookies();
            }
        });
            
        aceptarCookiesBtn.addEventListener('click', aceptarCookies);
    });
                       
  

// FUNCION FETCH DE JSON- Productos


document.addEventListener('DOMContentLoaded', function() {
    fetch('productos.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar el archivo JSON');
            }
            return response.json();
        })
        .then(productos => {
            const contenedor = document.getElementById('productosContainer');
            productos.forEach(producto => {
                // Verifica el stock antes de crear la card
                if (producto.stock > 0) {
                    // Crear la card
                    const card = document.createElement('div');
                    card.className = 'cartasProductos';

                    // Agregar la imagen
                    const imagen = document.createElement('img');
                    imagen.src = producto.imagen;
                    imagen.alt = producto.nombre;
                    card.appendChild(imagen);

                    // Agregar el nombre
                    const nombre = document.createElement('h3');
                    nombre.textContent = producto.nombre;
                    card.appendChild(nombre);

                    // Agregar la descripción
                    const descripcion = document.createElement('p');
                    descripcion.textContent = producto.descripcion;
                    card.appendChild(descripcion);

                    // Agregar el precio
                    const precio = document.createElement('p');
                    precio.className = 'precio';
                    precio.textContent = `$${producto.precio}`;
                    card.appendChild(precio);

                    // Agregar el stock
                    const stock = document.createElement('p');
                    stock.className = 'stock';
                    stock.textContent = `Stock: ${producto.stock}`;
                    card.appendChild(stock);

                    // Agregar la card al contenedor
                    contenedor.appendChild(card);
                }
            });
        })
        .catch(error => {
            console.error('Hubo un problema con la petición Fetch:', error);
        });
});


// CAMBIAR MODO CLARO

const button = document.getElementById('modeToggle');
const iconoSwitch = document.getElementById("iconoBoton")
const iconoSwitch2 = document.getElementById("iconoBoton2")

button.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
      }    
);





// Función para cargar una página con AJAX
function loadPage(pageUrl) {
    fetch(pageUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la solicitud: ' + response.status);
            }
            return response.text();
        })
        .then(html => {
            document.getElementById('contentContainer').innerHTML = html;
        })
        .catch(error => {
            console.error('Hubo un problema al cargar la página:', error);
        });
}


document.getElementById('eternalsunshine').addEventListener('click', function() {
    loadPage('eternalsunshine.html');
});

document.getElementById('positions').addEventListener('click', function() {
    loadPage('positions.html');
});

document.getElementById('thankunext').addEventListener('click', function() {
    loadPage('thankunext.html');
});

// Función para cargar lyrics de canciones

document.getElementById('searchButton').addEventListener('click', async function() {
    const songName = document.getElementById('search').value.trim();
    const lyricsDiv = document.getElementById('lyrics');
  
    // Verificar si el campo está vacío
    if (songName.length === 0) {
        lyricsDiv.innerHTML = '<p>Por favor, escribe el nombre de la canción.</p>';
        return;
    }
  
    // Artista fijo: Ariana Grande
    const artistName = "Ariana Grande";
  
    // Construir la URL dinámica con el nombre de la canción ingresada
    const url = `https://api.lyrics.ovh/v1/${artistName}/${encodeURIComponent(songName)}`;
  
    try {
        // Realizar la solicitud a la API
        const response = await fetch(url);
        
        // Si la respuesta es exitosa (status 200), procesamos la letra
        if (response.ok) {
            const data = await response.json();
  
            // Mostrar la letra en el div
            if (data.lyrics) {
                lyricsDiv.innerHTML = `<h3>Letra de la canción: ${songName}</h3><p>${data.lyrics}</p>`;
            } else {
                lyricsDiv.innerHTML = '<p>No se encontró la letra de la canción.</p>';
            }
        } else {
            // Si la respuesta no es exitosa (por ejemplo, no existe la canción)
            lyricsDiv.innerHTML = '<p>No se encontró la canción. Intenta con otro nombre.</p>';
        }
    } catch (error) {
        // Si hay algún error en la solicitud
        lyricsDiv.innerHTML = '<p>Error al obtener la letra. Inténtalo de nuevo más tarde.</p>';
    }
  });

  

