import CommonText from "../../../Ui/CommonText/CommonText";
import img1 from "../../../assets/icons/person.svg";
import img2 from "../../../assets/icons/check.svg";
import img3 from "../../../assets/icons/deliveryt.svg";
import img4 from "../../../assets/icons/Group 38729.svg";
import img5 from "../../../assets/icons/group.svg";
import img6 from "../../../assets/icons/Wrench.svg";

const CoreFeature = () => {
  return (
    <div className="mb-20">
      <CommonText
        subText={`Core Feature`}
        header={`Why Choose Us`}
        shortDes={`the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. `}
      />
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-5 max-w-7xl mx-auto">
        <div className="text-center hover:bg-red-500   py-5 rounded-xl">
          <div className="flex items-center justify-center ">
            <img src={img1} alt="" />
          </div>
          <p className="text-gray-500 font-semibold mt-2 text-xl ">24/7 Support</p>
        </div>
        <div className="text-center hover:bg-red-500 hover:text-white  py-5 rounded-xl">
          <div className="flex items-center justify-center">
            <img src={img2} alt="" />
          </div>
          <p className="text-gray-500 font-semibold mt-2 text-xl ">24/7 Support</p>
        </div>
        <div className="text-center hover:bg-red-500 hover:text-white  py-5 rounded-xl">
          <div className="flex items-center justify-center">
            <img src={img3} alt="" />
          </div>
          <p className="text-gray-500 font-semibold mt-2 text-xl ">24/7 Support</p>
        </div>
        <div className="text-center bg-red-500   py-5 rounded-xl">
          <div className="flex items-center justify-center">
            <img src={img4} alt="" />
          </div>
          <p className="font-semibold mt-2 text-xl text-white">24/7 Support</p>
        </div>
        <div className="text-center hover:bg-red-500 hover:text-white  py-5 rounded-xl">
          <div className="flex items-center justify-center">
            <img src={img5} alt="" />
          </div>
          <p className="text-gray-500 font-semibold mt-2 text-xl ">24/7 Support</p>
        </div>
        <div className="text-center hover:bg-red-500 hover:text-white  py-5 rounded-xl">
          <div className="flex items-center justify-center">
            <img src={img6} alt="" />
          </div>
          <p className="text-gray-500 font-semibold mt-2 text-xl ">24/7 Support</p>
        </div>
      </div>
    </div>
  );
};

export default CoreFeature;
