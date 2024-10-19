import Banner from "../../components/HomeSection/Banner/Banner";
import CoreFeature from "../../components/HomeSection/CoreFeature/CoreFeature";
import Location from "../../components/HomeSection/Location/Location";
import PopularProducts from "../../components/HomeSection/PopularProducts/PopularProducts";
import Service from "../../components/HomeSection/Service/Service";
import Team from "../../components/HomeSection/Team/Team";
import Testimonial from "../../components/HomeSection/Testimonial/Testimonial";
import About from "../About/About";

const Home = () => {
    return (
        <div>
            <Banner/>
            <About/>
            <Service/>
            <Location/>
            <PopularProducts/>
            <Team/>
            <CoreFeature/>
            <div className="max-w-7xl mx-auto">
            <Testimonial/>
            </div>
        </div>
    );
};

export default Home;