import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput, Image } from 'react-native';
import {useState} from 'react';

import {data, categories, bottonNav} from '../product-data/products'
// importing screens
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';



const ProductsPage = (props) =>{
    const [product, onProduct] = useState(data)
   return (
    
    product.map((data) =>{
    return (
        
        <View style= {styles.productView} key = {data.id}>
           
            <View>
            <TouchableOpacity style ={styles.products} onPress = {()=> props.nav.navigate('', { name: '' }) }>
                <View>
                    <Text style={{marginBottom: 5}}>{data.discount}</Text>
                </View>
                <View style ={styles.imageArea}>
                    <Image source ={data.imagePath} resizeMode="cover" style={{width: '100%', height: '100%',}}/>
                </View>
                <View>
                    <Text style = {{marginTop: 5}}>{data.name}</Text>
                </View>
                <View>
                    <Text style ={{fontWeight: 'bold'}}>{data.amount}</Text>
                </View>
            </TouchableOpacity>
            </View>
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

const TopView = (props) =>{
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

                        <View style={{flexDirection: "row", justifyContent: "flex-start", borderWidth: 1, borderRadius: 10, margin: 10, padding: 10, backgroundColor: "#fff" }}>
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

const BottomNav = (props) =>{

    return (
        <View style ={styles.buttomNav}>
            <TouchableOpacity>
              <FontAwesome name="home" size={35} color="black" />  
            </TouchableOpacity>
             <TouchableOpacity>
                 <FontAwesome5 name="user" size={24} color="black" />
            </TouchableOpacity>
        </View>
    )
}



const FinialHomePage = ({navigation}) =>{
    return(
        <View style ={{flex : 1, justifyContent: "space-evenly"}}>
            <View>
            <TopView nav = {navigation}/>
            </View>
            
            {/* Categories Section */}

            <View >
                <Categories nav = {navigation} />
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

              
            <View style = {styles.productView}>
                <ProductsPage nav ={navigation} />
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
                style={{marginRight: 10, marginLeft: 10, paddingRight: 5}}
                >   
                <View style = {styles.productView}>
                    <ProductsPage nav ={navigation} />
                </View>
            </ScrollView>
            <View style = {styles. cat}>
                <Text style = {styles.text}>Samsumg</Text>
                <TouchableOpacity>
                    <Text style = {styles.text}> Veiw more</Text>
                </TouchableOpacity>
            </View>
            <View style = {styles.productView}>
                <ProductsPage nav ={navigation} />
            </View>


            </ScrollView>


            {/* Bottom navigation area */}

            <View style = {{alignItems: "center",backgroundColor: "#fff", borderTopWidth: 1}}>
                <BottomNav  />
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
        borderColor: "#FF6500",
        backgroundColor: "#fff"

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
        borderRadius: 10,
        padding: 10,
        marginRight: 5,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff"

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