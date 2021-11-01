import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput, Image } from 'react-native';
import {useState} from 'react';

import {data, categories} from '../product-data/products'
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
                    <Text style={{marginBottom: 5}}>{data.discount}</Text>
                </View>
                <View style ={styles.imageArea}>
                    <Image source ={data.imagePath} resizeMode="cover" style={{width: '100%', height: '100%', borderRadius: 20}}/>
                </View>
                <View>
                    <Text style = {{marginTop: 5}}>{data.name}</Text>
                </View>
                <View>
                    <Text style ={{fontWeight: 'bold'}}>{data.amount}</Text>
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

const Categories = (props) =>{
    const [cat, onCat] = useState(categories)
   return (
       <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              scrollEventThrottle={200}
              decelerationRate="fast"
              pagingEnabled
              style={{margin: 10}}
              >
    {cat.map((data) =>{
    return (
        
       <View style= {styles.productView} key = {cat.id}>
            
            <View >
            <TouchableOpacity  style ={styles.category} onPress = {()=> props.nav.navigate('CartScreen', { name: 'CartScreen' }) }>
                <Text>{data.name}</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}
   
   )}
</ScrollView>
   )
}


const FinialHomePage = ({navigation}) =>{
    return(
        <View>
            

            <View style = {styles.topView}>
                <View style = {{ flexDirection: "row", justifyContent: "space-between", padding: 10 }}>

                    <View>
                        <Entypo name="menu" size={30} color="black" />
                    </View>
                    <View>
                        <AntDesign name="shoppingcart" size={30} color="black" />
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
            
            {/* Categories Section */}

            <View >
                <Categories nav = {navigation} />
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
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,

    },
    productView: {
        marginTop: 5,
        flexDirection: "row",
        justifyContent: "space-around",
        flexWrap: "wrap",
    },
    topView: {
        
    },
     imageArea:{
        flex: 1,
        height: 150,
        width: 100,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
    },
    category:{
        width: 100,
        height: 40,
        backgorund: "blue",
        borderWidth: 1,
        borderRadius: 20,
        padding: 10,
        marginRight: 5,
        alignItems: "center",
        justifyContent: "center"

    }

})

export default FinialHomePage;