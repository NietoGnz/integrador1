import "./sass/main.scss";


console.log(document.querySelector("title").textContent);

const NavbarContainer = document.querySelector('nav');

const imageNavbar = document.createElement('img');

imageNavbar.src = '/img/navimg.jpg';

NavbarContainer.appendChild(imageNavbar);

imageNavbar.style.width= '100%'; 
imageNavbar.style.maxHeight= '600px';


