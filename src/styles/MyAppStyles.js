import { css } from 'lit';

export default css`
:host {
    font-family: 'Roboto', sans-serif;
}
get-data {
    display: none;
}
.view {
    width: 800px;
    margin: 0 auto;
}
.container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}
.card {
    background-color: #fff;
    border-radius: 5px;
    text-align: center;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12)
}
`