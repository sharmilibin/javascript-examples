import React, { Component } from 'react';

class TipCalculator extends Component {
    constructor() {
        super();
        this.state = {
            rate: '',
            tip: '',
            total: ''
        }


        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }
    handleChange(event) {

        this.setState({ rate: event.target.value });

    }
    handleSubmit() {
        var tip;
        var total;
        const value = this.state.rate;
        if (value <= 50) {
            tip = 0.2 * value;
        }
        else if (value >= 50 && value <= 100) {
            tip = 0.1 * value;
        }
        else if (value >= 100) {
            tip = 0.05 * value;
        }
        this.setState({ tip: tip });
        total = +tip + +value;
        this.setState({ total: total });
    }
    
    render() {
        return (
            <>
                <h2>TipCalculator</h2>

                Enter the bill Amount: <input type="number" pattern="[0-9]*" inputMode="numeric" name="rate" onChange={this.handleChange}
                    onBlur={this.handleSubmit}></input>
                <div><button type="submit" name="calculate" onClick={this.handleSubmit}>Calculate</button></div>
                <div>
                    The tip is:${this.state.tip}
                </div>
                <div>
                    <h4>The total Amount to be paid:${this.state.total}</h4>
                </div>
            </>

        );
    }
}
export default TipCalculator;



