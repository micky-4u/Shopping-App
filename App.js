import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// navigation import
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// importing Screens
import WelcomeScreen from './screens/welcomeScreen';
// import CartScreen from './screens/cartScreen'
import SignUpScreen from './screens/signUpScreen';
import LoginScreen from './screens/loginScreen';
import HomeScreen from './screens/homeScreen'
import ProductDetails from './screens/produceDetails'

const Stack = createNativeStackNavigator();

export default function App() {
  return (

      <NavigationContainer >
        <Stack.Navigator 
          screenOptions={{headerShown: false}}
        >
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="ProductDetails" component={ProductDetails} />
          {/* <Stack.Screen name="CartScreen" component={CartScreen} />  */}
          <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
          <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
        </Stack.Navigator> 
      </NavigationContainer>

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
