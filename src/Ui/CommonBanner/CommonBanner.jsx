import { Link } from "react-router-dom";

const CommonBanner = ({ bannerText, bannerBtn }) => {
  return (
    <div className="max-w-7xl mx-auto my-10">
        <div
      className="hero min-h-[400px]  rounded-xl"
      style={{
        backgroundImage: "url('https://i.ibb.co.com/y6tZQMj/checkout.png')",
      }}
    >
      <div className="hero-overlay  rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]"></div>
      <div className="relative">
        <h1 className="mb-5 text-5xl text-primary-content font-bold mr-[750px]">{bannerText}</h1>
        <div className="flex items-center  gap-3 mt-4 text-primary-content ">
            <p className="hover:text-red-500 hover:underline-offset-4 hover:underline"><Link className="text-xl font-bold" to='/'>Home</Link></p>
            <p className="text-xl font-semibold">
           / {bannerBtn}</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CommonBanner;
