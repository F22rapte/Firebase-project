import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import { useFirebase } from "../context/firebase";

const BookDelailPage =()=>{

    const params=useParams();
    const firebase=useFirebase();

    const [data,setData]=useState(null);
    const[url,setURL]=useState(null);

    console.log(data);


    
    
    useEffect(()=>{
    firebase.getBookById(params.bookId).then((value)=>setData(value));

    },[params.bookId,firebase]);

    useEffect(()=>{
       if(data){
        const imageURL=data.imageURL;
        firebase.getImageURL(imageURL).then((url) => setURL(url));
       }
    },[data,firebase])
   
  return(
    <div className="container mt-5">

   
    <img src="https://firebase.google.com/images/social.png" alt="Firebase" width={500} />

   

    </div>
  )

};

export default BookDelailPage;