// Create a new template element
const template = document.createElement('template');

// Make a template using backticks
template.innerHTML = `
<style>
    .user-card {
        background: grey;
        border-radius: 8px;
        margin: 10px;
        min-width: 200px;
        border: 1px solid black;
    }

    .user-content {
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-family: sans-serif;
        font-size: 14px;
        text-align: center;

    }

    .user-content img {
        border-radius: 50%;
        border: 4px solid black;
    }
</style>

<div class="user-card">
<div class="user-content">
<img />
    <h3>Jhon Doe</h3>
    <div class="info">
        <h4><slot name="email"/></h4>
        <h4><slot name="phone"/></h4>
    </div>
        <button id="toggle-info">Hide Info</button>
    </div>
</div>
`; 

// We make a Class and extend it as an HTMLElement
class UserCard extends HTMLElement {
    // We run a constructor
    constructor() {
        // We use super to call the parent constructor
        super();

        this.showInfo = true;

        // Create a Shadow DOM and Attach options with mode: open
        this.attachShadow({ mode: 'open' });

        // Append our template to the ShdowRoot
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        // Target Attribues to add custom attributes
        this.shadowRoot.querySelector ('h3').innerText = this.getAttribute('name');
        this.shadowRoot.querySelector ('img').src = this.getAttribute('avatar');
        
        // We reference our component with the this keyword and target it's innerHTML
        // Attribute example without Shadow DOM: this.innerHTML = `${this.getAttribute('name')}`;
    }


    // Toggle Card Informations
    toggleInfo() {
        this.showInfo = !this.showInfo;

        const info = this.shadowRoot.querySelector('.info');
        const toggleBtn = this.shadowRoot.querySelector('#toggle-info');

        if (this.showInfo) {
            info.style.display = 'block';
            toggleBtn.innerText = 'Hide Info';
        } else {
            info.style.display = 'none';
            toggleBtn.innerText = 'Show Info';
        }
    }


    // Callbacks for the Toggle
    connectedCallback() {
        this.shadowRoot.querySelector('#toggle-info')
        .addEventListener('click', () => this.toggleInfo());
    }

    disconnetedCallback() {
        this.shadowRoot.querySelector('#toggle-info')
        .removeEventListener('click', () => this.toggleInfo());
    }

}

// We define our component html tag and bind it to the class
window.customElements.define('user-card', UserCard);
