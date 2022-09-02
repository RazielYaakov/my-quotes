import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import AppBar from './components/AppBar';
import StyledToaster from './components/StyledToaster';
import NewQuoteForm from './forms/NewQuoteForm';
import QuotesPage from './pages/QuotesPage';
import PageNotFound from './pages/PageNotFound';

const App = () => {
  return (
    <Main>
      <Router>
        <AppBar />
        <Pages>
          <Switch>
            <Route path="/" component={QuotesPage} exact />
            <Route path="/quotes" component={QuotesPage} />
            <Route path="/AddQuote" component={NewQuoteForm} />
            <Route component={PageNotFound} exact />
          </Switch>
        </Pages>
      </Router>
      <StyledToaster />
    </Main>
  );
};

const Main = styled.div`
display: flex;
width: 100vw;
height: 100vh;
align-items: flex-start;
justify-content: center;
flex-direction: column;
`;

const Pages = styled.div`
display: flex;
width: 100%;
height: calc(100% - 50px);
align-items: center;
justify-content: center;
color: white;
overflow: hidden;
`;

export default App;
