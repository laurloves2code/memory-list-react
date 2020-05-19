import React, { Component } from 'react';
import data from './numberarray.json';

class Numbers extends Component {
    
    constructor (props) {
        super(props);

        this.state = {            
            numbersList1: '',
            numbersList2: '',
            numbersList3: '',
            numbersList4: '',
            userMemoryList: ''
        };

        
        this.shuffleNumbers=this.shuffleNumbers.bind(this);  
        this.userMemory=this.userMemory.bind(this);      
        this.checkSolution=this.checkSolution.bind(this);

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

    userMemory(event) {
        let u = event.target.innerHTML;
        //this.setState({userMemoryList: u});
        if (this.state.userMemoryList === '') {
            this.setState({ userMemoryList: [u]}, () => {console.log(this.state.userMemoryList)});            
        } else {
            this.setState({userMemoryList: [...this.state.userMemoryList, u]}, () => {console.log(this.state.userMemoryList)});            
        };         
       
    }

    checkSolution() {        
        this.setState({userMemoryList: ''});    
        this.shuffleNumbers();    
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
                <h1>Number Grid</h1>
                <div className="grid-container">
                    <button className="grid-item" onClick={this.userMemory}>1</button>
                    <button className="grid-item" onClick={this.userMemory}>2</button>
                    <button className="grid-item" onClick={this.userMemory}>3</button>
                    <button className="grid-item" onClick={this.userMemory}>4</button>
                    <button className="grid-item" onClick={this.userMemory}>5</button>
                    <button className="grid-item" onClick={this.userMemory}>6</button>
                    <button className="grid-item" onClick={this.userMemory}>7</button>
                    <button className="grid-item" onClick={this.userMemory}>8</button>
                    <button className="grid-item" onClick={this.userMemory}>9</button>                    
                </div> 
                <p><button onClick={this.checkSolution}>Check Numbers</button></p>   
            </div>
            
        );
    }
}

export default Numbers;