import React, { Component } from 'react';

class Grid extends Component {
    
constructor () {
    super();

        this.state = {     
        userMemoryList: ''
        };
    
    this.userMemory=this.userMemory.bind(this);    

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

   

    render () {
        return (
            <div>
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
            </div>
        );
    }
}

export default Grid;