import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput, Image } from 'react-native';
import {useState} from 'react';

import {data} from '../product-data/products'
// importing screens
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


const HomeScreen = (props) =>{
    const [product, onProduct] = useState(data)
   return (product.map((data) =>{
    return (
        
        <View style= {styles.productView} key = {data.id}>
            <ScrollView 
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              scrollEventThrottle={200}
              decelerationRate="fast"
              pagingEnabled
              >
            <View>
            <TouchableOpacity style ={styles.products} onPress = {()=> props.nav.navigate('CartScreen', { name: 'CartScreen' }) }>
                <View>
                    <Text>{data.discount}</Text>
                </View>
                <View style ={styles.imageArea}>
                    <Image source ={data.imagePath} resizeMode="cover" style={{width: '100%', height: '100%',}}/>
                </View>
                <View>
                    <Text>{data.name}</Text>
                </View>
            </TouchableOpacity>
            </View>
            </ScrollView>
        </View>
    )
   }
   
   )
   )
}

const FinialHomePage = ({navigation}) =>{
    return(
        <View>

            <View style = {styles.topView}>
                <View style = {{ flexDirection: "row", justifyContent: "space-between", padding: 10 }}>

                    <View>
                        <Entypo name="menu" size={24} color="black" />
                    </View>
                    <View>
                        <AntDesign name="shoppingcart" size={24} color="black" />
                    </View>
                </View>

                    <View style={{flexDirection: "row", justifyContent: "flex-start", borderWidth: 1, borderRadius: 10, margin: 10, padding: 10, }}>
                        <View>
                            <EvilIcons name="search" size={24} color="black" />
                        </View>
                        <TextInput
                        placeholder = "Search for all categories"
                        />
                    </View>
                </View>

            <View style = {styles.productView}>
                <HomeScreen nav ={navigation} />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    products:{
        width: 170,
        marginBottom: 15,
        height: 220,
        borderRadius: 10,
        padding: 10,

    },
    productView: {
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-around",
        flexWrap: "wrap",
    },
    topView: {
        
    },
     imageArea:{
        flex: 1,
        height: 220,
        width: 170,
        marginRight: 10,
        marginLeft: 10,
        marginTop: 10,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
    },
})

export default FinialHomePage;