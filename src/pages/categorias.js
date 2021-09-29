import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    
  } from 'reactstrap';

export default function Categorias(){

    const [ categorias, setCategorias] = useState([])
    
    const getCategorias= async ()=>{
        try{
            
            const response = await fetch('https://fakestoreapi.com/products/categories')
            const data= await response.json()
            setCategorias(data)
            console.log(data)
        }catch(error){
            alert(error)

        }
    }
    useEffect(()=>{
        getCategorias()
    },[])
    
    return (
        <>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Categorías de Productos
              </DropdownToggle>
              <DropdownMenu right>
              { categorias.map((elemento)=> (
                <DropdownItem>
                <Link to={`/categoria-producto/${elemento}`} value={elemento}>Ver productos en la categoria {elemento}</Link>
                </DropdownItem>
                ))} 
              </DropdownMenu>
            </UncontrolledDropdown>   
        </>
    );  
}