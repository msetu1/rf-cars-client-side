import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
const ServiceCard = ({ item }) => {
  const { title, img, price,_id } = item;
  return (
    <div className="rounded-xl drop-shadow-lg border bg-base-100">
      <div>
        <div className="flex items-center justify-center rounded-xl m-5 ">
          <img
            className="h-[250px] w-full rounded-xl border"
            src={img}
            alt=""
          />
        </div>
        <div className="mx-5 mb-8">
          <h2 className=" font-bold mt-2 text-2xl my-2">{title}</h2>
          <div className="flex items-center justify-between mt-5">
            <h3 className="font-bold text-xl text-[#FF3811]">
              Price: $ {price}
            </h3>
            <Link to={`/bookNow/${_id}`}>
            <p className="font-bold text-xl text-[#FF3811] flex items-center gap-3">
             <span className="text-gray-500"> Book Now</span> <FaArrowRight />
            </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
