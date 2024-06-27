import "./App.css";
import Routering from "./Routering";
import react, {useEffect, useContext} from 'react'
import {auth} from './Utility/Firebase'
import {Type} from './Utility/action.type'
import { DataContext } from "./Component/DataProvider/DataProvider";
import { useContext, useEffect } from "react";

const [{user}, dispatch] = useContext(DataContext);
function App() {
  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
    if(authUser){
      dispatch({
        type: Type.SET_USER,
        user: authUser
      })
    }
    else{
      dispatch({
        type: Type.SET_USER,
        user: null
      })
    }
    })
  },[])
  return (
    <>
      <Routering />
    </>
  );
}

export default App;
