import React,{Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from "react-redux";

class CartCounter extends Component{
    constructor(props){
        super(props)
    }

    counter(){
        const {idList} = this.props.cart;
        let amount = 0;
        Object.keys(idList).map(id=>{ if(idList[id]) amount += idList[id]});
        return amount;
    }

    render(){
        return this.counter()?<View style={styles.circle}><Text style={styles.count}>{this.counter()}</Text></View>:null
    }


}
const mapStateToProps = state => ({
    cart: state.cart
});

styles = StyleSheet.create({
    circle:{
        position:'absolute',
        right:0,
        top:0,
        backgroundColor:'red',
        width:20,
        height:20,
        borderRadius:100/2,
        zIndex:999
    },
    count:{
        color:'white',
        alignSelf:'center',
        fontWeight:'bold',
        fontSize:12
    }
});

export default connect(mapStateToProps,)(CartCounter);