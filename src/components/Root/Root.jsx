import { Outlet } from "react-router-dom";
import Navber from "../Navber/Navber";
import Footer from "../Footer/Footer";
import Navber2nd from "../Navber/Navber2nd";


const Root = () => {
    return (
        <div className="bg-[#dec3a9c9]">
           {/* <Navber/> */}
           <Navber2nd/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;