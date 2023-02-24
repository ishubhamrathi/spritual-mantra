import Main from "../Main/Main";
import Navbar from "../Navbar/Navbar";
import Tiles from "../Tiles/Tiles";
import Footer from "../Footer/Footer";
import Contact from "../Contact/Contact";
import About from "../About/About";
import Mantra from "../Mantra/Mantra";
import Meditation from "../Meditation/Meditation";
import Scriptures from "../Scriptures/Scriptures";
import Spirit from "../Spirit/Spirit";
import Health from "../Health/Health";

import { useGlobalContext } from "../context";

const Dashboard = (props) =>{
    const {menu} = useGlobalContext();

    return (
        <>
        <Navbar/>
        <Main name={props.name}/>
        <Tiles/>
        {/* <Mantra/> */}
        {menu==1 ? <Mantra/> : <div></div>}
        {menu==2 ? <Meditation/> : <div></div>}
        {menu==3 ? <Scriptures/> : <div></div>}
        {menu==4 ? <Spirit/> : <div></div>}
        {menu==5 ? <Health/> : <div></div>}

        <About/>
        <Contact/>
        <Footer/>
        </>
    )
}
export default Dashboard;