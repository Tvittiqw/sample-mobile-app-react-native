import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import {View, Button, TextInput, Text, KeyboardAvoidingView} from 'react-native';
import {styles} from './styles'

const renderInput = ({input: {onChange, ...restInput}, meta: {error,touched, ...restMeta}, ...restProps}) => {
    return (<View style={styles.field}>
        <TextInput style={styles.input} placeholder={restProps.name} secureTextEntry={restProps.password} onChangeText={onChange} {...restInput} />
        {touched && error ? <Text style={{color:'red'}}>{error}
        </Text> : null}
    </View>);
};

class LogIn extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.view}>
                <Text style={styles.page_title}>Log In</Text>
                <Text style={styles.title}>Email</Text>
                <Field name='email' component={renderInput}/>
                <Text style={styles.title}>Password</Text>
                <Field name='password' password={true} component={renderInput}/>
                <Button
                    onPress={this.props.handleSubmit}
                    title="LogIn"
                    color="green"
                />
            </KeyboardAvoidingView>
        )
    }
}

export default reduxForm({
    form: 'logInForm',
    validate: (values) => {
        const errors = {};
        errors.email = !values.email
            ? 'Email field is required'
            :values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
                ? 'Email format is invalid'
            : undefined;

        errors.password = !values.password
            ? 'Password field is required'
            : values.password.length < 8
                ? 'Password must be at least 8 characters long'
                : undefined;

        return errors;
    },
    fields: ['email', 'password'],
    enableReinitialize: true
})(LogIn)

