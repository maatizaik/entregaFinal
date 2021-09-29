import{useParams, Link} from 'react-router-dom';
import {useEffect,useState} from 'react';
import {doc, getDoc } from 'firebase/firestore';
import {getData} from '../firebase/index';
import ItemCount from '../components/itemCount';
import SpinnerComponent from '../components/spinner';



export default function ProductoDetalle(){
    const {id } = useParams();
    const [ producto, setProducto] = useState([])
    const[loading, setLoading]= useState(false)
    const [items, setItems]=useState(0)
    
    const getProducto= async ()=>{
        try{
            setLoading(true)
            const productoRef = doc(getData(), "Productos", `${id}`);
            const productoSnap = await getDoc(productoRef);
            setProducto(productoSnap.data())
            setLoading(false)

        }catch(error){
            alert(error)

        }
    }
    useEffect(()=>{
        getProducto()
    },[])
    if (loading){
        return(
            <SpinnerComponent/>
        )}
        
       

    return (
        <>
            
                <Link to="/productos">Volver a Productos</Link>
                <div>
                    <div style={{margin:'2%'}}>
                        <h1 >Usted está viendo la categoría {producto.category}. </h1>
                        <h2>Si quiere ver más productos de esta categoría presione<Link to={`/categoria-producto/${producto.category}`}> aquí</Link></h2>
                    </div>
                    
                    <div style={{ display:'flex',border: '1px solid black', margin:'10px', padding:"10%"}}>
                        <img src={producto.image} style={{width:'25%', height:'25%'}} alt={producto.description}/>
                        <div style={{marginLeft:'12%'}}>
                            <h2>Producto: {producto.title}</h2>
                            <h3>Precio: ${producto.price}</h3>
                            <h6>El stock del producto es: {producto.count}</h6>
                            <p style={{widht:'30%',height:'25%', marginTop:'2%', marginBottom:'2.5%'}}>{producto.description}</p>
                            <ItemCount items={items} onAdd={setItems} stock ={producto.count}  initial='0' producto={producto} cantidadCart='0'/>
                        </div>
                    </div>
                </div>
            
            
    
        </>)
    }