import { LitElement, html } from "@polymer/lit-element";
import "@polymer/paper-checkbox/paper-checkbox.js";

class MyElement extends LitElement {
  static get properties() {
    return {
      feeling: String,
      mood: String
    };
  }

  _didRender() {
    console.log("did");
  }

  _firstRendered() {
    console.log("first");
    this.addEventListener("hello", () => {
      console.log("Hello");
    });
  }

  sayHi() {
    console.log("Hi");
    this.dispatchEvent(
      new CustomEvent("hello", { bubbles: true, composed: true })
    );
  }

  _render({ feeling, mood }) {
    return html`
    <style>
      div {
        background-color: grey;
      }
      :host {
        color: black;
      }
    </style>
    <h1>${feeling}</h1>
    <div>
    WebComponents<br>
      <span class="mood">${mood}</span>!<br>
      <slot name="children"></slot><br>
      <paper-checkbox>READY</papar-checkbox><br>
      <slot name="footer"></slot><br>
    </div>
    <button on-click="${this.sayHi}">Hi</button>
    `;
  }
}

customElements.define("my-element", MyElement);
