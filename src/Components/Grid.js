import React, { Component } from 'react';
import data from './numberarray.json';

class Grid extends Component {
    
    state = {
        block1: '',
        block2: '',
        block3: ''
    };
    
    componentDidMount() {
        this.displayNumbers();
    }
    
    displayNumbers = () => {
        const numbersItem = data.numbergrid;
        console.log(numbersItem);  
        this.setState({block1: numbersItem[0].digit});
        this.setState({block2: numbersItem[1].digit});
        this.setState({block3: numbersItem[2].digit});
        this.setState({block4: numbersItem[3].digit});      
    }

    render () {
        return (
            <div>
                <h1>Number Grid</h1>
                <div className="grid-container">
                    <button className="grid-item">{this.state.block1}</button>
                    <button className="grid-item">{this.state.block2}</button>
                    <button className="grid-item">{this.state.block3}</button>
                    <button className="grid-item">{this.state.block4}</button>
                    <button className="grid-item">5</button>
                    <button className="grid-item">6</button>
                    <button className="grid-item">7</button>
                    <button className="grid-item">8</button>
                    <button className="grid-item">9</button>                    
                </div>     
            </div>
        );
    }
}

export default Grid;