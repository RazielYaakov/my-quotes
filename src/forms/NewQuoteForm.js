import 'react-toastify/dist/ReactToastify.css';

import { TextareaAutosize } from '@material-ui/core';
import React, { useState } from 'react';
import styled from 'styled-components';
import AddQuoteRequest from '../requests/quotes/AddQuoteRequest';
import StyledButton from '../components/buttons/StyledButton';
import FormTitle from '../components/formText/FormTitle';
import { ARTICLE_TYPE, BOOK_TYPE, OK_RESPONSE, ORIGIN_TYPES, TAG_OPTIONS, UPDATE_COLOR } from '../constants';
import { toast } from 'react-toastify';
import OptionsPicker from '../components/OptionsPicker';
import OneOptionPicker from '../components/OneOptionPicker';
import { useHistory } from 'react-router-dom';

const NewQuoteForm = () => {
    const history = useHistory();
    const [quoteData, setQuoteData] = useState(undefined);
    const [quoteOriginType, setQuoteOriginType] = useState(undefined);
    const [quoteOriginName, setQuoteOriginName] = useState(undefined);
    const [quoteAuthor, setQuoteAuthor] = useState(undefined);
    const [quoteLocation, setQuoteLocation] = useState(undefined);
    const [quoteLabels, setQuoteLabels] = useState(undefined);

    const handleClick = async () => {
        console.log(quoteData,
            quoteOriginType,
            quoteOriginName,
            quoteAuthor,
            quoteLocation,
            quoteLabels);

        if (formDataIsValid()) {
            const addQuoteResponse = await AddQuoteRequest({
                data: quoteData,
                originType: quoteOriginType,
                originName: quoteOriginName,
                author: quoteAuthor,
                page: ([BOOK_TYPE, ARTICLE_TYPE].includes(quoteOriginType)) ? parseInt(quoteLocation) : undefined,
                labels: quoteLabels
            });

            if (addQuoteResponse && addQuoteResponse.status === OK_RESPONSE) {
                toast.success("הפרטים נשמרו בהצלחה!");
                history.push('/');
                return;
            }

            toast.error("הייתה בעיה בשמירת הפרטים...");
        }
    };

    const formDataIsValid = () => {
        if (quoteData === undefined || quoteData.lenght > 6) {
            toast.error('תצטט כמו שצריך הלו');

            return false;
        }

        if (quoteOriginType === undefined) {
            toast.error('הלו מאיפה?');

            return false;
        }

        if (quoteLabels === undefined || quoteLabels.lenght === 0) {
            toast.error('תתייג יא נקניק');

            return false;
        }

        return true;
    }

    return (
        <NewQuoteDiv>
            <Input>
                <FormTitle value={"הוספת ציטוט חדש"} />
            </Input>
            <StyledTextarea rows={3} placeholder="צטט!" onChange={event => setQuoteData(event.target.value)} />
            <StyledInput placeholder="מי אמר?" onChange={event => setQuoteAuthor(event.target.value)} />
            <OneOptionPicker title={"איפה?"} list={ORIGIN_TYPES} handleChange={setQuoteOriginType} />
            <StyledInput placeholder="מה השם?" onChange={event => setQuoteOriginName(event.target.value)} />
            {([BOOK_TYPE, ARTICLE_TYPE].includes(quoteOriginType)) &&
                <StyledInput placeholder="איזה עמוד?" onChange={event => setQuoteLocation(event.target.value)} />}
            <OptionsPicker title="תגיות רלוונטיות...?" list={TAG_OPTIONS} handleChange={setQuoteLabels} />
            <StyledButton text={"יאללה, תוסיף"} color={UPDATE_COLOR} onClick={handleClick} />
        </NewQuoteDiv>
    );
}

const NewQuoteDiv = styled.div`
display: flex;
flex-direction: column;
margin: 10px;
width: 100%;
height: 100%;
overflow-y: auto;
`;

const Input = styled.div`
display: flex;
flex-direction: row;
align-items: center;
margin: 0.5em;
`;

const StyledInput = styled.input`
margin-left: 20px;
background: transparent;
outline: none;
box-shadow: 1px 1px black;
padding: 2px;
width: 10%;
min-width: 200px;
font-size: 1.1em;
font-family: 'Heebo';
color: white;
border-width: 1px;
border-radius: 5px;
margin: 5px;
border-color: white;
::placeholder{
    color: #9a9999;
}
`;

const StyledTextarea = styled(TextareaAutosize)`
margin-left: 20px;
background: transparent;
outline: none;
box-shadow: 1px 1px black;
padding: 2px;
font-size: 1.1em;
font-family: 'Heebo';
color: white;
border-width: 1px;
border-radius: 5px;
resize: none;
border-color: white;
::placeholder{
    color: #9a9999;
}
margin: 5px;
max-width: 500px;
`;

export default NewQuoteForm;