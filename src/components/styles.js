import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  
    width: 100%;
    height: 80px;
    overflow-x: hidden;
`;
export const Wrapper = styled.div`
  box-sizing: border-box;
  height: 100%;

  margin: 0 auto;
  max-width: 1280px;
  min-width: 310px;
  padding: 0 20px;
  position: relative;
  width: 100%;
    @media only screen and (max-width: 985px) {
      padding: 0 20px;
    }
    @media only screen and (max-width: 540px) {
      padding: 0 15px;
    }
`;
export const NavTabLayout = styled.div`
display:flex;
color :blueviolet;
height:100%;
flex-direction:row;

justify-content:space-between;

`;
export const NavTab = styled.div`
margin-top: 30px;
 > a {
    margin-right: 20px;
    text-decoration: none;
    color: black;
  }
`;

export const LogoContainer = styled.div`
height:100%;
display: flex;
`;

export const Logo= styled.div`
background-image:Deserved;
background-size:32px;
background-position:center;
height:100%;
width:100%;
`;

export const LogoMark = styled(Link)`
  font-weight: 600;
  font-size: 1.2rem;
  color: #664ff6!important;
  opacity: 1;
  &:hover {
    opacity: 0.8;
  }
`;