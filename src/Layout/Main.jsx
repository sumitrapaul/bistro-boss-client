import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Footer from "../pages/Shared/Footer/Footer";


const Main = () => {
    const location = useLocation()
    const noNavFoot = location.pathname.includes('login') || location.pathname.includes('register')
    return (
        <div>
            {noNavFoot || <Navbar/>}
            <Outlet/>
            {noNavFoot || <Footer/>}
            
        </div>
    );
};

export default Main;