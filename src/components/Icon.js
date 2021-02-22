import { LitElement, html } from 'lit-element';

class Icon extends LitElement {
  static get properties() {
    return {
      name: { type: String },
      color: { type: String },
      size: { type: Number },
      imgurl: { type: String }
    }
  }

  constructor() {
    super();
    this.name = ''
    this.color = '';
    this.size = 24;
    this.imgurl = '';
  }

  render() {
    if (this.imgurl) {
      return html`
      <style>
      .icon-img {
        width: ${this.size}px;
        height: ${this.size}px;
        filter: ${calculateColorValue(this.color)};
      }
      
      </style>
      <img
        class="icon-img"
        src="${this.imgurl}"
        alt="${this.name}"/>`;
    }
    else { return html`<div style="width: 26px; height: 26px;"></div>`; }
  }
}

customElements.define('my-icon', Icon);

// generat basic-colors to css filter property
function calculateColorValue(color) {
  switch (color) {
    case "white": return 'invert(95%) sepia(24%) saturate(7446%) hue-rotate(183deg) brightness(132%) contrast(93%)'
    case "black": return 'invert(0%) sepia(0%) saturate(7500%) hue-rotate(206deg) brightness(104%) contrast(105%)'
    case "blue": return 'invert(63%) sepia(82%) saturate(3993%) hue-rotate(188deg) brightness(101%) contrast(101%)'
    case "red": return 'invert(19%) sepia(97%) saturate(6158%) hue-rotate(357deg) brightness(101%) contrast(115%)'
    case "green": return 'invert(68%) sepia(93%) saturate(495%) hue-rotate(61deg) brightness(100%) contrast(104%)'
    case "orange": return 'invert(77%) sepia(95%) saturate(786%) hue-rotate(324deg) brightness(98%) contrast(101%)'
    case "yellow": return 'invert(90%) sepia(58%) saturate(885%) hue-rotate(353deg) brightness(107%) contrast(105%)'
    case "brown": return 'invert(23%) sepia(40%) saturate(3478%) hue-rotate(346deg) brightness(92%) contrast(82%)'
    case "purple": return 'invert(22%) sepia(56%) saturate(4297%) hue-rotate(290deg) brightness(106%) contrast(137%)'
    default: return ''
  }
}
