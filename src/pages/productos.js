import {useState, useEffect} from 'react';
import {collection, getDocs} from 'firebase/firestore';
import {getData} from '../firebase/index';
import SpinnerComponent from '../components/spinner';
import React from 'react';
import {Link} from 'react-router-dom'
import {
    Card, CardText, CardBody,
     CardSubtitle,Button, Container, Row, NavLink
  } from 'reactstrap';

export default function Productos(){
    const [ productos, setProductos] = useState([])
    const[loading, setLoading]= useState(false)
    const getProductos= async ()=>{
        try{
            setLoading(true)
            const productsCollection = collection(getData(),'Productos');
            const productsSnapshot = await getDocs(productsCollection);
            const productsList = productsSnapshot.docs.map(doc => doc.data());
            setProductos(productsList)
            setLoading(false)
            

        }catch(error){
            alert(error)

        }
    }
    useEffect(()=>{
        getProductos()
    },[])
    if (loading){
        return(
            <SpinnerComponent/>
            )
        }
    return (
        <>
        <h1 style={{textAlign:'center', margin:'2%'}}>Listado de Productos</h1>
        <Container justifyContent='space-around'>
            <Row xs="1" sm="3" md="4">
                
            { productos.map((elemento)=> (
                <>

                    <div style={{width:"440px", height:"400px"}}>
                        <Card  style={{ borderColor: '#333' }}>
                            <img style={{width:"100px", height:"90px", margin:'10%', padding:'2%', }}   src={elemento.image} alt={elemento.description} />
                            <CardBody>
                            <h6 style={{fontSize:'1.1rem', textAlign:'center', justifyContent:'space-around'}}>{elemento.title}</h6>
                            <CardSubtitle tag="h7" className="mb-2 text-muted">Precio: {elemento.price}</CardSubtitle>
                            <CardText>Stock: {elemento.count}</CardText>
                            <Button color='secondary' active><Link to={`/producto-detalle/${elemento.id}`}>Ver detalle del producto</Link></Button>
                            </CardBody>
                        </Card>
                    </div>
                </>))}
            </Row>
        </Container>


           
           
        
        </>
    );  
}



