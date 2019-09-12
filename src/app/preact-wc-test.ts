import { LitElement, html, css, customElement, property } from 'lit-element';

export const ACTION_EVENT = 'test-action';

export interface Action {
  type: string
  payload?: any
}


@customElement('preact-wc-test')
export class PeactWCTestElement extends LitElement {

  @property()
  foo = 'foo';

  static get styles() {
    return [css`
     :host {
       color:  var(--preact-wc-test, red);
       display: block;
     }`];
  }
  connectedCallback() {
    super.connectedCallback();
    document.addEventListener('test-action', this.actionHandler as EventListener);
  }
  disconnectedCallback() {
    document.removeEventListener('test-action', this.actionHandler as EventListener);
    super.disconnectedCallback();
  }

  private actionHandler = (e: CustomEvent<Action>) => {
    console.log(e);
    alert(`Action ${e.detail.type}`);
  }

  render() {
    return html`
      <div>${this.foo}</div>
      <slot></slot>
    `;
  }
}
