import React, { Component } from 'react';
import dragon from '../../images/dragon.png';

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
                <img id="dragon" className="dragon" onClick={this.click} src={dragon} />
            </div>
        )
    }
    
    click() {
        var Gold = 0
        var element = document.getElementById("dragon")
        var randomNumber = Math.floor(Math.random() * 200) + 202;
        Gold = Gold + (randomNumber)
        this.setState({
            score: ++this.state.score
        })
        console.log(Gold)
    }

}


export default Generate;