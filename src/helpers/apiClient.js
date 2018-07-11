import axios from 'axios';
import {AsyncStorage} from 'react-native'

export let instance = axios.create({
    baseURL: 'http://192.168.0.104:3000/',
    headers: {
        'Content-type': 'application/json; charset=utf-8'
    }
});

export async function setAuthHeader(token) {

    try {
        await AsyncStorage.setItem('UserToken', token);
    } catch (error) {
        throw(error);
    }
    instance.defaults.headers.common['x-access-token'] = token;
}

export function removeToken() {
    AsyncStorage.removeItem('UserToken');
}