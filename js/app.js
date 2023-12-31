let menuBars = document.querySelector('#menu-bars');
let navBar = document.querySelector('.navbar');




menuBars.onclick = () => {

  // menuBars.style.backgroundColor = "red";

  if (navBar.style.transform === "translate(0%)") {
    navBar.style.transform = "translate(100%)"
  } else {
    navBar.style.transform = "translate(0%)"
  }



}

window.addEventListener('scroll', () => {

  const header = document.querySelector('.header')


  if (window.scrollY > 100) {
 header.style.backgroundColor = 'black';
   

  }
  if (window.scrollY < 100) {

    


    header.style.background = 'transparent';
  }
});


const searchBar = document.getElementById('searchBar');
const searchIcon = document.getElementById('searchIcon');

