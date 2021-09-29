import React, { useEffect } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import CartContext from '../context/context';
import{useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Badge } from 'reactstrap';
import {Link} from 'react-router-dom'


export default function CartWidget() {
    const {cart}= useContext(CartContext)
    const getTotalQuantity = (cart) => {
        var totalQ = 0;
        cart.forEach(element => {
            totalQ += element.count
        });
        return totalQ;
    }
    useEffect(()=>{
        getTotalQuantity(cart)
    },[cart])
    return (
        <div>
            <Link to="/carrito">
                <FontAwesomeIcon icon={faShoppingCart}/>
                <Badge color="secondary"><h6 style={{color:'darkGrey'}}>{getTotalQuantity(cart)}</h6></Badge>
            </Link>
        </div>
    )
}