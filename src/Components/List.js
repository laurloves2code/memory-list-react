import React, { Component } from 'react';
import data from './numberarray.json';

class List extends Component {
    
    constructor () {
        super();

        this.state = {            
            numbersList1: '',
            numbersList2: '',
            numbersList3: '',
            numbersList4: ''
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
        let numDisplayArr = '';

        for (let i = 1; i < 5; i++) {    
            indexNum = Math.floor(Math.random() * n);
            if (numDisplayArr === '') {                 
                numDisplayArr = [numberShuffle[indexNum].number];            
            } else {               
                numDisplayArr = [...numDisplayArr, numberShuffle[indexNum].number]
            };

        console.log(numDisplayArr);
        this.setState({numbersList1: numDisplayArr[0]});
        this.setState({numbersList2: numDisplayArr[1]});
        this.setState({numbersList3: numDisplayArr[2]});
        this.setState({numbersList4: numDisplayArr[3]});     
            
        }                   
        
    }

    render () {

        

        return (
            <div>
                <h1>Memorize the Sequence</h1>
                <div className="numgrid-container">

                    <div className="grid-item" >{this.state.numbersList1}</div>
                    <div className="grid-item" >{this.state.numbersList2}</div>
                    <div className="grid-item" >{this.state.numbersList3}</div>
                    <div className="grid-item" >{this.state.numbersList4}</div>

                </div>     
            </div>
        );
    }
}

export default List;