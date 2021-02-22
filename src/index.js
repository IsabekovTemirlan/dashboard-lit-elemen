import "./components/Icon.js";
import "./components/MenuItem.js";
import "./style.css";
import { items } from "./data.js";

let visible = true, sidebar = $('.sidebar'), toggleBtn = $('#toggler');

document.onclick = ({ target }) => sidebarToggler(sidebar, target, toggleBtn, visible);// sidebar toggle handler
sidebar.insertAdjacentHTML('afterbegin', items.map(renderMenuItems).join('')); // render <menu-item> inside sidebar

// mini helper
export function $(selector) {
  return document.querySelector(selector);
}

// toggle sidebar 
function sidebarToggler({ classList }, target, btn, vsbl) {
  if (target === btn) {
    vsbl = !vsbl;
    classList.toggle('in');
    classList.toggle('out');
  }
  // for small screen devices
  if (vsbl && (window.innerWidth < 770)) {
    vsbl = !vsbl;
    classList.toggle('in');
    classList.toggle('out');
  }
}

// generate custom <menu-item> web components
function renderMenuItems({ title, icon, url, imgurl }) {
  return `<menu-item title="${title}" icon="${icon}" url="${url}" imgurl="${imgurl}"></menu-item>`;
}
