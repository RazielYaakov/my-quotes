import { GET_QUOTE_API } from '../../constants';
import { Get } from '../BaseRequest';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (quoteID) => {
    return await Get(GET_QUOTE_API, quoteID);
};