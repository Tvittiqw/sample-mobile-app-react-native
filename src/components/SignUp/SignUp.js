import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import {View, Button, TextInput, KeyboardAvoidingView, Text} from 'react-native';
import {styles} from './styles'

const renderInput = ({input: {onChange, ...restInput}, meta: {error, touched, ...restMeta}, ...restProps}) => {
    return (<View style={styles.field}>
        <TextInput secureTextEntry={restProps.password} placeholder={restProps.name} onChangeText={onChange} {...restInput} />
        {touched && error ? <Text style={{color:'red'}}>{error}
        </Text> : null}
    </View>);
};

class SignUpComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.view}>
                <Text style={styles.page_title}>Sign Up</Text>
                <Text style={styles.title}>Username</Text>
                <Field name='username' component={renderInput}/>
                <Text style={styles.title}>Email</Text>
                <Field name='email' component={renderInput}/>
                <Text style={styles.title}>Password</Text>
                <Field name='password' password={true} component={renderInput}/>
                <Button
                    onPress={this.props.handleSubmit}
                    title="SignUp"
                    color="green"
                />
            </KeyboardAvoidingView>
        )
    }
}

export default reduxForm({
    form: 'signUp',
    validate: (values) => {
        const errors = {};

        errors.email = !values.email
            ? 'Email field is required'
            : values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
                ? 'Email format is invalid'
                : undefined;

        errors.username = !values.username
            ? 'Username field is required'
            : values.username.length < 6
                ? 'Username must be at least 6 characters long'
                : undefined;

        errors.password = !values.password
            ? 'Password field is required'
            : values.password.length < 8
                ? 'Password must be at least 8 characters long'
                : undefined;

        return errors;
    },
    fields: ['email', 'password', 'username'],
    enableReinitialize: true
})(SignUpComponent)