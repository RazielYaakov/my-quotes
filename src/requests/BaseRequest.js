import axios from 'axios';

import { EMPTY_BODY, SERVER_URL } from '../constants';

const instance = axios.create({
    baseURL: SERVER_URL,
    headers: {
        "Access-Control-Allow-Origin": "*",
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json;charset=utf-8'
    },
    timeout: 30000
});

const Get = async (api, ...query) => {
    try {
        return await instance.get(`/${api}/${query.join('/')}`);
    }
    catch (err) {
        return err.response;
    }
}

const Post = async (api, data = EMPTY_BODY, ...query) => {
    try {
        return await instance.post(`/${api}/${query.join('/')}`, data);
    }
    catch (err) {
        return err.response;
    }
}

const Delete = async (api, ...query) => {
    try {
        return await instance.delete(`/${api}/${query.join('/')}`);
    }
    catch (err) {
        return err.response;
    }
}

export { Get, Post, Delete };
