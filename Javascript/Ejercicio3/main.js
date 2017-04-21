var card= "2c";
var valueCard= card[0];
var suitCard= card[1];
var cardPrevNumb= valueCard -1;
var CardPrev= cardPrevNumb + suitCard;
console.log(CardPrev);

var cardPostNum= +valueCard +1;
var CardPost= cardPostNum +suitCard;
console.log(CardPost);
