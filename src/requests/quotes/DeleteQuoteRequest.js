import { DELETE_QUOTE_API } from '../../constants';
import { Post } from '../BaseRequest';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (quoteID) => {
    return await Post(DELETE_QUOTE_API, quoteID);
};