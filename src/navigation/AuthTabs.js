import React from 'react'
import {Image,StyleSheet} from 'react-native'
import {TabNavigator} from 'react-navigation'

import LogInContainer from '../containers/LogInContainer'
import SignUpContainer from '../containers/SignUpContainer'

const styles = StyleSheet.create({
    icon: {
        width: 30,
        height: 30,
        alignSelf:'center'
    }
});

const routes = {
    SignIn: {
        screen: LogInContainer,
        navigationOptions: {
            title: 'Sign In',
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={require('../../assets/signIn.png')}
                    style={styles.icon}
                />
            )
        }
    },
    SignUp: {
        screen: SignUpContainer,
        navigationOptions: {
            title: 'Sign Up',
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={require('../../assets/signUp.png')}
                    style={styles.icon}
                />
            )
        }
    }
};

const routeConfig = {
    tabBarPosition: 'bottom',
    tabBarOptions: {
        showLabel: true,
        showIcon: true,
        // activeTintColor: colors.primary,
        // inactiveTintColor: colors.secondary,
        // indicatorStyle: { backgroundColor: colors.secondary },
        labelStyle: {
            // fontFamily: fonts.base,
            fontSize: 12
        },
        style: {
            backgroundColor: 'white',
            borderTopWidth: 0,
            paddingBottom: 3
        },
    }
};

export default TabNavigator(routes, routeConfig)