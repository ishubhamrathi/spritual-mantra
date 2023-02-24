import Main from "../Main/Main";
import Navbar from "../Navbar/Navbar";
import Tiles from "../Tiles/Tiles";

const Dashboard = (props) =>{
    return (
        <>
        <Navbar/>
        <Main name={props.name}/>
        <Tiles/>
        </>
    )
}
export default Dashboard;