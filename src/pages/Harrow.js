/* eslint-disable react/no-direct-mutation-state */
import React, { Component } from 'react';
//import HarrowLayout from './harrowing.module.css'
import HarrowDeck from '../data/harrowDeck.json'
import OppositionAlignment from '../data/oppostition.json'
//import Suits from '../data/suits.json'


class Child extends Component{
  render() {
    return (<div>I'm the child</div>);
  }
}

class Harrow extends Component {
  constructor(props) {
    super(props);
    this.Hammer = 0;
    this.Key = 0;
    this.Shield = 0;
    this.Book = 0;
    this.Star = 0;
    this.Crown = 0;
    this.state = {character: ''};
    this.state = {opposition: ''};
    this.state = {cardsPulled: []};
    this.state = {
      childVisible: false
    }
    
    this.handleCharacterChange = this.handleCharacterChange.bind(this);
    this.handleOppositionChange = this.handleOppositionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCharacterChange(event) {
    this.setState({character: event.target.value});
  }

  handleOppositionChange(event) {
    this.setState({opposition: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.character);
    this.readTheHarrow();
    event.preventDefault();
  }
  
  readTheHarrow(){
    const min = 0;
    const max = 53;
    
    for (let i = 0; i < 9; ){
      let cardPulled = Math.floor(min + Math.random() * (max - min + 1));//Draw the Card
      if(!this.state.cardsPulled.includes(cardPulled)){ //Check to see if we already Drew this Card
        this.state.cardsPulled.push("Card " + (i + 1) + ": " + cardPulled);//Add the card to the draw stack
        let cardData = HarrowDeck.find(card => card.Id === cardPulled);//Get the Card Data

        let luckBonus = 1;
        if(this.state.character === cardData.Alignment){
          luckBonus = 2;
        }else{
          let cOp = OppositionAlignment.find(alignment => alignment.Id === cardData.Alignment);//Get the cards opposition alignment
          if(this.state.character === this.state.opposition || cOp === this.state.character){ luckBonus = -1;}//Test against the Character
        }
        //Assign the luck bonus to the suit
        if(cardData.Suit === "Hammers"){//Todo: put these strings into variables
          this.Hammer = this.Hammer + luckBonus;
        }
        if(cardData.Suit === "Keys"){
          this.Key = this.Key + luckBonus;
        }
        if(cardData.Suit === "Shields"){
          this.Shield = this.Shield + luckBonus;
        }
        if(cardData.Suit === "Books"){
          this.Book = this.Book + luckBonus;
        }
        if(cardData.Suit === "Stars"){
          this.Star = this.Star + luckBonus;
        }
        if(cardData.Suit === "Crowns"){
          this.Crown = this.Crown + luckBonus;
        }
        i++;
      }
    }
    //console.log(this.state.cardsPulled);
    //console.log("Hammer",this.Hammer, "Key",this.Key, "Shield",this.Shield, "Book",this.Book, "Star",this.Star, "Crown",this.Crown);
    //this.ShowResults = true;
    this.setState({childVisible: !this.state.childVisible});
    //this.setState({ state: this.state });
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              Character Alignment:
              <select value={this.state.character} onChange={this.handleCharacterChange}>
                <option value="LG">Lawful Good</option>
                <option value="NG">Neutral Good</option>
                <option value="CG">Chaotic Good</option>
                <option value="LN">Lawful Neutral</option>
                <option value="N">Neutral</option>
                <option value="CN">Chaotic Neutral</option>
                <option value="LE">Lawful Evil</option>
                <option value="NE">Neutral Evil</option>
                <option value="CE">Chaotic Evil</option>
              </select>
            </label>
          </div>
          <div>
            <label>
              Neutral Opposition:
              <select value={this.state.opposition} onChange={this.handleOppositionChange}>
                <option value="LG">Lawful Good</option>
                <option value="CG">Chaotic Good</option>
                <option value="LE">Lawful Evil</option>
                <option value="CE">Chaotic Evil</option>
              </select>
            </label>
          </div>
          <div><input type="submit" value="Submit" /></div>
        </form>
        {
          this.state.childVisible
            ? <Child />
            : null
        }
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
            <p>Hammer (Str)	Attack rolls (ranged and melee): {this.Hammer}</p>
            <p>Key (Dex)	Reflex saving throws: {this.Key}</p>
            <p>Shield (Con)	Fortitude saving throws: {this.Shield}</p>
            <p>Book (Int)	Skill checks: {this.Book}</p>
            <p>Star (Wis)	Will saving throws: {this.Star}</p>
            <p>Crown (Cha)	Any d20 roll: {this.Crown}</p>
        </section>
      </div>
    );
  }
}

export default Harrow;
 