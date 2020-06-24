import React from 'react';
import CastHarrow from './CastHarrow';
import 'fontsource-roboto';

class HarrowSelector extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			characterAlignment: 'LG',
			neutralOpposition: 'LG',
			isSubmitted: false,
			drawSize: props.Draw
		};

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}
	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });  // Getting access to entered values
	}

	onSubmit(e) {
		e.preventDefault();  // Here we prevent the default browser behavior
		this.setState({isSubmitted: true}); // Let's set the new 'submitted state to TRUE
	}

	render(){
		return(
			<div>
				<form onSubmit={this.onSubmit}>
					<div>
						<label>
							Character Alignment:
							<select name="characterAlignment" value={this.state.characterAlignment} onChange={this.onChange}>
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
							<select name="neutralOpposition" value={this.state.neutralOpposition} onChange={this.onChange}>
								<option value="LG">Lawful Good</option>
								<option value="CG">Chaotic Good</option>
								<option value="LE">Lawful Evil</option>
								<option value="CE">Chaotic Evil</option>
							</select>
						</label>
					</div>
					<div><input type="submit" value="Submit" /></div>
				</form>
				{this.state.isSubmitted && 
					<CastHarrow 
					character={this.state.characterAlignment} 
					opposition={this.state.neutralOpposition} 
					cardsToDraw={this.state.drawSize}/>
				}
			</div>
		);
	}
}
export default HarrowSelector;