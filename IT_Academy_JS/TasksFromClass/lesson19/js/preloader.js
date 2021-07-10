const preloader = document.querySelector('#preloader');
const mainContainer = document.querySelector('.content');

const closePreloader = () => {
  preloader.style.opacity = 0;
  mainContainer.style.opacity = 1;
}

setTimeout(closePreloader, 1000);