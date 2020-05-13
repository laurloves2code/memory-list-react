import React, { Component } from 'react';

class Grid extends Component {

    

    render () {
        return (
            <div>
                <h1>Number Grid</h1>
                <div className="grid-container">
                    <div className="grid-item">1</div>
                    <div className="grid-item">2</div>
                    <div className="grid-item">3</div>
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