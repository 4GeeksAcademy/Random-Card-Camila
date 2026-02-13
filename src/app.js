import "bootstrap";
import "./style.css";


function generateCard(){
  let cardValue = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  let suit = ["Diamonds", "Spades", "Hearts", "Clubs"];
  let randomCardNumber = Math.floor(Math.random() * cardValue.length);
  let randomSuitNumber = Math.floor(Math.random() * suit.length);
  let result = suit[randomSuitNumber];

  const cardContentEl = document.getElementById('cardCont');
  const cardEl = document.getElementById('theCard');

  cardContentEl.textContent = cardValue[randomCardNumber];
  cardEl.className = `card ${getSuiteClass(result)}`;
}

window.onload = function() {
  generateCard()
  
  document.getElementById("newCardBtn")
  document.addEventListener("click", generateCard);
};

function getSuiteClass(suit) {
  switch (suit) {
    case "Diamonds": return "suit-diamonds";
    case "Spades": return "suit-spades";
    case "Hearts": return "suit-hearts";
    case "Clubs": return "suit-clubs";
  }
}