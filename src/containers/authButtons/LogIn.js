import React, {Component} from 'react'
import {View, TouchableOpacity, Text} from 'react-native'
import {connect} from "react-redux";

class LogIn extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                {!this.props.auth.isLogin&&this.props.navigation.state.routeName!=='Auth'
                    ?
                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('Auth')}}>
                        <Text style={{color: 'black', padding: 10, marginLeft: 10, fontSize: 20}}>LogIn</Text>
                    </TouchableOpacity> : null}
            </View>
        )
    }
};

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps)(LogIn)
