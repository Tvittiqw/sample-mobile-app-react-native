import React, {Component} from 'react'
import {connect} from "react-redux";
import {getCartProducts, deleteFromCart, pay} from '../reducers/cart.reducer'
import {saveCart} from "../helpers/cartStorage";
import CartList from "../components/CartList/CartList";
import {View, Text, Alert} from 'react-native'

class CartContainer extends Component {
    constructor(props) {
        super(props);
        this.props.getCartProducts(this.props.cart.idList);
    }

    handleDelete = (productId) => {
        this.props.deleteFromCart(productId).then(() => {
                saveCart(this.props.cart.idList);
            }
        )
    };

    applyPay = (token) => {
        this.props.pay(this.props.cart.idList, this.props.cart.totalPrice, 'Products Pay', token)
            .then(() => {
                Alert.alert(
                    'Pay',
                    'Payment Success',
                    [
                        {
                            text: 'OK', onPress: () => {
                                this.props.navigation.navigate('Home');
                            }
                        },
                    ],
                    {cancelable: false}
                );
            })
            .catch(() => {
                Alert.alert(
                    'Pay',
                    'Payment Error',
                    [
                        {
                            text: 'OK', onPress: () => {
                                this.props.navigation.navigate('Home');
                            }
                        },
                    ],
                    {cancelable: false}
                );
            })
    };

    render() {
        const {cart, auth} = this.props;

        return <View>
            {cart.cartProducts && cart.cartProducts.length !== 0 ?
                <CartList pay={this.applyPay} navigation={this.props.navigation} isLogin={auth.isLogin}
                          products={cart.cartProducts} totalPrice={cart.totalPrice} deleteFromCart={this.handleDelete}/>
                :
                <Text style={{fontSize: 20, fontWeight: 'bold', alignSelf: 'center', marginTop: '5%'}}>Your shopping
                    cart is empty</Text>
            }
        </View>
    }
}


const mapStateToProps = state => ({
    auth: state.auth,
    cart: state.cart,
    product: state.product
});

export default connect(mapStateToProps, {getCartProducts, deleteFromCart, pay})(CartContainer);