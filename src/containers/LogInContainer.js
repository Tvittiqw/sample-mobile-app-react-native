import React, {Component} from 'react'
import {connect} from "react-redux";
import {LogIn} from "../components/index";
import {reset} from 'redux-form'
import {logIn} from "../reducers/auth.reducer";
import {Alert} from "react-native";

class LogInContainer extends Component {
    constructor(props) {
        super(props);
    }

    submit =(form)=>{
        this.props.logIn(form.email,form.password )
            .then(()=>{
                this.props.reset('logInForm');
                this.props.navigation.navigate('Home');
            }).catch(error=>{
            Alert.alert(
                'Error',
                error.response.data.error,
                [
                    {text: 'OK', onPress: () => {this.props.reset('signUp'); this.props.navigation.navigate('SignIn');}},
                ],
                { cancelable: false }
            );
        });
    };

    render() {
        return <LogIn onSubmit={this.submit}/>
    }
}


const mapStateToProps = state => ({
    form:state.form,
    auth:state.auth
});


export default connect(mapStateToProps,{logIn,reset})(LogInContainer)