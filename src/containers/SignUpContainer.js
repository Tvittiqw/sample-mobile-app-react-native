import React, {Component} from 'react'
import {connect} from "react-redux";
import {reset} from 'redux-form';
import {SignUp} from "../components/index";
import {signUp} from "../reducers/auth.reducer";
import {Alert} from "react-native";

class SignUpContainer extends Component {
    constructor(props) {
        super(props);
    }

    submit = (form) => {
        this.props.signUp(form.username, form.email, form.password)
            .then(() => {
                Alert.alert(
                    'SignUp',
                    'Successful',
                    [
                        {text: 'OK', onPress: () => {this.props.reset('signUp'); this.props.navigation.navigate('SignIn');}},
                    ],
                    { cancelable: false }
                );
            }).catch((error) => {
            Alert.alert(
                'SignUp',
                error.response.data.error,
                [
                    {text: 'OK', onPress: () => {}},
                ],
                { cancelable: false }
            );
            }
        );
    };

    render() {
        const {registerError} = this.props.auth;
        console.log(registerError);
        return (
            <SignUp onSubmit={this.submit}/>
        )
    }
}

const mapStateToProps = state => ({
    form: state.form,
    auth: state.auth
});

export default connect(mapStateToProps, {signUp,reset})(SignUpContainer)
