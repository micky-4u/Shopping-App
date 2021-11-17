import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState, useContext } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { mainProduct } from '../product-data/products';

import { BottomNav } from './homeScreen';
import { CartBackend } from '../product-data/cartEngine';
import {TopView} from './homeScreen'



// importing icons
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';



const Cart = ({navigation, name,amount, imagePath, num, id}) =>{
    
    return (
        <View style={{backgroundColor: "#F8F9FA", flex: 1}}>

            <View style= {{flex: 1}}>
                
                        <View >
                            <View style= {styles.cartView} key = {id}>
                                <View style={styles.productPic}>
                                    <Image source ={imagePath} resizeMode="cover" style={{width: '100%', height: '100%',}}/>
                                </View>

                                <View style={styles.productDis}>
                                    <Text>
                                        {name}
                                    </Text>
                                    <Text style={{fontWeight: 'bold'}}>
                                        {amount}
                                    </Text>
                                </View>

                                <View style={styles.numOf}>
                                    <View style= {{flexDirection: "row", alignItems: "center", width: "100%"}} >
                                            <FontAwesome5 name="minus" size={20} color="#FF6C00"/>
                                        <Text style={{fontSize: 25, paddingHorizontal: 10}}>
                                            {num}
                                        </Text>
                                        <FontAwesome name="plus" size={20} color="#FF6C00" />
                                        {/* <Button tltle = "+"/> */}
                                    </View>
                                </View>  
                                
                            </View>
                        </View>
                </View>
            </View>
                    )
                    
}

const CartScreen = ({navigation})=>{
    const {items, getItemsCount, getTotalPrice} = useContext(CartBackend);


    const renderItems = ({item}) => {
        return(

         <Cart name={item.name} image={item.imagePath} discount={item.discount} amount ={item.amount} onPress ={()=>navigation.navigate('ProductDetails', {productId: item.id, name: "ProductsDetails"})} />
         )}

        return(
            <View style={{flex: 1, justifyContent: "space-between"}}>
                <TopView nav={navigation}/>
                <View style= {styles.header}>
                    <Text style ={{fontSize: 20, textAlign: "center", fontWeight: "bold", justifyContent:"space-between"}}>My Carts</Text>
                </View>

                <FlatList
                data={items}
                renderItem={renderItems}
                keyExtractor={(items) => items.id.toString()}
                style ={{margin:5}}
                contentInset={{ right: 5, top: 5, left: 5, bottom: 5 }}
                />

                <View style = {{alignItems: "center",backgroundColor: "#fff", borderTopWidth: 1, position: "relative", }}>
                    <BottomNav nav ={navigation}/>
                </View>            
        </View>
        )
}

const styles = StyleSheet.create({
    cartView:{
        flex: 1,
        marginTop: 5,
        flexDirection: "row",
        justifyContent: "space-around",
        flexWrap: "wrap",
        backgroundColor:"#fff" ,
        margin: 10,
        borderRadius:10

    },
    productPic:{
        width: "30%",
        height: 120,
        borderRadius: 10,
        padding: 20,
        backgroundColor: "#fff"
    },
    productDis:{
        justifyContent: 'center',
        width: "30%"
    },
    numOf:{
        flexDirection: "row",
        height:60,
        width: "30%",
        justifyContent: "center",
        alignItems:"center",
        marginTop: 30
    },
    header:{
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 30,
        margin: 10
    },
    loginBtn:{
        backgroundColor: "#FF6C00",
        marginTop: 10,
        padding: 15,
        marginRight: 10,
        marginLeft: 10,
        marginBottom: 20,
        borderRadius: 10,



    },
})

export default CartScreen;