import { LitElement, html, css } from 'lit-element';
import { $ } from "../index.js";

class MenuItem extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      icon: { type: String },
      url: { type: String },
      imgurl: { type: String }
    }
  }

  constructor() {
    super();
    this.title = '';
    this.icon = '';
    this.url = '';
    this.imgurl = '';

    this.content = $('.content');
    this.onclick = (e) => this.content.innerHTML = `<h1>${e.target.title}</h1><iframe src="${this.url}"></iframe>`;
  }

  render() {
    return html`
      <div class="item">
        ${this.icon ? html`<my-icon name="${this.icon}" color="blue" imgurl="${this.imgurl}"></my-icon>` : html`<div style="widht:30px; height:30px"></div>`}
        ${this.title}
      </div>`
  }

  static get styles() {
    return css`
      .item {
        display: flex;
        align-items: center;
        margin: 10px 25px;
        padding: 5px 10px;
        border: 1px solid #0099ff;
        border-radius: 5px;
        cursor: pointer;
        line-height: 0;
        background-color: white;
        transition: all .3s;
      }
      .item:active {
        background-color: #0375c2;;
      }
      .item:hover {
        background-color: transparent;
        transform: scale(1.1);
      }
      .item my-icon {
        margin-right: 10px;
      }
    `;
  }
}

customElements.define('menu-item', MenuItem);