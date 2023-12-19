import React,{useEffect,useState} from "react";
import {useNavigate} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useFirebase } from "../context/firebase";


const BookCard =(props)=>{
const firebase=useFirebase();
const navigate=useNavigate();
const[url,setURL]=useState(null);

useEffect(()=>{
 firebase.getImageURL(props.imageURL).then((url)=> setURL(url));
});

console.log(props);

return(
    <Card style={{ width: '18rem', margin:"25px" }}>
    <Card.Img variant="top" src="https://firebase.google.com/images/social.png" />
    <Card.Body>
      <Card.Title>{props.name}</Card.Title>
      <Card.Text>
      This book has a name {props.name} and this book sold by Ritesh
      and this book costs Rs.{props.price}
      </Card.Text>
      <Button 
      onClick={(e)=>navigate(`book/view/${props.id}`)}
      variant="primary">view</Button>
    </Card.Body>
  </Card>
)

};

export default BookCard;