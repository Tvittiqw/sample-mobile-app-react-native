import React, {Component} from 'react';
import {styles} from "./styles";
import {Text, View, Button} from 'react-native'

class ProductItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {product, addToCart} = this.props;
        return (
            <View style={styles.view}>
                <Text style={styles.name}>{product.title}</Text>
                <Text style={styles.desc}>{product.description}</Text>
                <View style={{flexDirection: 'row', alignItems:'center'}}>
                    <Text style={styles.price}>price: {product.price}</Text>
                    <Button style={styles.addButton} title='Add to cart' color='green'
                            onPress={() => addToCart(product._id)}/>
                </View>
            </View>
        );
    }
}

export default ProductItem