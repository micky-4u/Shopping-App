import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {data, categories, bottonNav} from '../product-data/products'
import { BottomNav } from './homeScreen';

// importing icons
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const CartScreen = ({navigation}) =>{
        const [product, onProduct] = React.useState(data)
        const[num, setNum] = React.useState(0)


    return (
        <View style={{backgroundColor: "#F8F9FA", flex: 1}}>
            <View style= {styles.header}>
                <Text style ={{fontSize: 20, textAlign: "center", fontWeight: "bold",}}>My Carts</Text>
            </View>

            <View style= {{flex: 1}}>
                {product.map((data) =>{
                    return (
                        <View >
                            <View style= {styles.cartView} key = {data.id}>
                                <View style={styles.productPic}>
                                    <Image source ={data.imagePath} resizeMode="cover" style={{width: '100%', height: '100%',}}/>
                                </View>

                                <View style={styles.productDis}>
                                    <Text>
                                        {data.name}
                                    </Text>
                                    <Text style={{fontWeight: 'bold'}}>
                                        {data.amount}
                                    </Text>
                                </View>

                                <View style={styles.numOf}>
                                    <View style= {{flexDirection: "row", alignItems: "center", width: "100%"}} >
                                        {/* <Button 
                                            title = "-"
                                            style={{}}
                                            /> */}
                                            <FontAwesome5 name="minus" size={20} color="black" onPress={()=>setNum(num-1)} />
                                        <Text style={{fontSize: 25, paddingHorizontal: 10}}>
                                            {num}
                                        </Text>
                                        <FontAwesome name="plus" size={20} color="black" onPress={()=>setNum(num+1)} />
                                        {/* <Button tltle = "+"/> */}
                                    </View>
                                </View>  
                                
                            </View>
                        </View>
                    )
                    }
                    
                    )
                    }
                    <View style={{flexDirection: "row", marginTop: 40, margin: 10, justifyContent: "space-between"}}>
                    <Text style ={{fontSize: 20, fontWeight: "bold"}}>
                        Total:
                    </Text>

                    <Text style ={{fontSize: 20, fontWeight: "bold", color: "#FF8300"}}>
                        GH$ 32,000.00
                    </Text>
                    </View>

                    <TouchableOpacity  onPress={()=> navigation.navigate('HomeScreen', { name: 'HomeScreen'})} title="Submit" style = {styles.loginBtn}  >
                        <Text style ={{textAlign: "center", color: "#fff", fontSize: 20, fontWeight: "bold"}}>Buy</Text>
                    </TouchableOpacity> 

            </View >
            <View style = {{alignItems: "center",backgroundColor: "#fff", borderTopWidth: 1, position: "relative"}}>
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