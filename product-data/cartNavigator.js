import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CartBackend } from '../product-data/cartEngine';


export  const CatNav =({navigation}) => {
  const {getItemsCount} = useContext(CartBackend);
  return (
    <View style={styles.container}>
      <Text style={styles.text} 
        onPress={() => {
          navigation.navigate('cartScreen', {name: 'cartScreen'});
        }}
      >Cart ({getItemsCount()})</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    backgroundColor: '#FF3400',
    height: 32,
    padding: 12,
    borderRadius: 32 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',}

})