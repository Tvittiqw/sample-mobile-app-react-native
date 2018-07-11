import React, {Component} from 'react';
import ProductItem from "./ProductItem/ProductItem";
import {styles} from "./styles";

import {FlatList, View, Text} from 'react-native';

class ProductList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {products, addToCart} = this.props;
        return (
            <View
                style={styles.productList}>
                <Text style={styles.title}>
                    Product List:
                </Text>
                <FlatList
                    style={styles.flatList}
                    data={products}
                    renderItem={({item}) => <ProductItem keyExtractor={item => item._id} product={item}
                                                         addToCart={addToCart}/>}
                />
            </View>
        );
    }
}

export default ProductList