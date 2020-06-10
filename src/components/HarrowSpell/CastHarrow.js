import React from 'react';
import HarrowLayout from './harrow.module.scss'
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

function GetCardData(cardId){
	let cardData = HarrowDeck.find(card => card.Id === cardId);//Get the Card Data
	return cardData;
}

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
    let drawnCards = [];
    for (let i = 0; i < 9; ){
		let cardPulled = Math.floor(min + Math.random() * (max - min + 1));//Draw the Card
		if(!cardsPulled.includes(cardPulled)){ //Check to see if we already Drew this Card
			cardsPulled.push(cardPulled);//Add the card to the draw stack
			let cardData = GetCardData(cardPulled);// HarrowDeck.find(card => card.Id === cardPulled);//Get the Card Data
			drawnCards.push(cardData);
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
			<div className={HarrowLayout.results}>
				<table style={{"margin-bottom": "1rem", "margin-top": "1rem"}}>
					<caption style={{"text-align": "left"}}>Harrowing Results:</caption>
					<tr>
						<th scope="col" style={{"text-align": "left"}}>Harrow Suit</th>
						<th scope="col" style={{"text-align": "center"}}>Effect</th>
						<th scope="col" style={{"text-align": "center"}}>Luck bonus</th>
					</tr>
					<tr>
						<th scope="row" style={{"text-align": "left"}}>Hammers (Str)</th>
						<td>Attack rolls (ranged and melee)</td>
						<td style={{"text-align": "center"}}>{results.Hammer}</td>
					</tr>
					<tr>
						<th scope="row" style={{"text-align": "left"}}>Keys (Dex)</th>
						<td>Reflex saving throws</td>
						<td style={{"text-align": "center"}}>{results.Key}</td>
					</tr>
					<tr>
						<th scope="row" style={{"text-align": "left"}}>Shields (Con)</th>
						<td>Fortitude saving throws</td>
						<td style={{"text-align": "center"}}>{results.Shield}</td>
					</tr>
					<tr>
						<th scope="row" style={{"text-align": "left"}}>Books (Int)</th>
						<td>Skill checks</td>
						<td style={{"text-align": "center"}}>{results.Book}</td>
					</tr>
					<tr>
						<th scope="row" style={{"text-align": "left"}}>Stars (Wis)</th>
						<td>Will saving throws</td>
						<td style={{"text-align": "center"}}>{results.Star}</td>
					</tr>
					<tr>
						<th scope="row" style={{"text-align": "left"}}>Crowns (Cha)</th>
						<td>Any d20 roll</td>
						<td style={{"text-align": "center"}}>{results.Crown}</td>
					</tr>
				</table>
			</div>
			<div className={HarrowLayout.spreadMatt}>
				<div className={HarrowLayout.Card}>
					<span>{drawnCards[0].Name}</span><br/>
					<img src={drawnCards[0].Image} alt="" width={"150px"}/><br/>
					<span>{drawnCards[0].Alignment} {drawnCards[0].Suit} / {drawnCards[0].Ability}</span>
				</div>
				<div className={HarrowLayout.Card}>
					<span>{drawnCards[1].Name}</span><br/>
					<img src={drawnCards[1].Image} alt="" width={"150px"}/><br/>
					<span>{drawnCards[1].Alignment} {drawnCards[1].Suit} / {drawnCards[1].Ability}</span>
				</div>
				<div className={HarrowLayout.Card}>
					<span>{drawnCards[2].Name}</span><br/>
					<img src={drawnCards[2].Image} alt="" width={"150px"}/><br/>
					<span>{drawnCards[2].Alignment} {drawnCards[2].Suit} / {drawnCards[2].Ability}</span>
				</div>
				<div className={HarrowLayout.Card}>
					<span>{drawnCards[3].Name}</span><br/>
					<img src={drawnCards[3].Image} alt="" width={"150px"}/><br/>
					<span>{drawnCards[3].Alignment} {drawnCards[3].Suit} / {drawnCards[3].Ability}</span>
				</div>
				<div className={HarrowLayout.Card}>
					<span>{drawnCards[4].Name}</span><br/>
					<img src={drawnCards[4].Image} alt="" width={"150px"}/><br/>
					<span>{drawnCards[4].Alignment} {drawnCards[4].Suit} / {drawnCards[4].Ability}</span>
				</div>
				<div className={HarrowLayout.Card}>
					<span>{drawnCards[5].Name}</span><br/>
					<img src={drawnCards[5].Image} alt="" width={"150px"}/><br/>
					<span>{drawnCards[5].Alignment} {drawnCards[5].Suit} / {drawnCards[5].Ability}</span>
				</div>
				<div className={HarrowLayout.Card}>
					<span>{drawnCards[6].Name}</span><br/>
					<img src={drawnCards[6].Image} alt="" width={"150px"}/><br/>
					<span>{drawnCards[6].Alignment} {drawnCards[6].Suit} / {drawnCards[6].Ability}</span>
				</div>
				<div className={HarrowLayout.Card}>
					<span>{drawnCards[7].Name}</span><br/>
					<img src={drawnCards[7].Image} alt="" width={"150px"}/><br/>
					<span>{drawnCards[7].Alignment} {drawnCards[7].Suit} / {drawnCards[7].Ability}</span>
				</div>
				<div className={HarrowLayout.Card}>
					<span>{drawnCards[8].Name}</span><br/>
					<img src={drawnCards[8].Image} alt="" width={"150px"}/><br/>
					<span>{drawnCards[8].Alignment} {drawnCards[8].Suit} / {drawnCards[8].Ability}</span>
				</div>
			</div>
				
		</section>
	);
}
export default CastHarrow;
