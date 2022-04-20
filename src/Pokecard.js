import React, { Component } from 'react';
import "./pokecard.css";
const pokeID="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";
//let idcorrector=(number)=>(number<=999?`00${number}`.slice(3):number);
 function idcorrector(number){
     if(number<999){
         number=`00${number}`.slice(-3);
        } 
     return number;
 }  

 class Pokecard extends Component {
	render() {
		let imgsrc=pokeID+idcorrector(this.props.id)+".png";
		return (
			<div className="Pokecard">
				<h1 className="Pokecard-title">{this.props.name}</h1>
				<div className="Pokecard-image">
					<img src={imgsrc} alt={this.props.name} />
				</div>
				<div className="Pokecard-data">Type: {this.props.type}</div>
				<div className="Pokecard-data">EXP: {this.props.exp}</div>
			</div>
		);
	}
}
export default Pokecard;