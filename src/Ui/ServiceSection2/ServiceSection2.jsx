import { Link } from "react-router-dom";
import CheckOut from "../../components/ChackOut/CheckOut";

const ServiceSection2 = ({singleService}) => {
    const {price }=singleService;
    return (
        <div>
           <h2 className="font-bold text-2xl mb-5">Price: $ {price}</h2>
           <Link to='/checkOut'>
           <button className="inline-flex items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded whitespace-nowrap bg-red-500 hover:bg-black focus:bg-red-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-red-500 disabled:bg-red-500 disabled:shadow-none">
                <span>Proceed Checkout</span>
              </button>
           </Link>

           <div className="hidden">
    <CheckOut singleService={singleService} />
           </div>
        </div>
    );
};

export default ServiceSection2;