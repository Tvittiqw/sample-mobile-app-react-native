import React,{Component} from 'react'
import {View, Text, Button} from 'react-native'
import {styles} from './styles'

export default class CartItem extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const {product, deleteFromCart} = this.props;
        return(
            <View style={styles.view}>
                <Text style={styles.name}>{product.product.title}</Text>
                <Text style={styles.desc}>{product.product.description}</Text>
                <View style={styles.row}>
                    <Text style={styles.price}>price:{product.product.price}  </Text>
                    <Text style={styles.quantity}>quantity:{product.quantity}</Text>
                </View>
                <Button
                    style={styles.removeButton}
                    onPress={()=>{deleteFromCart(product.product._id)}}
                    title="Remove"
                    color="red"
                />
            </View>
        );
    }
}
