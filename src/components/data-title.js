import { LitElement, html, css } from 'lit';
import styles from '../styles/DataTitleStyles.js'

export class DataTitle extends LitElement {
    static styles = [ styles ];

    render() {
        return html`
        <div class="container">
            <h1><span>Lit Element</span> API</h1>
        </div>
        `;
    }
}
customElements.define('data-title', DataTitle);
