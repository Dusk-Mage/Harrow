import React from 'react';
//import HarrowLayout from './harrowing.module.css'
import HarrowDeck from '../../data/harrowDeck.json'
import OppositionAlignment from '../../data/oppostition.json'

  /*readTheHarrow(){
    
    }
    //console.log(this.state.cardsPulled);
    //console.log("Hammer",this.Hammer, "Key",this.Key, "Shield",this.Shield, "Book",this.Book, "Star",this.Star, "Crown",this.Crown);
    //this.ShowResults = true;
    this.setState({childVisible: !this.state.childVisible});
    //this.setState({ state: this.state });
  }*/

const CastHarrow = (props) =>{
	let suits = {
		hammers:"Hammers",
		keys:"Keys",
		shields:"Shields",
		books:"Books",
		stars:"Stars",
		crowns:"Crown",
	}
	let results = {
		Hammer:0,
		Key:0,
		Shield:0,
		Book:0,
		Star:0,
		Crown:0
	}
	let cardsPulled = [];
	const min = 0;
    const max = 53;
    
    for (let i = 0; i < 9; ){
		let cardPulled = Math.floor(min + Math.random() * (max - min + 1));//Draw the Card
		if(!cardsPulled.includes(cardPulled)){ //Check to see if we already Drew this Card
			cardsPulled.push("Card " + (i + 1) + ": " + cardPulled);//Add the card to the draw stack
			let cardData = HarrowDeck.find(card => card.Id === cardPulled);//Get the Card Data

			let luckBonus = 1;
			if(props.character === cardData.Alignment){
				luckBonus = 2;
			}else{
				let cOp = OppositionAlignment.find(alignment => alignment.Id === cardData.Alignment);//Get the cards opposition alignment
				if(props.character === props.opposition || cOp === props.character){ luckBonus = -1;}//Test against the Character
			}
			//Assign the luck bonus to the suit
			if(cardData.Suit === suits.hammers){
				results.Hammer = results.Hammer + luckBonus;
			}
			if(cardData.Suit === suits.keys){
				results.Key = results.Key + luckBonus;
			}
			if(cardData.Suit === suits.shields){
				results.Shield = results.Shield + luckBonus;
			}
			if(cardData.Suit === suits.books){
				results.Book = results.Book + luckBonus;
			}
			if(cardData.Suit === suits.stars){
				results.Star = results.Star + luckBonus;
			}
			if(cardData.Suit === suits.crowns){
				results.Crown = results.Crown + luckBonus;
			}
			i++;//We have a new non duplicate Card Increment the pull counter
		}//End If
	}//End For
	  
	return(
		<section>
			<div>
			<div>Card One</div>
			<div>Card Two</div>
			<div>Card Three</div>
			<div>Card Four</div>
			<div>Card Five</div>
			<div>Card Six</div>
			<div>Card Seven</div>
			<div>Card Eight</div>
			<div>Card Nine</div>
			</div>
			<p>[Harrowing:</p>
			<p>Hammer (Str)	Attack rolls (ranged and melee): {results.Hammer}</p>
			<p>Key (Dex) Reflex saving throws: {results.Key}</p>
			<p>Shield (Con)	Fortitude saving throws: {results.Shield}</p>
			<p>Book (Int) Skill checks: {results.Book}</p>
			<p>Star (Wis) Will saving throws: {results.Star}</p>
			<p>Crown (Cha) Any d20 roll: {results.Crown}</p>
		</section>
	);
}
export default CastHarrow;
