import React, {Component} from 'react';
import {styles} from "../CartList/styles";
import {Button, FlatList, View, Text, Alert} from 'react-native'
import CartItem from "./CartItem/CartItem";
import {CURRENCY, STRIPE_PUBLISHABLE} from "../../helpers/config";
import stripe from "tipsi-stripe";

stripe.setOptions({
    publishableKey: STRIPE_PUBLISHABLE,
    androidPayMode: 'test',
});

export default class CartList extends Component {

    handlePay = () => {
        const options = {
            total_price: this.props.total_price,
            currency_code: CURRENCY,
            smsAutofillDisabled: true,
            requiredBillingAddressFields: 'zip', // or 'full',
        };
        stripe.paymentRequestWithCardForm(options)
            .then(response => {
                this.props.pay(response.tokenId)
            })
            .catch(() => {
            });
    };

    handleLoginAlert = () => {
        Alert.alert(
            'Authorization error',
            'Login or Register for pay.',
            [
                {
                    text: 'Cancel', onPress: () => {
                    }
                },
                {
                    text: 'LogIn', onPress: () => {
                        this.props.navigation.navigate('SignIn');
                    }
                },
                {
                    text: 'SignUp', onPress: () => {
                        this.props.navigation.navigate('SignUp');
                    }
                }
            ],
            {cancelable: false}
        );
    };

    render() {
        const {products, totalPrice, deleteFromCart, isLogin} = this.props;
        return (
            <View
                style={styles.productList}>
                <Text style={styles.title}>
                    Products:
                </Text>
                <FlatList
                    style={styles.flatList}
                    data={products}
                    renderItem={({item}) => <CartItem keyExtractor={item => item._id} product={item}
                                                      deleteFromCart={deleteFromCart}/>}
                />
                <Text style={styles.totalPrice}>Total price:{totalPrice}</Text>
                <Button
                    onPress={() => isLogin ? this.handlePay() : this.handleLoginAlert()}
                    title="Pay"
                    color="blue"
                />
            </View>
        );
    }
}