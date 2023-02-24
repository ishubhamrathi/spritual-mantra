import React from "react";
import Dashboard from "../Dashboard/Dashboard";
import Login from "../Login/Login"
function Home(props) {
  return (
    <>  
        {props.name ? <Dashboard name={props.name}/>: <Login/>}
    </>
  );
}

export default Home;