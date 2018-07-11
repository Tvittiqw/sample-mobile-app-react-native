import {
    StackNavigator,
    DrawerNavigator,
    SwitchNavigator
} from 'react-navigation';
import {View,Button} from 'react-native'
import React from 'react'

import HomeContainer from "../containers/HomeContainer";
import OpenCart from '../components/NavButtons/OpenCart';
import OpenHome from '../components/NavButtons/OpenHome';
import LogIn from '../containers/authButtons/LogIn';
import CartContainer from "../containers/CartContainer";
import LogOut from '../containers/authButtons/LogOut';
import AuthTabs from './AuthTabs';

export const AppNav = StackNavigator(
    {
        Home: { screen: HomeContainer },
        Cart: { screen:CartContainer },
        Auth:{ screen:AuthTabs }
    },
    {
        navigationOptions:({navigation}) =>({
            headerStyle: {
                backgroundColor: '#f8f9fa',
            },
            headerTintColor: '#f8f9fa',
            headerTitleStyle: {
            },
            headerLeft: <View style={{flexDirection:'row'}}><OpenHome navigation={navigation}/><OpenCart navigation={navigation}/></View>,
            headerRight:<View style={{flexDirection:'row'}}><LogIn navigation={navigation}/><LogOut navigation={navigation}/></View>
        })
    }
);

export const AuthNavigator = SwitchNavigator(
    {
        App:AppNav
    },
    {initialRouteName:'App'}
);