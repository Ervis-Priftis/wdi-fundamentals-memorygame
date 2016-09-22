var cards = ['queen', 'king', 'queen', 'king'];

var cardsInPlay = [];


var board = document.getElementById('game-board');

function createBoard() {

  for (var i=0; i<cards.length; i++) {

    var cardElement = document.createElement('div');

    cardElement.className = 'card';



    cardElement.setAttribute('data-card', cards[i]);

    cardElement.addEventListener('click', isTwoCards);


    board.appendChild(cardElement);
    board.appendChild(cardElement);
  }

}



function isTwoCards() {



  cardsInPlay.push(this.getAttribute('data-card'));

	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src='https://pixabay.com/get/e13db50e21f01c22d2524518a33219c8b66ae3d11eb5154893f4c679/clubs-884194_1280.png'>"; //King
	} else {
		this.innerHTML = "<img src='https://pixabay.com/get/e13db50e21fc1c22d2524518a33219c8b66ae3d11eb5154893f5c370/clubs-884198_1280.png'>"; //Queen
	}

  if (cardsInPlay.length === 2) {

    isMatch(cardsInPlay);

    cardsInPlay = [];
  }
}

function isMatch(cards) {

  if (cards[0] === cards[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");

  }
}

createBoard();
