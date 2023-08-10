import "./sass/main.scss";


console.log(document.querySelector("title").textContent);


/* Nav Bar */

const NavbarContainer = document.querySelector('nav');
const imageNavbar = document.createElement('img');
imageNavbar.src = '/img/Logoproyecto.jpg';
NavbarContainer.appendChild(imageNavbar);
imageNavbar.style.width= '100%'; 
imageNavbar.className= 'nav-bar__img';

/* Formulario */

const logoContainer = document.querySelector('div.search-bar__logo-container');
logoContainer.textContent = '';
const imgLogo = document.createElement('img');
imgLogo.src = 'public/img/logo.png';
logoContainer.appendChild(imgLogo);
imgLogo.style.width= '50px'

/* Label */

const buscarNavBar = document.querySelector('label.search-bar__form-label');
buscarNavBar.innerHTML= 'Busqueda';

/* Carrito */

const sandwichMenu = document.querySelector('div.search-bar__carrito-container');
sandwichMenu.textContent = '';
const imgCarrito = document.createElement('img');
imgCarrito.src = 'img/carrito-de-compras.png';
imgCarrito.style.width = '25px';
sandwichMenu.appendChild(imgCarrito);
imgCarrito.style.alignItems = 'center';


/*Card section */

/*Card section - resultado de busqueda */

const resultadoBusqueda = document.querySelector('h1');
resultadoBusqueda.style.color = '#252525';

const resuldatoP = document.querySelector('p');
resuldatoP.style.color = '#252525';

/*Card section - Cards heading */

const headingsCards= document.querySelectorAll('.card__heading');
headingsCards[0].textContent= 'Iphone 11';
headingsCards[1].textContent= 'Iphone 12';
headingsCards[2].textContent= 'Auricolares Sony';
headingsCards[4].textContent= 'MAVIC 2 PRO';
headingsCards[5].textContent= 'Modem Motorola 2.244';
headingsCards[6].textContent= 'Lavarropas Whirpool';
headingsCards[7].textContent= 'Samsung TU7000';
headingsCards[8].textContent= 'Notebook Lenovo AirFLip';
headingsCards[9].textContent= 'MAVIC 2';

/* Card section - Cards description */

const descriptionCards= document.querySelectorAll('.card__description');
descriptionCards[0].innerHTML= 'El Apple iPhone 11 Pro Max es la variante del iPhone 11 con pantalla Super Retina XDR de 6.5 pulgadas. El iPhone 11 Pro Max está potenciado por un procesador A13 Bionic de Apple, con opciones de almacenamiento de 64GB, 256GB o 512GB. Su cámara trasera es triple, de 12 MP + 12 MP + 12 MP integrando zoom óptico, gran angular y estabilización óptica de imagen, mientras que su cámara selfie es de 12 MP y ayuda al reconocimiento de rostro con Face ID. El resto de las características incluyen parlantes stereo, resistencia al agua IP68, batería de carga rápida y sonido Dolby Atmos.';
descriptionCards[1].innerHTML= 'El Apple iPhone 12 es parte de la serie 12 del iPhone de Apple, llegando en el 2020 con un diseño que recuerda al iPhone 4 y conectividad 5G. El iPhone 12 cuenta con una pantalla Super Retina XDR de 6.1 pulgadas de tecnología OLED y está potenciado por el nuevo procesador A14 Bionic, con opciones de 64GB, 128GB o 256GB de almacenamiento interno. El sistema de cámaras trasero es dual, con dos lentes de 12MP que agregan estabilización óptica de imagen, y varias mejoras de software y la cámara frontal TrueDepth es de 12 MP. El iPhone 12 utiliza reconocimiento de rostro Face ID para la seguridad, cuenta con soporte para carga rápida e inalámbrica, y corre iOS 14.';
descriptionCards[2].innerHTML= 'El nuevo procesador integrado V1 desbloquea todo el potencial del procesador noise cancelling HD QN1, para dar un paso adelante en nuestra tecnología Noise Cancelling';
descriptionCards[3].innerHTML= 'Diseño elegante y creativo,calidad óptima para los requisitos del cliente, hecho de material resistente para un uso prolongado, producto útil y práctico';
descriptionCards[4].innerHTML= 'MAVIC 2 PRO: El Mavic 2 Pro está equipado con la nueva cámara Hasselblad L1D-20c; la L1D-20c utiliza la tecnología HNCS de Hasselblad permite capturar sobrecogedoras imágenes aéreas de 20 MP';
descriptionCards[5].innerHTML= 'Módem de cable DOCSIS 3.0 de 16 x 4 más un router Gigabit WiFi de doble banda AC1600 integrado (2.4 GHz y 5 GHz) con cuatro puertos Gigabit (GigE), un cortafuegos y mucho más. Este producto se recomienda para velocidades reales de servicio de Internet de cable de hasta 375 Mbps. Un chipset de módem de cable Broadcom proporciona seguridad contra ataques de denegación de servicio.';
descriptionCards[6].innerHTML= 'Samsung apuesta por la innovación y el diseño de vanguardia en los productos de su línea blanca. Ofrece soluciones para el lavado que priorizan la eficiencia de cada uno de sus programas y con ello, el cuidado de tus prendas más delicadas.';
descriptionCards[7].innerHTML= 'El TV UHD Cristal clase TU7000 desbloquea detalles ocultos a cuatro veces la calidad de Full HD. Además, Universal Guide te ayuda a encontrar exactamente lo que quieres ver, de manera fácil y rápida.';
descriptionCards[8].innerHTML= 'Aumenta tu productividad en cualquier lugar. Diseñado para el lugar de trabajo moderno, el portátil Lenovo V15 de 2.ª generación (15" Intel) es el compañero de trabajo perfecto. Adecuado para la productividad móvil, ofrece un gran rendimiento tanto en la oficina como en casa. Los procesadores Intel® Core™ de 11.ª generación, gráfica integrada, junto con las excelentes opciones de seguridad, memoria y almacenamiento, te facilitan el día a día.';
descriptionCards[9].innerHTML= 'Nuestro sueño siempre ha sido hacer un dron que exista donde convergen la ingeniería, la tecnología y las necesidades del fotógrafo aéreo. Un dron que incorpora todas las tecnologías avanzadas y exclusivas de DJI y es capaz de redefinir lo que es posible para el mundo de la fotografía aérea. Al crear el Mavic 2, hemos hecho realidad este sueño.';
descriptionCards[10].innerHTML= 'Chromecast con Google TV requiere un televisor con puerto HDMI, una red Wi-Fi, una cuenta de Google, una toma de corriente cercana y un dispositivo móvil compatible. Consulta los requisitos mínimos del sistema operativo en g.co/cast/req. Para ver contenido en HD, se necesita un televisor con HD y una conexión a Internet de banda ancha fiable. Es posible que se requieran servicios de suscripción. Los contenidos y servicios no están disponibles en todos los países o zonas y están sujetos a cambios.';

