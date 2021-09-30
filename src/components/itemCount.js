   
import React, {useContext} from 'react';
import {Link, } from 'react-router-dom';
import CartContext from '../context/context';
import {Button, ButtonToggle} from 'reactstrap';



export default function ItemCount({onAdd, stock, items, initial, producto}){
    const {cart, setCart}= useContext(CartContext)
    console.log(cart)
    
    const checkearProducto = (cart,producto, items ) => {
        const productoEncontrado = cart.find(elemento => elemento.id === producto.id);
        if (productoEncontrado) {
            productoEncontrado.count=items;

        }else {

          cart.push({
            ...producto,
            count: items,
          });}
        return cart;
      };
    const addItem = (item) => {
        const cartBorrador = [...cart];
        const cleanCart = checkearProducto(cartBorrador, producto,items)
        setCart(cleanCart);
        };

    const sumar= ()=>{
        if( items < stock){
            onAdd(items +1);
         
        }
    };
    const restar= () =>{
        if (items>initial){
            onAdd(items -1)
        }
    }

    
    

    return(
        <>

        <div style={{display:'flex', margin:'5%'}}>
            <h1>Enviar a Carrito {items}</h1>
        </div>
        <div>
            <div>
                <Button onClick={sumar} style={{marginLeft:'2%'}}>Agregar a carrito</Button>
                <Button onClick={restar} style={{marginLeft:'2%'}}> Quitar de Carrito </Button>
            </div>
            <br/>
            <div>
                {items>0&&<Button onClick={addItem} style={{marginLeft:'2%'}}><Link to="/carrito">Terminar Compra</Link></Button>}
                {/* {<ButtonToggle onClick={addItem} color='info' style={{marginLeft:'2%'}} active><Link to="/carrito">Ir al carrito</Link></ButtonToggle>} */}
            </div>

            
            
        </div>
        
        </>
    )
}