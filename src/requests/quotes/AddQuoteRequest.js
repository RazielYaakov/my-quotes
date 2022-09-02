import { ADD_QUOTE_API } from '../../constants';
import { Post } from '../BaseRequest';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (quoteData) => {
    return await Post(ADD_QUOTE_API, quoteData);
};