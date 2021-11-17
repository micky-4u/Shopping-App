import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// navigation import
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// importing Screens
import CartScreen from './screens/cartScreen'
import WelcomeScreen from './screens/welcomeScreen';
import SignUpScreen from './screens/signUpScreen';
import LoginScreen from './screens/loginScreen';
import HomeScreen from './screens/homeScreen'
import ProductDetails from './screens/produceDetails'
import  Checkout from './screens/checkout'
import { CatNav } from './product-data/cartNavigator';
import { CartProvider } from './product-data/cartEngine';

const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <CartProvider>


      <NavigationContainer >
        <Stack.Navigator 
        screenOptions={{headerShown: false}}
          >
          <Stack.Screen name="CartScreen" component={CartScreen} /> 
          <Stack.Screen name="Checkout" component={Checkout} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
          <Stack.Screen name="ProductDetails" component={ProductDetails}/>
          <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
        </Stack.Navigator> 
      </NavigationContainer>

            </CartProvider>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
