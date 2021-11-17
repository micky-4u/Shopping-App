import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput, Image, ImageBackground, FlatList } from 'react-native';
import {useState, useEffect} from 'react';

import { mainProduct , categories } from '../product-data/products';
// importing screens
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { ScreenStackHeaderBackButtonImage } from 'react-native-screens';

const image = require("../assets/images/bg.jpg")


const ProductsPage = ({name, image, discount, amount, key, onPress}) =>{
   return (
        
        // <View style= {styles.productView}>
           
            // <View>
            <TouchableOpacity style ={styles.products} onPress = {onPress} key ={key}>
                <View>
                    <Text style={{marginBottom: 5}}>{discount}</Text>
                </View>
                <View style ={styles.imageArea}>
                    <Image source ={image} resizeMode="cover" style={{width: '100%', height: '100%',}}/>
                </View>
                <View>
                    <Text style = {{marginTop: 5}}>{name}</Text>
                </View>
                <View>
                    <Text style ={{fontWeight: 'bold'}}>GH$ {amount}</Text>
                </View>
            </TouchableOpacity>
            // {/* </View> */}
        // </View>
    )
}

const Categories = ({name}) =>{
    return (
        
       <View style= {styles.productView}>
            
            <View >
            <TouchableOpacity  style ={styles.category}>
                <Text>{name}</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}
   


export const TopView = (props) =>{
    return(
                    <View style = {styles.topView}>
                        <View style = {{ flexDirection: "row", justifyContent: "space-between", padding: 10 }}>

                        <TouchableOpacity>
                            <Entypo name="menu" size={30} color="black" />
                        </TouchableOpacity>
                        <View >
                            <Text style = {{fontSize: 20, fontWeight: "bold"}}>Av</Text>
                        </View>
                        <TouchableOpacity onPress = {() => props.nav.navigate('CartScreen', {name: 'CartScreen'})}>
                            <AntDesign name="shoppingcart" size={30} color="black" />
                        </TouchableOpacity>
                    </View>

                        <View style={{flexDirection: "row", justifyContent: "flex-start", borderWidth: 1, borderRadius: 10, margin: 10, padding: 10, backgroundColor: "#fff",        borderColor: "#FF6500"
                                 }}>
                            <View>
                                <EvilIcons name="search" size={24} color="black" />
                            </View>
                            <TextInput
                            placeholder = "Search for all categories"
                            style = {{paddingHorizontal: 30, }}
                            />
                        </View>
                </View>

    )
}

export const BottomNav = (props) =>{

    return (
        <View style ={styles.buttomNav}>
            <TouchableOpacity>
                <SimpleLineIcons name="home" size={24} color="black" onPress ={()=> props.nav.navigate('HomeScreen',{name:"HomeScreen"})} />
            </TouchableOpacity>
             <TouchableOpacity>
                 <FontAwesome5 name="user" size={24} color="black"  />
            </TouchableOpacity>
        </View>
    )
}



const FinialHomePage = ({navigation}) =>{    

    const renderItems = ({item}) => {
        return(

         <ProductsPage name={item.name} image={item.imagePath} discount={item.discount} amount ={item.amount.toString()} onPress ={()=>navigation.navigate('ProductDetails', {productId: item.id, name: "ProductsDetails"})} />
         )}

         const renderCart = ({item}) => {
        return(

         <Categories name={item.name} />
         )}
    
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        setProducts(mainProduct());
    });

    const [cat, setdata] = useState([]);
    
    useEffect(() => {
        setdata(categories);
    });
    

    return(
        <View style ={{flex : 1, justifyContent: "space-evenly"}}>
        <ImageBackground source={image} resizeMode="cover" style={{width: '100%', height: '100%', borderRadius: 20}}>

            <View>
            <TopView nav = {navigation}/>
            </View>
            
            {/* Categories Section */}

            <View >
                <ScrollView 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={200}
                decelerationRate="fast"
                pagingEnabled
                style={{marginRight: 10, marginLeft: 10,}}
                >   
            
            <FlatList
                horizontal
                pagingEnabled={true}
                showsHorizontalScrollIndicator ={false}
                data={cat}
                renderItem={renderCart}
                keyExtractor={(items) => items.id.toString()}
                style={{margin: 5}}
            />
            </ScrollView>
            </View>

            {/* Sample Product Section */}
             <ScrollView 
              horizontal={false}
              showsHorizontalScrollIndicator={false}
              scrollEventThrottle={200}
              decelerationRate="fast"
              pagingEnabled

              >   

            <View style = {styles. cat}>
                <Text style = {styles.text}>Samsumg</Text>
                <TouchableOpacity>
                    <Text style = {styles.text}> Veiw more</Text>
                </TouchableOpacity>
            </View>
            <View style={{margin: 5}}>
            <FlatList
             horizontal
             contentContainerStyle={{alignContent:'space-around'}}
            pagingEnabled={true}
            showsHorizontalScrollIndicator ={false}
            data={products}
            renderItem={renderItems}
            keyExtractor={(items) => items.id.toString()}
            style={{margin: 5}}
             />
             </View>


            <View style = {styles. cat}>
                <Text style = {styles.text}>Accessories</Text>
                <TouchableOpacity>
                    <Text style = {styles.text}> Veiw more</Text>
                </TouchableOpacity>
            </View>


            <ScrollView 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={200}
                decelerationRate="fast"
                pagingEnabled
                style={{marginRight: 10, marginLeft: 10,}}
                >   
            
            <FlatList
            horizontal
            pagingEnabled={true}
            showsHorizontalScrollIndicator ={false}
            data={products}
            renderItem={renderItems}
            keyExtractor={(items) => items.id.toString()}
            style={{margin: 5}}
           />
            </ScrollView>
            <View style = {styles. cat}>
                <Text style = {styles.text}>Nokia</Text>
                <TouchableOpacity>
                    <Text style = {styles.text}> Veiw more</Text>
                </TouchableOpacity>
            </View>
            
            <View style={{margin: 5, padding: 5}}>
            <FlatList
             horizontal
            pagingEnabled={true}
            showsHorizontalScrollIndicator ={false}
            data={products}
            renderItem={renderItems}
            keyExtractor={(items) => items.id.toString()}
            style={{margin: 5}}
             />
             </View>


            </ScrollView>


            {/* Bottom navigation area */}

            <View style = {{alignItems: "center",backgroundColor: "#fff", borderTopWidth: 1, position: "relative"}}>
                <BottomNav />
            </View>

            </ImageBackground>
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
        borderColor: "#FF6500",
        backgroundColor: "#fff",
        marginHorizontal: 10

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
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginRight: 5,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        borderColor: "#FF6500",

    },
    buttomNav:{
        flexDirection: "row",
        position: 'relative',
        justifyContent: "space-between",
        alignItems: "baseline",
        padding: 10,
        width: "80%",
    },
    cat:{
        flexDirection: "row",
        backgroundColor: "#E500FF",
        height: 50,
        justifyContent: 'space-between',
        alignItems: "center",
        padding: 10,
    },
    text:{
        color: "#fff"
    }

})

export default FinialHomePage;