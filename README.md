# Web Components

## Why i made this repo?
I need to quickly learn about Web Components, so i decided to share my researches and the simple example about it.

## What are Web Components?
Set of web platform API's that allow us to create custom reusable and encapsulated html tags to use in web pages and web apps
Web components do not require any special 3rd party libraries or frameworks (React, Angular, etc) but can certainly be used with them.

Web Components are made of 3 main building blocks:
* Custom Elements
* Shadow DOM
* HTML Templates

Let's take a look at them:

## Custom Elements
* Create Custom HTML tags
* Create custom class
* Lifecycle methods available

As an example this is how we will write it
``` js
class AppDrawer extends HTMLElement {...}
window.customElements.define('app-drawer', AppDrawer);
```
And this is how we will call it in HTML
(Pretty similiar to React when we make Components and pass them props.)
``` html
<app-drawer></app-drawer>
```

## Custom Elements <small>LifeCycle Methods</small>
* <b>constructor():</b> Called when an instance of the element is created or upgraded.
* <b>connectedCallback(): Called every time when the elment is inserted into the DOM</b>
* <b>attributeChangedCallback(attributeName, oldValue, newValue):</b> Called when an attribute is added, removed, updated, or replaced.

## Shadow DOM
* Used for self-contained components
* Encapsulate styles and markup
* Create with element.attachShadow({ mode: open })

* Creates a "ShadowRoot" that we can reference and interact with

## HTML Templates
* Define the encapsulated markup of our web component
* Template tag stores markup on page
* Include both HTML and CSS in templates
* Use slots to add custom text

## Slots
In the HTML we use the tag
``` css
<slot />
```
Adding the tag slot for example in between a h3 tag, will allow us to write something in our custom html tag, for example
``` html
<user-card>Hello World<user-card/>
```
This will render the text where you placed the slot, if you want to use more slot, you will have to give them names for example:
``` html
<h1><slot name="title"></h1>
<h2><slot name="subtitle"></h2>
```

Now you have more slot, and you can target them inside the class of your  component from the ShadowRoot like this:
```  js
this.shadowRoot.querySelector ('h1').innerText = this.getAttribute('title');
this.shadowRoot.querySelector ('h2').innerText = this.getAttribute('subtitle');
```

### Extending the component to a Navite html element
You can also extend your class to a native HTML element in this way: 
``` js
custom MyButton extends HTMLButtonElement {

}
```
When you extend to a Native component, you will have to provide an argument in the definition of the component, to tell it you are extending to a native element, like this:
``` js
window.customElements.define('my-button', MyButton, {extends: 'button'});
```

However you should be aware, that customized built in elements are not supported well by all browsers, see webkit bug: https://bugs.webkit.org/show_bug.cgi?id=182671

### Thigns to Know
The custom element tag must be composed by two words separated by a dash.
``` html
<!-- This will Work -->
<lit-button><lit-button>
<!-- This will Throw an Error -->
<button><button>
```
The this keyword in the Class, will refer to the element the class is made for so if you are in the class LitButton, the this keyword in a console log will return
``` html
<lit-button><lit-button>
```
Making the components without a Shadow Root will expose the <lit-button> element in the DOM, and it will be targettable in css, however we want to incapsulate our components, so we use the ShadowRoot, you can then decide to set the mode to open or close, doing so will make it possible or impossible to access and edit the component from outside.
You can also add the delegateFocus: true under mode, so the component can gain focus in the browser.

You are now ready to move to Polymer, Lit or whatever you are gonna use for making Web Components! Goodluck, and don't forget to checkk the videos below!

# Sources
Crash Course, from which i made this repo, very fast and to the point
By Traversy Media: https://www.youtube.com/watch?v=PCWaFLy3VUo

Intersting Tips from a Google Developer
By Google Chrome Developers: https://www.youtube.com/watch?v=zfQoleQEa4w

This is a Must Watch to learn more about the Web Components
By Before Semicolon: https://www.youtube.com/watch?v=PFpUCnyztJk

You might also be interested in learning what Polyfill means when approaching Web Components: https://it.wikipedia.org/wiki/Polyfill

