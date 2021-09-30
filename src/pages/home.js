
import {useState, useEffect} from 'react';
import SpinnerComponent from '../components/spinner';
import {
    Card, CardText, CardBody, CardSubtitle,Button, Container, Row, NavLink} from 'reactstrap';

export default function Home(){
    const [ productos, setProductos] = useState([])
    const[loading, setLoading]= useState(false)
    
    const getLimit= async ()=>{
        try{
            setLoading(true)
            const response = await fetch('https://fakestoreapi.com/products?limit=5')
            const data= await response.json()
            setProductos(data)
            console.log(data)
            setLoading(false)
        }catch(error){
            alert(error)

        }
    }
    useEffect(()=>{
        getLimit()
    },[])
    
    if (loading){
        return(
            <SpinnerComponent/>
            )
        }

    return (
        <>
        <h1 style={{textAlign:'center', margin:'2%'}}>Bienvenidos a FakeStore</h1>
        <h4 style={{textAlign:'center', margin:'2%'}}>Ultimos Productos añadidos</h4>
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
                            <Button color='secondary' active><NavLink href={`/producto-detalle/${elemento.id}`}>Ver detalle del producto</NavLink></Button>
                            </CardBody>
                        </Card>
                    </div>
                </>))}
            </Row>
        </Container>


           
           
        
        </>
    );
    }