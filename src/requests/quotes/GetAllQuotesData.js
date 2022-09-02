import { GET_ALL_QUOTES_DATA_API } from '../../constants';
import { Get } from '../BaseRequest';

// eslint-disable-next-line import/no-anonymous-default-export
export default async () => {
    return await Get(GET_ALL_QUOTES_DATA_API);
};