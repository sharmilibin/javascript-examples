import React, { Component } from 'react';

class BmiCalculator extends Component {
    constructor() {
        super();
        this.state = {
            height: '',
            weight: '',
            gender: '',
            age: '',
            bmi: '',
            optimalweight: '',
            message: '',
            weightmetric: 'Kg'
      }
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event) { 
        var name  = event.target.name;

        this.setState({ [name] : event.target.value });
        
    }

    handleSubmit() {
        var height = this.state.height;
        const weight = this.state.weightmetric === 'Lb' ? 0.4536*this.state.weight : this.state.weight;
        const gender = this.state.gender;
        const age = this.state.age;
        var bmi;

        height = height / 100;

        bmi = (weight) / (height * height);

        this.setState({ bmi: bmi });
        let low = Math.round(18.5 * (height * height));
        let high = Math.round(24.99 * (height * height));
        let message = "";
        if (bmi >= 18.5 && bmi <= 24.99) {
            message = "You are in a healthy weight range";
        }
        else if (bmi >= 25 && bmi <= 29.9) {
            message = "You are overweight";
        }
        else if (bmi >= 30) {
            message = "You are obese";
        }
        else if (bmi < 18.5) {
            message = "You are under weight";
        }
        this.setState({ message: message });
        this.setState({ optimalweight: "Your suggested weight range is between " + low + " - " + high });
        this.setState({ bmi: Math.round(bmi) });

    }
    render() {
        return (
            <>
                <h1>BMI Calculator</h1>
                Choose Your Gender:<select ><option value="select" >Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option></select>
                <div>
                    Enter Your Age:<input type="number" pattern="[0-9]*" inputMode="numeric" name="age" >
                    </input>
                </div>
                <div>
                    Enter your weight:<input type="number" pattern="[0-9]*" inputMode="numeric" name="weight" onChange={this.handleChange}
                    ></input>
                    <select name="weightmetric" onChange={this.handleChange} value={this.state.weightmetric} >
                        <option value="Lb">Lb</option>
                        <option value="Kg">Kg</option>
                    </select>
                </div>
                <div>
                    Enter Your Height:<input type="number" pattern="[0-9]*" inputMode="numeric" name="height" onChange={this.handleChange}
                    ></input>
                    <select>
                        <option value="cm">CM</option>
                        <option value="ft">Ft</option>
                    </select>
                </div>
                <div>
                    <button type="submit" name="calculate" onClick={this.handleSubmit} >Calculate</button>
                </div>
                <div>
                    Your BMI is:{this.state.bmi}
                    <div>
                        {this.state.message}
                    </div><div>
                        {this.state.optimalweight}
                    </div>
                </div>
            </>
        );
    }
}
export default BmiCalculator;