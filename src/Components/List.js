import React, { Component } from 'react';
import data from './numberarray.json';

class List extends Component {
    
    constructor () {
        super();

        this.state = {            
            numbersList: ''
        };

        this.shuffleNumbers=this.shuffleNumbers.bind(this);

    }
        
    componentDidMount() {        
        this.shuffleNumbers();
    }
    
    shuffleNumbers() {
        const numberShuffle = data.numbergrid;
        let n = numberShuffle.length;
        let indexNum = Math.floor(Math.random() * n);     
        let numDisplayArr = [];

        for (let i = 1; i < 5; i++) {    
            indexNum = Math.floor(Math.random() * n);
            if (numDisplayArr === '') {                 
                numDisplayArr = [numberShuffle[indexNum].number];            
            } else {               
                numDisplayArr = [...numDisplayArr, numberShuffle[indexNum].number]
            };

        console.log(numDisplayArr);
        this.setState({numbersList: numDisplayArr});     
            
        }                   
        
    }

    //map array numDisplayArr to render sequence


    render () {
        return (
            <div>
                <h1>Memorize the Sequence</h1>
                <div className="numgrid-container">
                    <div className="grid-item"></div>                                        
                </div>     
            </div>
        );
    }
}

export default List;