import {LitElement, html, css} from "lit";

import './components/get-data';
import './components/data-title'
import styles from './styles/MyAppStyles'

export class MyApp extends LitElement {
    static get properties() {
        return {
            apiData: {type: Array},
        };
    }

    static styles = [ styles ];

    constructor() {
        super();

        this.apiData = [];

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
        this.apiData = characters;
    }

    render() {
        return html`
        <div class="view">
            <get-data
                _url="https://rickandmortyapi.com/api/character"
                _method="GET"
            ></get-data>
            <data-title></data-title>
            <div class="container">
                ${this.getCharacters()}
            </div>
        </div>
        `;
    }

    getCharacters() {
        return html`
            ${this.apiData.map(
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
