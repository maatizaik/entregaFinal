import React from 'react';
import { Spinner,Alert } from 'reactstrap';

export default function SpinnerComponent() {
  return (
    
        <>
            <div style={{justifyItems:'center',verticalAlign:'middle', width:'100%', height:'50%', padding:'30%'}}>
                <Alert color="info" style={{display:'flex',justifyContent:'space-between'}} >
                    <Spinner type="grow" color="primary" />
                    <Spinner type="grow" color="secondary" />
                    <Spinner type="grow" color="success" />
                    <h1 style={{textAlign:'center'}}>Cargando</h1>
                    <Spinner type="grow" color="primary" />
                    <Spinner type="grow" color="secondary" />
                    <Spinner type="grow" color="success" />
                </Alert>  
            </div>
                
                      
            
        </>

  );
}