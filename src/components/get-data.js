import {LitElement, html, css} from "lit";

export class GetData extends LitElement {
    static get properties() {
        return {
            _url: { type: String },
            _method: { type: String }
        };
    }

    firstUpdated() {
        this._getData()
    }

    _sendData(data) {
        this.dispatchEvent( new CustomEvent('ApiData', {
            detail: { data },
            bubbles: true,
            composed: true
        }))
    }

    _getData() {
        fetch(this._url, { method: this._method })
            .then((response) => {
                if (response.ok) return response.json()
                return Promise.reject(response)
            })
            .then((data) => { this._sendData(data) })
            .catch(error => { console.error('Houston we have a problem ->', error) })
    }
}
customElements.define("get-data", GetData);
