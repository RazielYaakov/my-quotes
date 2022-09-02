import React from 'react';
import styled from 'styled-components';
import QuoteCard from './QuoteCard';

const Quotes = ({ quotes, criteria }) => {
  const createCards = () => {
    let cards = [];

    quotes.forEach(quote => {
      if (criteria !== undefined && criteria !== '') {
        if (quote.data.includes(criteria) || quote.labels.includes(criteria)) {
          cards.push(<QuoteCard quote={quote} />)
        }
      } else {
        cards.push(<QuoteCard quote={quote} />)
      }
    });

    return cards;
  };

  return (
    <QuotesGrid>
      {createCards()}
    </QuotesGrid>
  );
}

const QuotesGrid = styled.div`
display: grid;
width: 96%;
margin: 1.5em;
gap: 2rem;
justify-items: center;
@media (min-width: 350px) {
  grid-template-columns: repeat(1, 1fr);
}
@media (min-width: 650px) {
  grid-template-columns: repeat(2, 1fr);
}
@media (min-width: 950px) {
  grid-template-columns: repeat(3, 1fr);
}
@media (min-width: 1250px) {
  grid-template-columns: repeat(4, 1fr);
}
`;

export default Quotes;
