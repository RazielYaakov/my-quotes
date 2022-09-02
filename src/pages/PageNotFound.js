import 'react-toastify/dist/ReactToastify.css';

import React from 'react';
import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import * as notFound from '../assets/lotties/not-found.json';

const notFoundOptions = {
    loop: true,
    autoplay: true,
    animationData: notFound.default,
    animType: 'svg',
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};

const PageNotFound = () => {
    return (
        <NotFoundDiv>
            <FormWarning>התבלבלת בכתובת חביבי...</FormWarning>
            <Lottie height={200} width={280} options={notFoundOptions} />
            <StyledLink to="/">
                <StyledButton>
                    <StyledSpan>תחזיר אותי למציאות!</StyledSpan>
                </StyledButton>
            </StyledLink>
        </NotFoundDiv>
    );
}

const NotFoundDiv = styled.div`
display: flex;
align-items: center;
flex-direction: column;
width: 100%;
height: 100%;
overflow-y: auto;
`;

const FormWarning = styled.h2`
color: red;
font-size: 1.2em;
font-weight: 500;
margin: 5px;
margin-top: 20px;
`;

const StyledSpan = styled.span`
margin: 5px;
`;

const StyledLink = styled(Link)`
display: flex;
align-items: center;
justify-content: center;
margin: 10px;
text-decoration: none;
`;

const StyledButton = styled.button`
background: #efefef5e;
font-family: 'Heebo';
border-width: 0;
border-radius: 5px;
font-size: 1.2em;
font-weight: 400;
color: white;
margin: 5px;
padding: 5px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
&:hover {
background: #3a5058;
};
&:active {
background: #3a5058;
};
&:focus {
outline-width: 0;
transition-duration: 1s;
background: rgb(104 101 101);
}
`;

export default PageNotFound;