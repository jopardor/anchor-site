
AOS.init(); //script-propio-de-plugin

// Tiny slider
// let slider = tns({
//     container: '.my-slider',
//     items: 1,
//     autoplay: true,
//     nav: false,
//     controlsContainer: '#custom-controls',
//     controlsText: ["anterior", "siguiente"],
//     responsive: {
//         640: {
//             edgePadding: 0,
//             gutter: 20,
//             items: 2
//         },
//         700: {
//             gutter: 30
//         },
//         900: {
//             items: 3
//         }
//     }
// });

let slider = tns({
    container: '.my-slider',
    items: 1,
    autoplay: false,
    nav: false,
    controls: true,
    prevButton: '.custom-prev',
    nextButton: '.custom-next',
    responsive: {
        640: {
            edgePadding: 0,
            gutter: 20,
            items: 2
        },
        700: {
            gutter: 30
        },
        900: {
            items: 3
        }
    }
});


//ALERT-BOM

let contenedor = document.getElementById('contenedorCuatroNosotros');
let customAlert = document.getElementById('customAlert');
let timer;

contenedor.addEventListener('mouseover', function () {
    timer = setTimeout(function () {
        customAlert.style.display = 'block';
    }, 2000); // Espera 2 segundos
});

contenedor.addEventListener('mouseout', function () {
    clearTimeout(timer); // Cancela el temporizador si el cursor sale antes de los 2 segundos
    customAlert.style.display = 'none';
});

