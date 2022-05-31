class Icon extends HTMLElement {
  static get observedAttributes() {
    return ['type'];
  }

  constructor() {
    super();

    let shadow = this.attachShadow({mode: 'open'});

    let style = document.createElement('style');
    style.textContent = this.style();
    
    let div = document.createElement('div');
    div.innerHTML = this.template().trim();

    shadow.appendChild(style);
    shadow.appendChild(div.firstChild);
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.render();
  }

  render() {
    this.shadowRoot.querySelector('.icon').className = 'icon ' + this.getAttribute('type');
  }

  template() {
    return `<span class="icon"></span>`;
  }

  style() {
    return `
      .icon {
        width: 32px;
        height: 32px;
        display: inline-block;
      }

      .icon.adamantium {
        background-image: url(gui/icons/adamantium.png);
      }
      .icon.energy {
        background-image: url(gui/icons/energy.png);
      }
      .icon.eye {
        background-image: url(gui/icons/eye.png);
      }
      .icon.gold {
        background-image: url(gui/icons/gold.png);
      }
      .icon.heart {
        background-image: url(gui/icons/heart.png);
      }
      .icon.inventory {
        background-image: url(gui/icons/inventory.png);
      }
      .icon.key {
        background-image: url(gui/icons/key.png);
      }
      .icon.luck {
        background-image: url(gui/icons/luck.png);
      }
      .icon.mana {
        background-image: url(gui/icons/mana.png);
      }
      .icon.quest {
        background-image: url(gui/icons/quest.png);
      }
      .icon.shield {
        background-image: url(gui/icons/shield.png);
      }
      .icon.shop {
        background-image: url(gui/icons/shop.png);
      }
      .icon.silver {
        background-image: url(gui/icons/silver.png);
      }
      .icon.skull {
        background-image: url(gui/icons/skull.png);
      }
      .icon.strength {
        background-image: url(gui/icons/strength.png);
      }
      .icon.wisdom {
        background-image: url(gui/icons/wisdom.png);
      }
    `;
  }
}

customElements.define('p-icon', Icon);