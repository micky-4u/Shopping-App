import React, {useEffect, useState, useContext} from 'react';
import {Text, Image, View, ScrollView, SafeAreaView, Button, StyleSheet, TouchableOpacity} from 'react-native';
import { mainProductId } from '../product-data/products';
import { CartBackend } from '../product-data/cartEngine';
import { BottomNav } from './homeScreen';



export default function ProductDetails({route, navigation}) {

  const { productId } = route.params;
  const [product, setProduct] = useState({});

  const { addProduct } = useContext(CartBackend);  

  useEffect(() => {
    setProduct(mainProductId(productId));
  });

  function pushItemToCart() {
    addProduct(product.id);
    alert("Item added - see Carts")
  }

  return (
    <SafeAreaView style={{flex:1}}>
      <ScrollView style={{backgroundColor: "#fff", borderBottomEndRadius: 40, height: "80%"}}>
        <Image
          style={styles.image}
          source={product.imagePath}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.price}>GH$ {product.amount}</Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>

     <TouchableOpacity  onPress = {() => pushItemToCart()} title="Submit" style = {styles.loginBtn}  >
     <Text style ={{textAlign: "center", color: "#fff", fontSize: 20, fontWeight: "bold"}}>Add to Cart</Text>
    </TouchableOpacity>

      <View style = {{alignItems: "center",backgroundColor: "#fff", borderTopWidth: 1, position: "relative"}}>
                <BottomNav nav ={navigation} />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: 'black',
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 1,
    marginVertical: 20,
  },
  image: {
    marginTop: 20,
    height: 450,
    width: '95%',

  },
  infoContainer: {
    padding: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
    color: '#787878',
    marginBottom: 16,
  },
      loginBtn:{
        backgroundColor: "#FF6C00",
        marginTop: 20,
        padding: 15,
        marginRight: 10,
        marginLeft: 10,
        marginBottom: 20,
        borderRadius: 10,
        justifyContent: "space-evenly"
    },

});
