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
        this.setState({block1: numbersItem[0].number});
        this.setState({block2: numbersItem[1].number});
        this.setState({block3: numbersItem[2].number});      
    }

    render () {
        return (
            <div>
                <h1>Number Grid</h1>
                <div className="grid-container">
                    <div className="grid-item">{this.state.block1}</div>
                    <div className="grid-item">{this.state.block2}</div>
                    <div className="grid-item">{this.state.block3}</div>
                    <div className="grid-item">4</div>
                    <div className="grid-item">5</div>
                    <div className="grid-item">6</div>
                    <div className="grid-item">7</div>
                    <div className="grid-item">8</div>
                    <div className="grid-item">9</div>
                </div>     
            </div>
        );
    }
}

export default Grid;