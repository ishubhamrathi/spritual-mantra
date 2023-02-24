import React from "react";
import { Link } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
// import { signOut } from "firebase/auth";
// import { auth } from "firebase/auth";
// import {app, auth} from "../../firebase";
function Home(props) {
  return (
    <>  
        {props.name ? <Dashboard name={props.name}/>: <h1>Login</h1>}
    </>
  );
}

export default Home;