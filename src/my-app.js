import {LitElement, html, css} from "lit";

import "./components/get-data";

export class MyApp extends LitElement {
    static get properties() {
        return {
            wiki: {type: Array},
        };
    }

    static styles = [css`
        :host {
            display:block;
        }
        get-data {
            display: none;
        }
        .container {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            gap: 20px;
        }
        .card {
            background-color: #fff;
            border-radius: 5px;
            text-align: center;
            box-shadow: 0 1px 3px rgba(0,0,0,0.12)
        }

    `];

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

        console.log(characters)
        this.wiki = characters;
    }

    render() {
        return html`
            <get-data
                _url="https://rickandmortyapi.com/api/character"
                _method="GET"
            ></get-data>
            <div class="container">
                ${this.getCharacters()}
            </div>
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
                            <p>${character.species} | ${character.status}</p>
                        </div>
                    </div>
                `
            )}
        `;
    }
}
customElements.define("my-app", MyApp);
