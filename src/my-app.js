import {LitElement, html, css} from "lit";

import "./components/get-data";

export class MyApp extends LitElement {
    static get properties() {
        return {
            wiki: {type: Array},
        };
    }

    constructor() {
        super();

        this.wiki = [];

        this.addEventListener("ApiData", (e) => {
            this._formatData(e.detail.data);
        });
    }

    _formatData(data) {
        let characters = [];

        data["results"].forEach((character) => {
            characters.push({
                img: character.image,
                name: character.name,
                species: character.species,
                status: character.status,
            });
        });

        this.wiki = characters;
    }

    render() {
        return html`
            <get-data
                _url="https://rickandmortyapi.com/api/character"
                _method="GET"
            ></get-data>
            ${this.getCharacters()}
        `;
    }

    getCharacters() {
        return html`
            ${this.wiki.map(
                (character) => html`
                    <div class="card">
                        <div class="card-content">
                            <h2>${character.name}</h2>
                            <img src="${character.img}" />
                            <p>${character.species | character.status}</p>
                        </div>
                    </div>
                `
            )}
        `;
    }
}
customElements.define("my-app", MyApp);
