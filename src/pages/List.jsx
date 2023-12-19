import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useFirebase } from "../context/firebase";
 
const ListingPage =()=>{

    const firebase= useFirebase();

    const [name,setName] =useState();
    const [isbnNumber,setIsbnNumber]=useState();
    const [price,setPrice]=useState();
    const [coverPic,setCoverPic]=useState();

     const hendleSubmit= async(e)=>{
      e.preventDefault();
      await firebase.hendleCreateNewListing(name,isbnNumber,price,coverPic);
     };

    return(
<div className="container mt-5">
         <Form onSubmit={hendleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control 
         onChange={(e)=>setName(e.target.value)}
         value={name}
        type="text" placeholder=" Book name" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>ISBN Number</Form.Label>
        <Form.Control
         onChange={(e)=>setIsbnNumber(e.target.value)}
         value={isbnNumber}
        type="text" placeholder="Isbn number" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label> Book Price</Form.Label>
        <Form.Control
         onChange={(e)=>setPrice(e.target.value)}
         value={price}
        type="text" placeholder="Book price" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>coverPic</Form.Label>
        <Form.Control
         onChange={(e)=>setCoverPic(e.target.files[0])}
        type="file" />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form> 
    </div>
    )


};
export default ListingPage; 