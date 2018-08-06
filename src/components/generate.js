import React, { Component } from 'react';
import dragon from '../../images/dragon.png';

var Gold = 0;
var Total = 0;
class Generate extends Component {
    constructor() {
        super();

        this.state = {
            Score: 0
        };
        this.click = this.click.bind(this);

    }

    render() {
        return (
            <div>
                <h2 className="score">Gold:</h2>
                <h2 className="score__text"> { this.state.Score }</h2>
                <img id="dragon" className="dragon" onClick={this.click} src={dragon} />
            </div>
        )
    }
    
    click() {
        var element = document.getElementById("dragon");
        var randomNumber = Math.floor(Math.random() * 200) + 202;
        Total = Total + (randomNumber);
        this.setState({
            Score: Total
        })
        console.log(Total)
    }

    }

export default Generate;