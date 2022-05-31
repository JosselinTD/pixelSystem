class Counter extends HTMLElement {
  static get observedAttributes() {
    return ['type', 'value'];
  }

  constructor() {
    super();

    let shadow = this.attachShadow({mode: 'open'});
    
    let div = document.createElement('div');
    div.innerHTML = this.template().trim();

    shadow.appendChild(div.firstChild);
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.render();
  }

  render() {
    this.shadowRoot.firstChild.querySelector('p-icon').setAttribute('type', this.getAttribute('type'));
    this.shadowRoot.firstChild.querySelector('.value').innerHTML = this.getAttribute('value');
  }

  template() {
    return `
      <div class="p-counter">
        <p-icon></p-icon>
        <span class="value"></span>
      </div>
    `;
  }
}

customElements.define('p-counter', Counter);