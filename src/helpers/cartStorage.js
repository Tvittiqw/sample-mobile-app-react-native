import {AsyncStorage} from 'react-native'

export async function saveCart(cart){
    await AsyncStorage.setItem('cart',JSON.stringify(cart));
}

export function removeCart(){
    AsyncStorage.removeItem('cart');
}

export async function getCart(){
    return await AsyncStorage.getItem('cart');
}