import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Wrapper, NavTabLayout, NavTab } from './styles';

class Header extends Component{
   
    render(){
        return(
            <>
            <Container>
                <Wrapper>
                    <NavTabLayout>
                    
                        <NavTab>  
                    
                      
                        <Link to="/tipcalculator">TipCalculator</Link>
                        <Link to="/bmicalculator">BmiCalculator</Link>
                        
                        </NavTab>
                    </NavTabLayout>
                    
                </Wrapper>
            </Container>

            </>
        );
    }
} 
export default Header;