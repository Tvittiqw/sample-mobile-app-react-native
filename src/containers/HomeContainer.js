import React, {Component} from 'react'
import {connect} from "react-redux";
import {ProductList} from "../components/index";
import {getProducts} from "../reducers/product.reducer"
import {addToCart} from "../reducers/cart.reducer"
import {saveCart} from '../helpers/cartStorage'


class HomeContainer extends Component<{}> {
    constructor(props) {
        super(props);
    }
    componentWillMount(){
        this.props.getProducts();

    }

    handleAddToCart =(productId)=>{
        this.props.addToCart(productId).then(()=>{
                saveCart(this.props.cart.idList);
            }
        )
    };

    render() {
        return <ProductList products={this.props.product.products} isLogin={this.props.auth.isLogin} addToCart={this.handleAddToCart}/>
    }
}


const mapStateToProps = state => ({
    product: state.product,
    cart:state.cart,
    auth:state.auth
});

export default connect(mapStateToProps, {getProducts, addToCart})(HomeContainer)