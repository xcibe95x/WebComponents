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

# Sources
Traversy Media (Crash Course): https://www.youtube.com/watch?v=PCWaFLy3VUo

