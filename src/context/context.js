import React, { createContext, useState } from 'react';


export const CartContext = createContext([]);//1 - JSON VACIO

export const CartProvider = ({children}) => {
     //2 - creacion de un estado
    const [cart, setCart]=useState([]);
    
    const removeItem = (elementoId) => {
      const cartBorrador = [...cart];
      const cleanCart = cartBorrador.filter(elemento => elemento.id !== elementoId);
      setCart(cleanCart);
  }


  return (
    <CartContext.Provider value={{cart, setCart, removeItem}}>
      {children}
    </CartContext.Provider>
  )
  }
  export default CartContext
