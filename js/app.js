import {Game} from "./game.js"
import "./style.scss";

const easyGame = document.querySelector('#easyGame');
const hardGame = document.querySelector('#hardGame');

easyGame.addEventListener('click', function () {
   document.querySelector('#newGame').classList.add('invisible')
   const furryGame = new Game("easy");
});

hardGame.addEventListener('click', function () {
    document.querySelector('#newGame').classList.add('invisible')
    const furryGame = new Game("hard");
 });