import React from 'react';
//TODO: Move styling up to the page level and fix the warning I am now generating.
import {DrawXCards, Suits, CompairAlignment, GetOpposedAlignment} from '../../utils/deck.js';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const CastHarrow = (props) =>{
	let neutralAlignment = "N";
	let results = {
		Hammer:[], HammerPen:0,
		Key:[], KeyPen:0,
		Shield:[], ShieldPen:0,
		Book:[], BookPen:0,
		Star:[], StarPen:0,
		Crown:[], CrownPen:0
	}
	let cardCount = props.cardsToDraw;
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
	
	const useStyles = makeStyles((theme) => ({
		root: {
		  flexGrow: 1,
		},
		paper: {
		  padding: theme.spacing(2),
		  textAlign: 'center',
		  color: theme.palette.text.secondary,
		},
		table: {
			minWidth: 650,
		  },
	  }));
	  const classes = useStyles();


    for (let i = 0; i < drawnCards.length; i++){
		//Default bonus
		let luckBonus = 0;
		let cardAlignment = drawnCards[i].Alignment;
		let playerPossitiveMatch = CompairAlignment(props.character, cardAlignment);
		let playerNegativeMatch = CompairAlignment(playerOpposition, cardAlignment);

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
		switch (drawnCards[i].Suit){//Assign the luck bonus to the suit
			default: break;
			case Suits.hammers:
				if(luckBonus < 0){
					results.HammerPen = results.HammerPen + luckBonus;
				}else{
					results.Hammer.push(<span>{luckBonus}</span>);
				}
				break;
			case Suits.keys:
				if(luckBonus < 0){
					results.KeyPen = results.KeyPen + luckBonus;
				}else{
					results.Key.push(<span>{luckBonus}</span>);
				}
				break;
			case Suits.shields:
				if(luckBonus < 0){
					results.ShieldPen = results.ShieldPen + luckBonus;
				}else{
					results.Shield.push(<span>{luckBonus}</span>);
				}
				break;
			case Suits.books:
				if(luckBonus < 0){
					results.BookPen = results.BookPen + luckBonus;
				}else{
					results.Book.push(<span>{luckBonus}</span>);
				}
				break;
			case Suits.stars:
				if(luckBonus < 0){
					results.StarPen = results.StarPen + luckBonus;
				}else{
					results.Star.push(<span>{luckBonus}</span>);
				}
				break;
			case Suits.crowns:
				if(luckBonus < 0){
					results.CrownPen = results.CrownPen + luckBonus;
				}else{
					results.Crown.push(<span>{luckBonus}</span>);
				}
				break;
		}
	}//End For
	
	const items = [];
	for(let i=0;i<props.cardsToDraw;i++){
		let widthOfCard = 4;
		if(props.cardsToDraw === 4){
			widthOfCard=6;
		}
		items.push(
			<Grid item xs={widthOfCard} key={i}>
				<Paper className={classes.paper}>
					<span>{drawnCards[i].Name}</span><br/>
					<img src={drawnCards[i].Image} alt="" width={"150px"}/><br/>
					<span>{drawnCards[i].Alignment} {drawnCards[i].Suit} / {drawnCards[i].Ability}</span>
				</Paper>
			</Grid>
		)
	}

	return(
		<div className={classes.root}>
			<Grid container spacing={1}>
				<Grid item xs={12} sm={12}>
				<TableContainer component={Paper}>
				<Table className={classes.table} size="small" aria-label="a dense table">
					<TableHead>
					<TableRow>
						<TableCell>Harrow Suit</TableCell>
						<TableCell align="left">Effect</TableCell>
						<TableCell align="left">Penalty</TableCell>
						<TableCell align="left">Luck bonus</TableCell>
					</TableRow>
					</TableHead>
					<TableBody>
						<TableRow key={"Hammers (Str)"}>
							<TableCell component="th" scope="row">Hammers (Str)</TableCell>
							<TableCell align="left">Attack rolls (ranged and melee)</TableCell>
							<TableCell align="left">{results.HammerPen}</TableCell>
							<TableCell align="left">{results.Hammer.map((result,i) => [
								i > 0 && ", ",
								<span key={i}>{result}</span>
							])}
							</TableCell>
						</TableRow>
						<TableRow key={"Keys (Dex)"}>
							<TableCell component="th" scope="row">Keys (Dex)</TableCell>
							<TableCell align="left">Reflex saving throws</TableCell>
							<TableCell align="left">{results.KeyPen}</TableCell>
							<TableCell align="left">{results.Key.map((result,i) => [
								i > 0 && ", ",
								<span key={i}>{result}</span>
							])}
							</TableCell>
						</TableRow>
						<TableRow key={"Shields (Con)"}>
							<TableCell component="th" scope="row">Shields (Con)</TableCell>
							<TableCell align="left">Fortitude saving throws</TableCell>
							<TableCell align="left">{results.ShieldPen}</TableCell>
							<TableCell align="left">{results.Shield.map((result,i) => [
								i > 0 && ", ",
								<span key={i}>{result}</span>
							])}
							</TableCell>
						</TableRow>
						<TableRow key={"Books (Int)"}>
							<TableCell component="th" scope="row">Books (Int)</TableCell>
							<TableCell align="left">Skill checks</TableCell>
							<TableCell align="left">{results.BookPen}</TableCell>
							<TableCell align="left">{results.Book.map((result,i) => [
								i > 0 && ", ",
								<span key={i}>{result}</span>
							])}
							</TableCell>
						</TableRow>
						<TableRow key={"Stars (Wis)"}>
							<TableCell component="th" scope="row">Stars (Wis)</TableCell>
							<TableCell align="left">Will saving throws</TableCell>
							<TableCell align="left">{results.StarPen}</TableCell>
							<TableCell align="left">{results.Star.map((result,i) => [
								i > 0 && ", ",
								<span key={i}>{result}</span>
							])}
							</TableCell>
						</TableRow>
						<TableRow key={"Crowns (Cha)"}>
							<TableCell component="th" scope="row">Crowns (Cha)</TableCell>
							<TableCell align="left">Any d20 roll</TableCell>
							<TableCell align="left">{results.CrownPen}</TableCell>
							<TableCell align="left">{results.Crown.map((result,i) => [
								i > 0 && ", ",
								<span key={i}>{result}</span>
							])}
							</TableCell>
						</TableRow>
					</TableBody>
				</Table>
				</TableContainer>
				</Grid>
				<Grid item xs={12} sm={12}>
					<Grid container spacing={1}>
					{items}
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
}
export default CastHarrow;
