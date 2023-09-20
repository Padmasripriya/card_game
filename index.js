//Function for creating card items
function createDeck() {
  //Declaring card items
  const suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
  const cardRank = ["Ace", "King", "Queen", "Jack", "10", "9", "8", "7", "6", "5", "4", "3", "2"];
  //Declaring an empty array to contain all the cards
  let deck = []; 
  //Adding the suits and card_rank to deck to form a deck of cards
  //Iteration count: 4*13 = 52
  for (const suit of suits) {
    for (const value of cardRank) {
      deck.push(value +" of " + suit);
    }
  }
  return deck;
}

//Function for performing card shuffling - performing swapping
function shuffleDeck(deck) {
  for(let i=deck.length-1; i>0; i--) {
    //Math.floor() will round the number down to the nearest integer
    //Math.random() to generate a random number bewteen 0-51
    let j = Math.floor(Math.random() * (i+1)); 
    //console.log(j); //checking to see the random number
    //perform swapping
    let temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp; 
    }
}

//Function for dealing hands to players
const numPlayers = 2;
const cardsPerHand = 5;
function dealHands(deck, numPlayers, cardsPerHand) {
  const hands = [];
  for (let i = 0; i < numPlayers; i++) {
    const hand = [];
    for (let j = 0; j < cardsPerHand; j++) {
      hand.push(deck.pop());
    }
    hands.push(hand);
  }
  return hands;
}

//Create and shuffle the deck before calling the deal function
const deck = createDeck();
shuffleDeck(deck);

//Calling deal function
const hands = dealHands(deck, numPlayers, cardsPerHand);

//Display the hands
for (let i = 0; i < numPlayers; i++) {
  console.log("Player" + (i+1) + ": " + hands[i].join(", "));
}
