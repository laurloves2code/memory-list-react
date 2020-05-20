import React, { Component } from 'react';
import data from './numberarray.json';

let numberShuffle;
let numDisplayArr;
let answerArr;

class Numbers extends Component {
    
    constructor (props) {
        super(props);

        this.state = {            
            numbersList1: '',
            numbersList2: '',
            numbersList3: '',
            numbersList4: '',
            userMemoryList: '',
            Solution: '',
            Grid: <div><h1>Get Ready :)</h1></div>
        };

        
        this.shuffleNumbers=this.shuffleNumbers.bind(this);  
        this.userMemory=this.userMemory.bind(this);      
        this.checkSolution=this.checkSolution.bind(this);
       

    }
        
    componentDidMount() {        
        this.shuffleNumbers();
    }

    //--------------------------------------------
    
    shuffleNumbers() {
        
        numberShuffle = data.numbergrid;        
        let n = numberShuffle.length;
        let indexNum = Math.floor(Math.random() * n);     
        numDisplayArr = '';

        for (let i = 1; i < 5; i++) {    
            indexNum = Math.floor(Math.random() * n);
            if (numDisplayArr === '') {                 
                numDisplayArr = [numberShuffle[indexNum].number];            
            } else {               
                numDisplayArr = [...numDisplayArr, numberShuffle[indexNum].number]
            };         
                   
        }   

        console.log(numDisplayArr);  
        this.setState({Solution: ''});      
        this.setState({numbersList1: numDisplayArr[0]});
        this.setState({numbersList2: numDisplayArr[1]});
        this.setState({numbersList3: numDisplayArr[2]});
        this.setState({numbersList4: numDisplayArr[3]});  
        
        setTimeout(() => {
            this.setState({numbersList1: '*'});
            this.setState({numbersList2: '*'});
            this.setState({numbersList3: '*'});
            this.setState({numbersList4: '*'});
            this.setState({Grid: 
                
                <div className="grid-container">                
                <button className="grid-item btn btn-info" onClick={this.userMemory}>1</button>
                <button className="grid-item btn btn-info" onClick={this.userMemory}>2</button>
                <button className="grid-item btn btn-info" onClick={this.userMemory}>3</button>
                <button className="grid-item btn btn-info" onClick={this.userMemory}>4</button>
                <button className="grid-item btn btn-info" onClick={this.userMemory}>5</button>
                <button className="grid-item btn btn-info" onClick={this.userMemory}>6</button>
                <button className="grid-item btn btn-info" onClick={this.userMemory}>7</button>
                <button className="grid-item btn btn-info" onClick={this.userMemory}>8</button>
                <button className="grid-item btn btn-info" onClick={this.userMemory}>9</button>                    
            </div>   });
        }, 2000)       
               
    }

    //--------------------------------------------

    setSelection() {
        this.setState({numbersList2: this.state.userMemoryList[1]});
        this.setState({numbersList3: this.state.userMemoryList[2]});
        this.setState({numbersList4: this.state.userMemoryList[3]});
    }

    //--------------------------------------------

    userMemory(event) {
        let numButton = event.target.innerHTML;        
        if (this.state.userMemoryList.length === 4) {
            this.setState({Solution: 'All Numbers Selected. Check Solution'});
        } else {
            if (this.state.userMemoryList === '') {
                this.setState({ userMemoryList: [numButton]}, () => {this.setState({numbersList1: this.state.userMemoryList[0]})});                            
            } else {
                this.setState({userMemoryList: [...this.state.userMemoryList, numButton]}, () => {this.setSelection()});            
            }; 
        }  
               
        
       
    }

    //--------------------------------------------

    checkSolution() {     
            
        answerArr = '';
        
        for (let i = 0; i < 6; i++ ) {

            if(numDisplayArr[i] === 'one') {
                answerArr = [...answerArr, '1'];                
            } else if(numDisplayArr[i] === 'two') {
                answerArr = [...answerArr, '2'];                
            } else if(numDisplayArr[i] === 'three') {
                answerArr = [...answerArr, '3'];                
            } else if(numDisplayArr[i] === 'four') {
                answerArr = [...answerArr, '4'];                
            } else if(numDisplayArr[i] === 'five') {
                answerArr = [...answerArr, '5'];                
            } else if(numDisplayArr[i] === 'six') {
                answerArr = [...answerArr, '6'];                
            } else if(numDisplayArr[i] === 'seven') {
                answerArr = [...answerArr, '7'];                
            } else if(numDisplayArr[i] === 'eight') {
                answerArr = [...answerArr, '8'];                
            } else if(numDisplayArr[i] === 'nine') {
                answerArr = [...answerArr, '9'];                
            } else {
                console.log('done: ' + answerArr);
            }

            if (
                answerArr[0] === this.state.userMemoryList[0] &&
                answerArr[1] === this.state.userMemoryList[1] &&
                answerArr[2] === this.state.userMemoryList[2] &&
                answerArr[3] === this.state.userMemoryList[3]                
                ) {
                console.log('Great!');
                this.setState({Solution: 'Great!'});
            } else {
                console.log('Try Again');
                this.setState({Solution: 'Try Again'});
            }
           
        }
        
        console.log('User Input: ' + this.state.userMemoryList);
        
        setTimeout(() => {
            this.setState({userMemoryList: ''});
            this.setState({Grid: <div><h1>Get Ready :)</h1></div>});
            this.shuffleNumbers();
        }, 2000)
            
    }

    //--------------------------------------------

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
                <h1>Enter Your Numbers</h1>
                
                {this.state.Grid}                
                
                <p><button className="btn btn-warning" onClick={this.checkSolution}>Check Numbers</button></p>   
                <h1>{this.state.Solution}</h1>
            </div>
            
        );
    }
}

export default Numbers;