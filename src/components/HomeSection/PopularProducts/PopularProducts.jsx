import CommonText from "../../../Ui/CommonText/CommonText";
import img1 from '../../../assets/images/products/1.png'
import img2 from '../../../assets/images/products/2.png'
import img3 from '../../../assets/images/products/3.png'
import img4 from '../../../assets/images/products/4.png'
import img5 from '../../../assets/images/products/5.png'
import img6 from '../../../assets/images/products/6.png'
import rating from '../../../assets/Group 46.png';

const PopularProducts = () => {
    return (
        <div className="lg:my-20">
            <CommonText subText={`Popular Products`}
        header={`Browse Our Products`}
        shortDes={`the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  `} />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16 max-w-7xl mx-auto">

        <div className="text-center rounded-xl drop-shadow-lg border bg-base-100">
         <div>
         <div className="flex items-center justify-center bg-[#F3F3F3] rounded-xl m-5 py-5">
            <img className="h-[200px] w-[250px] " src={img1} alt="" />
          </div>
          <div className="flex items-center justify-center">
          <img className="mt-4" src={rating} alt="" />
          </div>
          <h2 className=" font-bold mt-2 text-2xl my-2">Cools Led Light</h2>
          <p className="text-xl font-bold text-[#FF3811] mb-5">$ 20.00</p>
         </div>
        </div>
        <div className="text-center rounded-xl drop-shadow-lg border bg-base-100">
         <div>
         <div className="flex items-center justify-center bg-[#F3F3F3] rounded-xl m-5 py-5">
            <img className="h-[200px] w-[250px] " src={img2} alt="" />
          </div>
          <div className="flex items-center justify-center">
          <img className="mt-4" src={rating} alt="" />
          </div>
          <h2 className=" font-bold mt-2 text-2xl my-2">Cools Led Light</h2>
          <p className="text-xl font-bold text-[#FF3811] mb-5">$ 20.00</p>
         </div>
        </div>
        <div className="text-center rounded-xl drop-shadow-lg border bg-base-100">
         <div>
         <div className="flex items-center justify-center bg-[#F3F3F3] rounded-xl m-5 py-5">
            <img className="h-[200px] w-[250px] " src={img3} alt="" />
          </div>
          <div className="flex items-center justify-center">
          <img className="mt-4" src={rating} alt="" />
          </div>
          <h2 className=" font-bold mt-2 text-2xl my-2">Car Engine Plug</h2>
          <p className="text-xl font-bold text-[#FF3811] mb-5">$ 20.00</p>
         </div>
        </div>
        <div className="text-center rounded-xl drop-shadow-lg border bg-base-100">
         <div>
         <div className="flex items-center justify-center bg-[#F3F3F3] rounded-xl m-5 py-5">
            <img className="h-[200px] w-[250px] " src={img4} alt="" />
          </div>
          <div className="flex items-center justify-center">
          <img className="mt-4" src={rating} alt="" />
          </div>
          <h2 className=" font-bold mt-2 text-2xl my-2">Car Engine Plug</h2>
          <p className="text-xl font-bold text-[#FF3811] mb-5">$ 20.00</p>
         </div>
        </div>
        <div className="text-center rounded-xl drop-shadow-lg border bg-base-100">
         <div>
         <div className="flex items-center justify-center bg-[#F3F3F3] rounded-xl m-5 py-5">
            <img className="h-[200px] w-[250px] " src={img5} alt="" />
          </div>
          <div className="flex items-center justify-center">
          <img className="mt-4" src={rating} alt="" />
          </div>
          <h2 className=" font-bold mt-2 text-2xl my-2">Car Engine Tire</h2>
          <p className="text-xl font-bold text-[#FF3811] mb-5">$ 20.00</p>
         </div>
        </div>
        <div className="text-center rounded-xl drop-shadow-lg border bg-base-100">
         <div>
         <div className="flex items-center justify-center bg-[#F3F3F3] rounded-xl m-5 py-5">
            <img className="h-[200px] w-[250px] " src={img6} alt="" />
          </div>
          <div className="flex items-center justify-center">
          <img className="mt-4" src={rating} alt="" />
          </div>
          <h2 className=" font-bold mt-2 text-2xl my-2">Car Engine Plug</h2>
          <p className="text-xl font-bold text-[#FF3811] mb-5">$ 20.00</p>
         </div>
        </div>
        </div>
        </div>
    );
};

export default PopularProducts;