import 'react-toastify/dist/ReactToastify.css';

import React, { useState } from 'react';
import Lottie from 'react-lottie';
import { toast } from 'react-toastify';
import styled from 'styled-components';

import * as noOneAnimation from '../assets/lotties/not-found.json';
import * as animationData from '../assets/lotties/36341-find-people.json';
import TextFilter from '../components/TextFilter';
import { OK_RESPONSE } from '../constants';
import GetAllQuoteData from '../requests/quotes/GetAllQuotesData';
import FormMessage from '../components/formText/FormMessage';
import Quotes from '../components/Quotes';

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData.default,
    animType: 'svg',
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};

const noOne = {
    loop: true,
    autoplay: true,
    animationData: noOneAnimation.default,
    animType: 'svg',
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};

const QuotesPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [notAsked, setNotAsked] = useState(true);
    const [criteria, setCriteria] = useState(undefined);
    const [quotes, setQuotes] = useState([]);

    const getQuoteData = async () => {
        if (notAsked) {
            setNotAsked(false);
            const getQuotesDataResponse = await GetAllQuoteData();

            if (getQuotesDataResponse && getQuotesDataResponse.status === OK_RESPONSE) {
                setQuotes(getQuotesDataResponse.data);
                setIsLoading(false);
                return;
            }

            setIsLoading(false);
            toast.error("Error in getting information, please try again soon...");
            return;
        }
    };

    const handleCriteria = (text) => {
        if (text.length > 0) {
            setCriteria(text);
        } else {
            setCriteria(undefined);
        }
    };

    if (isLoading) {
        getQuoteData();

        return (
            <QuotePageDiv>
                <Lottie options={defaultOptions} width={300} height={250} />
            </QuotePageDiv>
        );
    }

    if (quotes.length === 0) {
        return (
            <QuotePageDiv>
                <NoPersonDiv>
                    <FormMessage value={"אין ציטוטים..."} />
                    <Lottie options={noOne} width={340} height={250} />
                </NoPersonDiv>
            </QuotePageDiv>
        );
    }

    return (
        <QuotePageDiv>
            <TextFilter placeholder={"הקלד כדי לסנן..."} handleFilter={handleCriteria} />
            <Quotes quotes={quotes} criteria={criteria} />
        </QuotePageDiv>
    );
}

const QuotePageDiv = styled.div`
display: flex;
align-items: center;
flex-direction: column;
width: 100%;
height: 100%;
overflow-y: auto;
overflow-x: hidden;
`;

const NoPersonDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;

export default QuotesPage;