import { createContext, useContext ,useState,useEffect} from 'react';
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged} from 'firebase/auth';

import {getFirestore,collection,addDoc,getDocs,getDoc,doc} from "firebase/firestore";
import {getStorage, ref, uploadBytes ,getDownloadURL} from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5bqu7HYyJqEz5FXx7t2f0WCnhjIKpMIA",
  authDomain: "busybuy-49bae.firebaseapp.com",
  databaseURL: "https://busybuy-49bae-default-rtdb.firebaseio.com",
  projectId: "busybuy-49bae",
  storageBucket: "busybuy-49bae.appspot.com",
  messagingSenderId: "131380952564",
  appId: "1:131380952564:web:fdec67b1fff074eef20da1"
};

// Initialize Firebase
 const firebaseApp = initializeApp(firebaseConfig);
 const firebaseAuth = getAuth(firebaseApp);
 const firestore=getFirestore(firebaseApp);
 const storage = getStorage(firebaseApp);

const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {

  const[user,setUser]=useState(null);
  useEffect(()=>{
    onAuthStateChanged(firebaseAuth ,(user)=>{
     if (user) setUser(user);
     else setUser(null);
    });
  },[]);
  const signupUserWithEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(firebaseAuth, email, password);
  };
  
  const signinUserWithEmailAndPassword=(email,password)=>{
        signInWithEmailAndPassword(firebaseAuth, email, password);
  };

 

  

  const hendleCreateNewListing =async (name,isbnNumber,price,coverPic)=>{
    const imageref= ref(storage, `uploads/images/${Date.now()}-${coverPic.name}`);
    const uploadResult= await uploadBytes(imageref,coverPic);
    return await addDoc(collection(firestore,'books'),{
      name,
      isbnNumber,
      price,
      imageURL:uploadResult.ref.fullPath,
      userId:user.uid,
      userEmail:user.email,
      displayNmae:user.displayName,
      photoURL:user.photoURL,

    })
  };

    const listAllBooks =()=>{
     return getDocs(collection(firestore,"books"))
    };

 const isLoggedIn=user?true:false;

 const getBookById= async(id)=>{
  const docRef= doc(firestore,"books",id);
  const result= await getDoc(docRef);
  console.log(result);

 };

 const getImageURL =(path)=>{
    return getDownloadURL(ref(storage,path));
 };

  return (
    <FirebaseContext.Provider value={{ signupUserWithEmailAndPassword,
     signinUserWithEmailAndPassword,
     isLoggedIn,
     hendleCreateNewListing,
     getImageURL,
     listAllBooks,
     getBookById,
     
     }}>
      {props.children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseProvider;
