import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";

const Root = () => {
    return (
        <div>
            <div className="min-h-[120px]">
            <Navbar/>
            </div>
            <Outlet></Outlet>
            <Footer/>
        </div>
    );
};

export default Root;