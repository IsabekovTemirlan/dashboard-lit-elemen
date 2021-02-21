import "./components/Icon.js";
import "./components/MenuItem.js";
import "./style.css";
import {items} from "./data.js";

let visible = true;
const sidebar = document.querySelector('.sidebar');
const toggleBtn = document.querySelector('#toggler');

document.onclick = ({target}) => {
  const { classList } = sidebar;
  if (target === toggleBtn) {
    visible = !visible;
  
    if (!visible) {
      classList.remove('in');
      classList.add('out');
    } else {
      classList.remove('out');
      classList.add('in');
    }
  } else {
    if (visible && (window.innerWidth < 770)) {
      visible = !visible;
      classList.remove('in');
      classList.add('out');
    }
  }
}

const renderMenuItems = ({title, icon, url}) => `<menu-item title="${title}" icon="${icon}" url="${url}"></menu-item>`;
sidebar.insertAdjacentHTML('afterbegin', items.map(renderMenuItems).join(''))