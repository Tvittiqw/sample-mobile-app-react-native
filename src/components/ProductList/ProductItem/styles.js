import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    view: {
        padding: 10,
        marginBottom: 5,
        width: '100%',
    },
    name: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'black',
        alignSelf: 'center'
    },
    desc: {
        fontSize: 16
    },
    price: {
        width: '50%',
        fontWeight:'bold',
        fontSize: 16,
        color: 'red',
        right: 0
    },
    addButton: {
        width: '50%'
    }
});
