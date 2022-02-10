import React, { useEffect, useState } from "react";
import { Fragment } from "react/cjs/react.production.min";

export default function Logout(props) {
useEffect(()=> {
  if( localStorage.getItem('user')){
    localStorage.removeItem('user')
   props.setPage("MainPage")
  
  }
},[])
 return (
   <Fragment>
     <h1>Logged out</h1>
   </Fragment>
 ) 
 
}