const menuClick = document.getElementById('mobile-menu');
const menuClose = document.querySelector('.closebtnx');

menuClick.addEventListener('click', () => {
  document.getElementById('myNav').style.width = '100%';
  document.getElementById('body').style.overflow = 'hidden';
  menuClick.style.display = 'none';
});

menuClose.addEventListener('click', () => {
  document.getElementById('myNav').style.width = '0%';
  menuClick.style.display = 'block';
  document.getElementById('body').style.overflow = 'visible';
});

window.addEventListener('resize', () => {
  if (window.matchMedia('(min-width: 768px)').matches) {
    document.getElementById('mobile-menu').style.display = 'none';
    document.getElementById('body').style.overflow = 'visible';
    document.getElementById('myNav').style.width = '0%';
  } else {
    document.getElementById('mobile-menu').style.display = 'block';
  }
});
