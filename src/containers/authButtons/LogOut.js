import {Alert, View, TouchableOpacity, Text } from 'react-native'
import {connect} from "react-redux";
import {logout} from '../../reducers/auth.reducer'
import React, { Component } from 'react';

class LogOut extends Component {

    logOut =()=> {
        this.props.dispatchLogout(this.props.navigate);
    };
    handleOnPress =()=>{
        Alert.alert(
            'LogOut',
            'Are you sure want to logout?',
            [
                {text: 'Cancel', onPress: () =>{}, style: 'cancel'},
                {text: 'OK', onPress: () => {this.logOut(); this.props.navigation.navigate('Home');}},
            ],
            { cancelable: false }
        )
    };
    render(){
        return (
            <View>
            {this.props.auth.isLogin&&this.props.navigation.state.routeName!=='Auth'?
                <TouchableOpacity onPress={() => this.handleOnPress()}>
                    <Text style={{color: 'black',padding: 10, marginLeft: 10, fontSize: 20}}>LogOut</Text>
                </TouchableOpacity>
            :null}
            </View>
        );
    }
}

const mapDispatchToProps = {
    dispatchLogout: () => logout()
};

const mapStateToProps = (state) => ({
    auth:state.auth
});

export default connect(mapStateToProps,mapDispatchToProps)(LogOut)
