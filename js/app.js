import {Game} from "./game.js"
import "./style.scss";

const button = document.querySelector('button');
button.addEventListener('click', function () {
   document.querySelector('#newGame').classList.add('invisible')
   const furryGame = new Game();
});
