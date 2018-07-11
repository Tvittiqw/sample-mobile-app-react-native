import React from 'react'
import {View, TouchableOpacity, Text } from 'react-native'

export default OpenHome = (props) => {
    if(props.navigation.state.routeName!=='Home'){
        return(
            <View>
                <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
                    <Text style={{color: 'black',padding: 10, marginLeft: 10, fontSize: 20}}>Home</Text>
                </TouchableOpacity>
            </View>
        );
    }else{
        return null
    }
};