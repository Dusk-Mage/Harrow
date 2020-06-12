import React from 'react';
import HarrowLayout from './harrow.module.scss'

import {DrawXCards, Suits, CompairAlignment, GetOpposedAlignment} from '../../utils/deck.js'

const CastHarrow = (props) =>{
	let neutralAlignment = "N";
	let results = {
		Hammer:0,
		Key:0,
		Shield:0,
		Book:0,
		Star:0,
		Crown:0
	}
	let cardCount = 9;
	let drawnCards = DrawXCards(cardCount);
	let luckBonusDefault = 1;
	let luckBonusGood = 2;
	let luckBonusBad = -1;

	//Get the players Opposition alignment
	let playerOpposition = "";
	if (props.character === neutralAlignment){
		playerOpposition = props.opposition;
	}
	else{
		playerOpposition = GetOpposedAlignment(props.character);
	}
	
    for (let i = 0; i < drawnCards.length-1; i++){
		//Default bonus
		let luckBonus = 0;
		let cardAlignment = drawnCards[i].Alignment;
		//console.log("cardAlignment", cardAlignment);
		let playerPossitiveMatch = CompairAlignment(props.character, cardAlignment);
		//console.log("playerPossitiveMatch", playerPossitiveMatch, " props.character ", props.character);
		let playerNegativeMatch = CompairAlignment(playerOpposition, cardAlignment);
		//console.log("playerNegativeMatch", playerNegativeMatch, " playerOpposition ", playerOpposition);
		//Player alignment and Card alignment match

		if(playerPossitiveMatch){
			luckBonus = luckBonusGood;
		}
		//Player alignment and oopsition match
		if(playerNegativeMatch){
			luckBonus = luckBonusBad;
		}
		if(!playerNegativeMatch && !playerPossitiveMatch){
			luckBonus = luckBonusDefault;
		}
		console.log("Card:", i
		," cardA:", cardAlignment
		," +Match:", playerPossitiveMatch, " Player A:", props.character
		," -Match:", playerNegativeMatch, " player O:", playerOpposition
		," luckBonus: ", luckBonus
		," Suit:", drawnCards[i].Suit);
		switch (drawnCards[i].Suit){//Assign the luck bonus to the suit
			default: break;
			case Suits.hammers:
				results.Hammer = results.Hammer + luckBonus;
				break;
			case Suits.keys:
				results.Key = results.Key + luckBonus;
				break;
			case Suits.shields:
				results.Shield = results.Shield + luckBonus;
				break;
			case Suits.books:
				results.Book = results.Book + luckBonus;
				break;
			case Suits.stars:
				results.Star = results.Star + luckBonus;
				break;
			case Suits.crowns:
				results.Crown = results.Crown + luckBonus;
				break;
		}
	}//End For
	console.log("results.Hammer ", results.Hammer
		," results.Key", results.Key
		," results.Shield", results.Shield
		," results.Book", results.Book
		," results.Star", results.Star
		," results.Crown", results.Crown);
	return(
		<section>
			<div className={HarrowLayout.results}>
				<table style={{"marginBottom": "1rem", "marginTop": "1rem"}}>
					<caption style={{"textAlign": "left"}}>Harrowing Results:</caption>
					<tbody>
						<tr>
							<th scope="col" style={{"textAlign": "left"}}>Harrow Suit</th>
							<th scope="col" style={{"textAlign": "center"}}>Effect</th>
							<th scope="col" style={{"textAlign": "center"}}>Luck bonus</th>
						</tr>
						<tr>
							<th scope="row" style={{"textAlign": "left"}}>Hammers (Str)</th>
							<td>Attack rolls (ranged and melee)</td>
							<td style={{"textAlign": "center"}}>{results.Hammer}</td>
						</tr>
						<tr>
							<th scope="row" style={{"textAlign": "left"}}>Keys (Dex)</th>
							<td>Reflex saving throws</td>
							<td style={{"textAlign": "center"}}>{results.Key}</td>
						</tr>
						<tr>
							<th scope="row" style={{"textAlign": "left"}}>Shields (Con)</th>
							<td>Fortitude saving throws</td>
							<td style={{"textAlign": "center"}}>{results.Shield}</td>
						</tr>
						<tr>
							<th scope="row" style={{"textAlign": "left"}}>Books (Int)</th>
							<td>Skill checks</td>
							<td style={{"textAlign": "center"}}>{results.Book}</td>
						</tr>
						<tr>
							<th scope="row" style={{"textAlign": "left"}}>Stars (Wis)</th>
							<td>Will saving throws</td>
							<td style={{"textAlign": "center"}}>{results.Star}</td>
						</tr>
						<tr>
							<th scope="row" style={{"textAlign": "left"}}>Crowns (Cha)</th>
							<td>Any d20 roll</td>
							<td style={{"textAlign": "center"}}>{results.Crown}</td>
						</tr>
					</tbody>
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
