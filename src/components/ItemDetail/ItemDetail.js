import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from '../ItemCount/ItemCount';
import { useState} from 'react';
import { Link } from 'react-router-dom';
import useCartContext from '../../Context/CartContext';
import Spinner from 'react-bootstrap/Spinner';



const ItemDetail = ( {data} ) => {
  const [ isInCart, setIsInCart] = useState(false);
  const {addToCart} = useCartContext();

  const added = (counter) => {
    setIsInCart (true);
    addToCart( data, counter)
    console.log ("Agregaste al carrito:", data, counter)
  };

  if (!data.img) { 
    return <Spinner animation="grow" variant="dark" style={ { margin:'250px', alignItems: 'center' }}>
    <span className="visually-hidden">Loading...</span>
  </Spinner>

  };
  
  return (
    <div >
    <Card style={{ width: '30rem', margin: "50px"}}>
      <Card.Img variant="top" src={data.img} />
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Sabor: <cite title="Source Title">{data.flavor}</cite></Card.Subtitle>
        <Card.Text>{data.description}</Card.Text>
        <Card.Img src="https://firebasestorage.googleapis.com/v0/b/gusteau-s.appspot.com/o/kisher.png?alt=media&token=89600b21-35db-4a38-b132-a3ad88a198b0" style={{width:"300px", margin:"10px 0 20px 0"}}></Card.Img>
        <Card.Subtitle >Precio: ${data.price}</Card.Subtitle>
        { isInCart ?
            <div style={{margin:"0 0 30px 0"}}>
            <Button variant="warning" style={{margin:'10px'}} as={Link} to="/cart" size="sm">Terminar compra</Button> 
            <Button variant="warning" style={{margin:'10px'}} as={Link} to="/tienda" size="sm">Seguir comprando</Button>
            </div>
        :
          <ItemCount stock={5} initial={1} onAdd={added} />
        }
      </Card.Body>
    </Card>
    </div>
  );
}

export default ItemDetail;



