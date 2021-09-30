import{useParams, Link} from 'react-router-dom';
import {useEffect,useState} from 'react'
import SpinnerComponent from '../components/spinner';
import {
    Card, CardText, CardBody, CardSubtitle,Button, Container, Row, NavLink
  } from 'reactstrap';

export default function CategoriaProductos(){

    const {id } = useParams();

    const [ categoriaProductos, setCategoriaProductos] = useState([])
    const[loading, setLoading]= useState(false)
    
    const getCategoriaProductos= async ()=>{
        try{
            setLoading(true)
            const response = await fetch(
                `https://fakestoreapi.com/products/category/${id}`
                );
            const data= await response.json()
            setCategoriaProductos(data)
            setLoading(false)
            console.log(data)
        }catch(error){
            alert(error)
        }
    }
    useEffect(()=>{
        getCategoriaProductos()
    },[id])
    if (loading){
        return(
            <SpinnerComponent/>
        )}
        return (
            <>
            <h1 style={{textAlign:'center', margin:'2%'}}>Listado de Productos</h1>
            <Container justifyContent='space-around'>
                <Row xs="1" sm="3" md="4">     
                { categoriaProductos.map((elemento)=> (
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