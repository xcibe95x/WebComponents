# Web Components

## Why i made this repo?
I need to quickly learn about Web Components, so i decided to share my researches and examples about it.

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

You are now ready to move to Polymer, Lit or whatever you are gonna use for making Web Components! Goodluck.

# Sources
Crash Course, from which i made this repo, very fast and to the point
By Traversy Media: https://www.youtube.com/watch?v=PCWaFLy3VUo

Intersting Tips from a Google Developer
By Google Chrome Developers: https://www.youtube.com/watch?v=zfQoleQEa4w


https://www.youtube.com/watch?v=PFpUCnyztJk

