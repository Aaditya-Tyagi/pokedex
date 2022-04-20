import React, { Component } from 'react'
import "./pokedex.css";
import Pokecard from './Pokecard';

class Pokedex extends Component{
    
    render(){
        let title;
        if(this.props.isWinner){
            title =<h1 className='Pokedex-winner'>Winning Hand</h1>

        }else{
            title=<h1 className='Pokedex-loser'>Losing Hand</h1>
        }
        return(
            <div className='pokedex'> 
            {title}
            <h4>Total Experience:{this.props.exp}</h4>
            <div id="pokecards">
                {this.props.pokemon.map((p) => [
                 <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience}/> 
                ])}
            </div>
            </div>
        );
    }
    
}
export default Pokedex;