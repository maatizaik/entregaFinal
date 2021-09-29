import{useContext, } from 'react';
import CartContext from '../context/context';
import {Link} from 'react-router-dom'
import { doc,setDoc, Timestamp, collection } from "firebase/firestore";
import { getData } from '../firebase';


export default function Carrito(){
    const {cart, removeItem}= useContext(CartContext);
    const getTotalPrice = (cart) => {
        var total = 0;
        cart.forEach(element => {
            total += (element.price * element.count)  
        });
        return total;
    }

        


    const comprar= async() =>{
    
        let nombre= prompt('Ingrese su nombre');
        let email= prompt('Ingrese su dirección de e-mail');
        let telefono= prompt('Ingrese su numero de telefono');
        const userInfo = {
            name: nombre,
            mail: email,
            phone: telefono
        }
        const order =  {
            buyer: userInfo,
            items: cart,
            date: Timestamp.fromDate(new Date()), 
            total: getTotalPrice(cart)
            };
            
            const orderRef = doc(collection(getData(), "orders"));
            await setDoc(orderRef, order)
            alert('la compra se ha generado correctamente')
    }
   

        return(
            <>
            
                {cart.length > 0 && (
                    <>
                { cart.map((elemento)=> (
                <div style={{border: '1px solid black', display:'flex', margin:"5%"}}>
                    <img src={elemento.image} style={{margin:'1%', width:'10%', height:'10%'}} alt={elemento.description} />
                    <div style={{padding:'1%'}}>
                        <h3>Nombre Producto: {elemento.title}</h3>
                        <h3>Precio: {elemento.price}</h3>
                        <h3>Cantidad: {elemento.count}</h3>
                        <button danger key={`borrar-${elemento.id}`} onClick={() => removeItem(elemento.id)}>Sacar del Carrito</button>
                    </div>
                </div>
                ))}
                <h2>El monto total es {getTotalPrice(cart)}</h2>
                <button onClick={()=>comprar()}> Finalizar Compra </button>
                    </>
                )}
                {cart.length === 0 &&(
                    <>
                        <h1 style={{textAlign:'center', margin:'2%'}}>El carrito está vacío</h1>
                        
                    </>
                )}
                
                <button style={{margin:'2%'}}><Link to="/productos">Ver más Productos</Link></button>
            </>
        )
}


