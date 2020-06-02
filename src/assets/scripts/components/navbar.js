const menuList = document.getElementById('menu-list');

let isMenuVisible = false;

function toggleNavbar(e) {
  if (isMenuVisible) {
    menuList.classList.add('hidden');
    menuList.classList.remove('block');
  } else {
    menuList.classList.add('block');
    menuList.classList.remove('hidden');
  }
  isMenuVisible = !isMenuVisible;
}

export { toggleNavbar };
