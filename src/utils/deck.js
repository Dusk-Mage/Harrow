import HarrowDeck from '../data/harrowDeck.json'
import OppositionAlignment from '../data/oppostition.json'

export const Suits = {
	hammers:"Hammers",
	keys:"Keys",
	shields:"Shields",
	books:"Books",
	stars:"Stars",
	crowns:"Crowns",
}
export const GetCardData = function getCardData(cardId){
	let cardData = HarrowDeck.find(card => card.Id === cardId);//Get the Card Data
	return cardData;
}

export const DrawXCards = function drawXCards(numberOfCards){
	let drawnCards = [];
	let cardsPulled = [];
	const min = 0;
    const max = 53;
	for (let i = 0; i < numberOfCards; ){
		let cardPulled = Math.floor(min + Math.random() * (max - min + 1));//Draw the Card
		if(!cardsPulled.includes(cardPulled)){ //Check to see if we already Drew this Card
			cardsPulled.push(cardPulled);//Add the card to the draw stack
			let cardData = GetCardData(cardPulled);// HarrowDeck.find(card => card.Id === cardPulled);//Get the Card Data
			drawnCards.push(cardData);
			i++;
		}
	}
	return drawnCards;
}

export const CompairAlignment = function compairAlignment(alignmentOne,alignmentTwo){
	if(alignmentOne === alignmentTwo){
		return true;
	} else{
		return false;
	}
}

export const GetOpposedAlignment = function cetOpposedAlignment(alignmentToTest){
	return OppositionAlignment.find(alignment => alignment.Id === alignmentToTest)["Value"];
}