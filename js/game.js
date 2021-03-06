import {Furry} from "./furry.js"
import {Coin} from "./coin.js"

export class Game {
    constructor(mode) {
        this.board = document.querySelectorAll('#board div');
        this.furry = new Furry();
        this.coin = new Coin();
        this.score = 0;
        this.showFurry();
        this.startGame();
        this.intervalTime = 250;
        this.level = (mode == "easy") ? 1 : 0.9;
    }
    showFurry() {
        console.log(this.interval);
        
        this.hideVisibleFurry();
        this.board[this.furry.index(this.furry.x, this.furry.y)].classList.add('furry');
    }
    hideVisibleFurry() {
        if (document.querySelector('.furry')) {
            document.querySelector('.furry').classList.remove('furry');
        }
    }
    showCoin() {
        this.board[this.furry.index(this.coin.x, this.coin.y)].classList.add('coin');
    }
    moveFurry() {
        if (this.furry.direction == 'right') {
            this.furry.x++;
        } else if (this.furry.direction == 'left') {
            this.furry.x--;
        } else if (this.furry.direction == 'up') {
            this.furry.y--;
        } else if (this.furry.direction == 'down') {
            this.furry.y++;
        }
        this.startGame();
        this.gameOver();
        this.showFurry();
        this.checkCoinCollision();
    }
    turnFurry(event) {
        switch (event.which) {
            case 37:
                this.furry.direction = 'left';
                break;
            case 38:
                this.furry.direction = 'up';
                break;
            case 39:
                this.furry.direction = 'right';
                break;
            case 40:
                this.furry.direction = 'down'
                break;
        }
    }
    checkCoinCollision() {
        if (this.furry.x == this.coin.x && this.furry.y == this.coin.y) {
            document.querySelector('.coin').classList.remove('coin');
            this.score++;
            this.intervalTime *= this.level;
            document.querySelector('#score strong').innerText = this.score;
            document.querySelector('#coinAudio').play();

            this.coin = new Coin();
            this.showCoin();
        }
    }
    startGame() {
        this.showCoin();
        let timeoutLoop = () => {
            setTimeout(this.moveFurry(), this.intervalTime);
        }
        this.idSetTimeout = setTimeout(timeoutLoop, this.intervalTime);
        document.addEventListener('keydown', event => this.turnFurry(event));
    }
    gameOver() {
        if (this.furry.x < 0 || this.furry.x > 9 || this.furry.y < 0 || this.furry.y > 9) {
            this.hideVisibleFurry();
            clearTimeout(this.idSetTimeout);

            document.querySelector('#over').classList.toggle('invisible');
            document.querySelector('#over span').innerText = this.score;
            document.querySelector('#overAudio').play();
        }
    }
}
