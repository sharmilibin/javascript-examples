import React, { Component } from 'react';
import Header from './header';
import { Route } from 'react-router-dom';
import TipCalculator from './tipcalculator';
import BmiCalculator from './bmiCalculator';


class Main extends Component{
    render(){
        return(
            <>
            <Header/>
            <Route exact path='/tipcalculator' component={() => <TipCalculator  />} />
            <Route exact path='/bmicalculator' component={() => <BmiCalculator  />} />
            
           
            </>
        );
    }
}
export default Main