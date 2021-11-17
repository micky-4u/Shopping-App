import React, {createContext, useState} from 'react';
import { mainProductId } from '../product-data/products';


export const CartBackend = createContext();
    
export const CartProvider=(props) =>{
  const [items, setItems] = useState([]);

   const addProduct=(id)=> {
    
    const product = mainProductId(id);
    setItems((prevItems) => {
      const item = prevItems.find((item) => (item.id == id));
      if(!item) {
          return [...prevItems, {
              id,
              qty: 1,
              product,
              totalPrice: items.amount 
          }];
      }
      else { 
          return prevItems.map((item) => {
            if(item.id == id) {
              item.qty++;
              item.totalPrice += items.amount;
            }
            return item;
          });
      }
    });
}
function getItemsCount() {
      return items.reduce((sum, item) => (sum + item.qty), 0);
  }

  function getTotalPrice() {
      return items.reduce((sum, item) => (sum + item.totalPrice), 0);
  }  

  return (
    <CartBackend.Provider 
      value={{items, setItems, getItemsCount, addProduct, getTotalPrice}}>
      {props.children}
    </CartBackend.Provider>
  );
}