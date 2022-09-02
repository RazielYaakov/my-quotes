import React from 'react';
import styled from 'styled-components';
import { ARTICLE_TYPE, BOOK_TYPE } from '../constants';

const createLabels = (labels) => {
    let line = "";

    labels.forEach(label => {
        line += `#${label} `
    });

    return line;
};

const QuoteCard = ({ quote }) => {
    return (
        <Card>
            <StyledPBold style={{ fontStyle: 'italic' }}>"{quote.data}"</StyledPBold>
            <Col>
                <Group>
                    <Col>
                        <StyledPBold>מי אמר:</StyledPBold>
                        <StyledP>{quote.author ? quote.author : 'לא ידוע'}</StyledP>
                    </Col>
                    <Col>
                        <StyledPBold>פלטפורמה:</StyledPBold>
                        <StyledP>{quote.originType ? quote.originType : 'לא ידוע'}</StyledP>
                    </Col>
                </Group>
                <Group>
                    <Col>
                        <StyledPBold>שם ה{quote.originType}:</StyledPBold>
                        <StyledP>{quote.originName ? quote.originName : 'לא ידוע'}</StyledP>
                    </Col>
                    {[BOOK_TYPE, ARTICLE_TYPE].includes(quote.originType) && <Col>
                        <StyledPBold>בעמוד:</StyledPBold>
                        <StyledP>{quote.page ? quote.page : 'לא ידוע'}</StyledP>
                    </Col>}
                </Group>
            </Col>
            <StyledPBold>תגיות:</StyledPBold>
            <StyledP>{createLabels(quote.labels)}</StyledP>
        </Card>
    );
}

const Card = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
background: #f0f0dd;
color: black;
font-size: 1.1em;
width: 100%;
min-height: 250px;
max-height: 350px;
border-radius: 2px;
outline: none;
padding: 5px;
`;

const Col = styled.div`
display: flex;
width: 95%;
align-items: center;
flex-direction: column;
justify-content: space-around;
`;

const Group = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-around;
width: 100%;
`;

const StyledP = styled.p`
text-align: center;
margin: 5px;
`;

const StyledPBold = styled(StyledP)`
font-weight: bold;
`;

export default QuoteCard;
