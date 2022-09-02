import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import TorchBookLogo from '../assets/images/TorchBookLogo.png';
import AddQuote from './AddQuote';

const AppBar = () => {
    return (
        <Bar>
            <StyledLink to="/">
                <BrandTitle>ציטוטיי</BrandTitle>
                <StyledImg src={TorchBookLogo} />
            </StyledLink>
            <AddQuote />
        </Bar>
    );
}

const Bar = styled.div`
position: sticky;
top: 0;
display: flex;
padding: 0 5px;
width: calc(100% - 10px);
margin-bottom: 10px;
background: #070707;
box-shadow: 0 2px 2px #151313a3;
flex-direction: row;
align-items: center;
justify-content: space-between;
height: 50px;
`;

const StyledLink = styled(Link)`
display: flex ;
text-decoration: none ;
align-items: center ;
justify-content: center;
`;

const BrandTitle = styled.p`
display: flex ;
align-items: center ;
margin: 5px;
color: #ababab;
font-weight: 700;
font-size: 2em;
color: white; 
letter-spacing: 2px;
`;

const StyledImg = styled.img`
width: 50px;
height: 50px;
margin-bottom: 5px;
`;

export default AppBar;