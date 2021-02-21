import { LitElement, html } from 'lit-element';

class Icon extends LitElement {
  static get properties() {
    return {
      name: { type: String },
      color: { type: String },
      size: { type: Number }
    }
  }

  constructor() {
    super();
    this.name = ''
    this.color = '#339cff';
    this.size = 24;
  }


  render() {
    switch (this.name) {
      case 'menu':
        return html`<svg xmlns="http://www.w3.org/2000/svg" width="${this.size}" height="${this.size}" viewBox="0 0 24 24" style="fill:${this.color};transform:;-ms-filter:"><path d="M4 6H20V8H4zM4 11H20V13H4zM4 16H20V18H4z"></path></svg>`;
      case 'trend':
        return html`<svg xmlns="http://www.w3.org/2000/svg" width="${this.size}" height="${this.size}" viewBox="0 0 24 24" style="fill:${this.color};transform:;-ms-filter:"><path d="M10 10.414L14 14.414 19.707 8.707 22 11 22 5 16 5 18.293 7.293 14 11.586 10 7.586 2.293 15.293 3.707 16.707z"></path></svg>`;
      case 'stat':
        return html`<svg xmlns="http://www.w3.org/2000/svg" width="${this.size}" height="${this.size}" viewBox="0 0 24 24" style="fill:${this.color};transform:;-ms-filter:"><path d="M20,12c-0.249,0-0.483,0.051-0.703,0.133l-2.398-1.963C16.958,9.956,17,9.734,17,9.5C17,8.114,15.886,7,14.5,7 S12,8.114,12,9.5c0,0.396,0.1,0.765,0.262,1.097l-2.909,3.438C9.237,14.015,9.121,14,9,14c-0.179,0-0.348,0.03-0.512,0.074 l-2.563-2.563C5.97,11.348,6,11.179,6,11c0-1.108-0.892-2-2-2s-2,0.892-2,2s0.892,2,2,2c0.179,0,0.348-0.03,0.512-0.074 l2.563,2.563C7.03,15.652,7,15.821,7,16c0,1.108,0.892,2,2,2s2-0.892,2-2c0-0.237-0.048-0.46-0.123-0.671l2.913-3.442 C14.017,11.953,14.252,12,14.5,12c0.411,0,0.792-0.107,1.133-0.281l2.399,1.963C18.016,13.786,18,13.891,18,14c0,1.108,0.892,2,2,2 s2-0.892,2-2S21.108,12,20,12z"></path></svg>`;
      case 'pie':
        return html`<svg xmlns="http://www.w3.org/2000/svg" width="${this.size}" height="${this.size}" viewBox="0 0 24 24" style="fill:${this.color};transform:;-ms-filter:"><path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M19.931,11H13V6V4.069 C16.611,4.522,19.478,7.389,19.931,11z M4,12c0-4.072,3.061-7.436,7-7.931V6v6c0,0.119,0.028,0.234,0.069,0.345 c0.013,0.032,0.026,0.062,0.042,0.093c0.015,0.03,0.022,0.063,0.041,0.093l4.202,6.723C14.332,19.728,13.198,20,12,20 C7.589,20,4,16.411,4,12z M17.052,18.196L13.805,13h6.126C19.669,15.087,18.605,16.928,17.052,18.196z"></path></svg>`;
      case 'bar':
        return html`<svg xmlns="http://www.w3.org/2000/svg" width="${this.size}" height="${this.size}" viewBox="0 0 24 24" style="fill:${this.color};transform:;-ms-filter:"><path d="M6 21H3c-.553 0-1-.448-1-1v-8c0-.552.447-1 1-1h3c.553 0 1 .448 1 1v8C7 20.552 6.553 21 6 21zM13 21h-3c-.553 0-1-.448-1-1V3c0-.552.447-1 1-1h3c.553 0 1 .448 1 1v17C14 20.552 13.553 21 13 21zM20 21h-3c-.553 0-1-.448-1-1V9c0-.552.447-1 1-1h3c.553 0 1 .448 1 1v11C21 20.552 20.553 21 20 21z"></path></svg>`;
      case 'line':
        return html`<svg xmlns="http://www.w3.org/2000/svg" width="${this.size}" height="${this.size}" viewBox="0 0 24 24" style="fill:${this.color};transform:;-ms-filter:"><path d="M3,3v17c0,0.553,0.447,1,1,1h17v-2H5V3H3z"></path><path d="M15.293,14.707c0.391,0.391,1.023,0.391,1.414,0l5-5l-1.414-1.414L16,12.586l-2.293-2.293 c-0.391-0.391-1.023-0.391-1.414,0l-5,5l1.414,1.414L13,12.414L15.293,14.707z"></path></svg>`;
      case 'net':
        return html`<svg xmlns="http://www.w3.org/2000/svg" width="${this.size}" height="${this.size}" viewBox="0 0 24 24" style="fill:${this.color};transform:;-ms-filter:"><path d="M19.5,3C18.121,3,17,4.121,17,5.5c0,0.357,0.078,0.696,0.214,1.005l-1.955,2.199C14.615,8.262,13.839,8,13,8 c-0.74,0-1.424,0.216-2.019,0.566L8.707,6.293L8.684,6.316C8.88,5.918,9,5.475,9,5c0-1.657-1.343-3-3-3S3,3.343,3,5s1.343,3,3,3 c0.475,0,0.917-0.12,1.316-0.316L7.293,7.707L9.567,9.98C9.215,10.576,9,11.261,9,12c0,0.997,0.38,1.899,0.985,2.601l-2.577,2.576 C7.126,17.066,6.821,17,6.5,17C5.122,17,4,18.121,4,19.5S5.122,22,6.5,22S9,20.879,9,19.5c0-0.321-0.066-0.626-0.177-0.909 l2.838-2.838C12.082,15.903,12.528,16,13,16c2.206,0,4-1.794,4-4c0-0.636-0.163-1.229-0.428-1.764l2.117-2.383 C18.945,7.941,19.215,8,19.5,8C20.879,8,22,6.879,22,5.5S20.879,3,19.5,3z M13,14c-1.103,0-2-0.897-2-2s0.897-2,2-2 c1.103,0,2,0.897,2,2S14.103,14,13,14z"></path></svg>`;
      case 'base':
        return html`<svg xmlns="http://www.w3.org/2000/svg" width="${this.size}" height="${this.size}" viewBox="0 0 24 24" style="fill:${this.color};transform:;-ms-filter:"><path d="M12,22c3.976,0,8-1.374,8-4v-4v-4V6c0-2.626-4.024-4-8-4S4,3.374,4,6v4v4v4C4,20.626,8.024,22,12,22z M12,20 c-3.722,0-6-1.295-6-2v-1.268C7.541,17.57,9.777,18,12,18s4.459-0.43,6-1.268V18C18,18.705,15.722,20,12,20z M12,4 c3.722,0,6,1.295,6,2s-2.278,2-6,2S6,6.705,6,6S8.278,4,12,4z M6,8.732C7.541,9.57,9.777,10,12,10s4.459-0.43,6-1.268V10 c0,0.705-2.278,2-6,2s-6-1.295-6-2V8.732z M6,12.732C7.541,13.57,9.777,14,12,14s4.459-0.43,6-1.268V14c0,0.705-2.278,2-6,2 s-6-1.295-6-2V12.732z"></path></svg>`;
      default:
        return html`<div style="widht:${this.size}; height:${this.size}"></div>`;
    }
  }
}

customElements.define('my-icon', Icon);