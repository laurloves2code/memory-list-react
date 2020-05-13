import React, { Component } from 'react';
import data from './numberarray.json';

class List extends Component {
    
    state = {
        block1: '',
        block2: '',
        block3: '',
        block4: ''
    };
    
    componentDidMount() {        
        this.shuffleNumbers();
    }
    
    shuffleNumbers = () => {
        const numberShuffle = data.numbergrid;
        let i = numberShuffle.length;
        let indexNum = Math.floor(Math.random() * i);          
        console.log('This is what I want added to the new randomized array: ' + numberShuffle[indexNum].number);

        // to do: create a loop to generate number shuffle

        let newNumArray = [];
        newNumArray.push(numberShuffle[indexNum].number);
        indexNum = Math.floor(Math.random() * i);          
        console.log('This is what I want added to the new randomized array: ' + numberShuffle[indexNum].number);
        newNumArray.push(numberShuffle[indexNum].number);
        indexNum = Math.floor(Math.random() * i);          
        console.log('This is what I want added to the new randomized array: ' + numberShuffle[indexNum].number);
        newNumArray.push(numberShuffle[indexNum].number);
        indexNum = Math.floor(Math.random() * i);          
        console.log('This is what I want added to the new randomized array: ' + numberShuffle[indexNum].number); 
        newNumArray.push(numberShuffle[indexNum].number);    
        console.log('new numbers list array: ' + newNumArray);    
        
        this.setState({block1: newNumArray[0]});
        this.setState({block2: newNumArray[1]});
        this.setState({block3: newNumArray[2]});
        this.setState({block4: newNumArray[3]});
        
    }


    render () {
        return (
            <div>
                <h1>Memorize the Sequence</h1>
                <div className="numgrid-container">
                    <div className="grid-item">{this.state.block1}</div>
                    <div className="grid-item">{this.state.block2}</div>
                    <div className="grid-item">{this.state.block3}</div>
                    <div className="grid-item">{this.state.block4}</div>                    
                </div>     
            </div>
        );
    }
}

export default List;