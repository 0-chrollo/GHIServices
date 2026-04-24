const burger = document.getElementById('burger');
const navBar = document.getElementById('navBar');
const menu   = document.getElementById('dropdownMenu');

burger.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('open');
  navBar.classList.toggle('open', isOpen);
  burger.setAttribute('aria-expanded', isOpen);
  menu.setAttribute('aria-hidden', !isOpen);
});

menu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('open');
    navBar.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-hidden', 'true');
  });
});