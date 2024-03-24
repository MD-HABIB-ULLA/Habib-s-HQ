import { Outlet } from "react-router-dom";
import Navber from "../Navber/Navber";
import Footer from "../Footer/Footer";


const Root = () => {
    return (
        <div className="bg-[#dec3a9c9]">
           <Navber/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;