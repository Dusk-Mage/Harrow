/* eslint-disable react/no-direct-mutation-state */
import React, { Component } from 'react';
//import HarrowLayout from './harrowing.module.css'
import HarrowDeck from '../data/harrowDeck.json'
import OppositionAlignment from '../data/oppostition.json'

class Harrow extends Component {
  constructor(props) {
    super(props);
    this.state = {character: ''};
    this.state = {opposition: ''};
    this.state = {cardsPulled: []};
    
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
    //const cardsPulled = [];
    const min = 0;
    const max = 53;
    
    var Hammer = 0, Key = 0, Shield = 0, Book = 0, Star = 0, Crown = 0;
    
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
          let val = Hammer + luckBonus;
          Hammer = val;
        }
        if(cardData.Suit === "Keys"){
          Key = Key + luckBonus;
        }
        if(cardData.Suit === "Shields"){
          Shield = Shield + luckBonus;
        }
        if(cardData.Suit === "Books"){
          Book = Book + luckBonus;
        }
        if(cardData.Suit === "Stars"){
          Star = Star + luckBonus;
        }
        if(cardData.Suit === "Crowns"){
          Crown = Crown + luckBonus;
        }
        i++;
      }
    }
    console.log(this.state.cardsPulled);
    console.log("Hammer",Hammer, "Key",Key, "Shield",Shield, "Book",Book, "Star",Star, "Crown",Crown);
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
        <section >
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
            <p>[Harrowing: {this.state.cardsPulled}]</p>
        </section>
      </div>
    );
  }
}

export default Harrow;
 