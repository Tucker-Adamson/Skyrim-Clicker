import React, { Component } from 'react';
import dragon from '../../images/dragon.png';

var Gold = 0;
var Total = 0;

var Bones = 0;
var BonesTotal = 0;

var Scales = 0;
var ScalesTotal = 0;

var Gems = 0;
var GemsTotal = 0;

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

                <h2 className="Bone">Bones:</h2>
                <h2 className="Bone__text"> { this.state.Bones }</h2>

                <h2 className="Scale">Scales:</h2>
                <h2 className="Scale__text"> { this.state.Scales }</h2>

                <h2 className="Gem">Gems:</h2>
                <h2 className="Gem__text"> { this.state.Gems }</h2>

                <img id="dragon" className="dragon" onClick={this.click} src={dragon} />

                <p> </p>

                <a className="link" href="https://www.youtube.com/channel/UCBCLmakekA6vzIZ5XPlD4mQ">My Youtube Channel</a>

            </div>
        )
    }
    
    click() {


        //random numbers
        var element = document.getElementById("dragon");
        var randomNumber = Math.floor(Math.random() * 180) + 223;
        var boneNumber = Math.floor(Math.random() * 3)
        var scaleNumber = Math.floor(Math.random() * 3)
        var gemNumber = Math.floor(Math.random() * 3)


        //applying the random
        Total = Total + (randomNumber);
        Bones = Bones + (boneNumber);
        Scales = Scales + (scaleNumber);
        Gems = Gems + (gemNumber);


        //changing text
        //gold
        this.setState({
            Score: Total
        })


        //bones
        this.setState({
            Bones: BonesTotal
        })


        //scales
        this.setState({
            Scales: ScalesTotal
        })


        //gems
        this.setState({
            Gems: GemsTotal
        })


        console.log(Total)
        console.log(BonesTotal)
        console.log(ScalesTotal)
        console.log(GemsTotal)
        console.log("You Fus Ro Da'd a dragon" )
    }
    }

//curency values
//1 bone = 500 gold
//1 scale = 250 gold
//1 gem = 100 gold

export default Generate;