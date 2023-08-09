import "./sass/main.scss";


console.log(document.querySelector("title").textContent);

const NavbarContainer = document.querySelector('nav');
const imageNavbar = document.createElement('img');
imageNavbar.src = '/img/navimg.jpg';
NavbarContainer.appendChild(imageNavbar);
imageNavbar.style.width= '100%'; 
imageNavbar.style.maxHeight= '300px';
imageNavbar.className= 'nav-bar__img';

const logoContainer = document.querySelector('div.search-bar__logo-container');
logoContainer.textContent = '';
const imgLogo = document.createElement('img');
imgLogo.src = '/img/television.png';
logoContainer.appendChild(imgLogo);
imgLogo.style.width= '20px'

const buscarNavBar = document.querySelector('label.search-bar__form-label');
buscarNavBar.innerHTML= 'Busqueda';

const sandwichMenu = document.querySelector('div.search-bar__carrito-container');
sandwichMenu.textContent = '';
const imgCarrito = document.createElement('img');
imgCarrito.src = 'img/carrito-de-compras.png';
imgCarrito.style.width = '25px';
sandwichMenu.appendChild(imgCarrito);

const resultadoBusqueda = document.querySelector('h1');
resultadoBusqueda.style.color = 'white';

const resuldatoP = document.querySelector('p');
resuldatoP.style.color = 'white';



