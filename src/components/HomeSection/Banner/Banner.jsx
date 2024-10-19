import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
const Banner = () => {
  return (
    <div className="mt-10 mb-20 max-w-7xl mx-auto">
      <div className="carousel w-full h-[600px]">
        <div id="slide1" className="carousel-item relative w-full rounded-xl ">
          <img src={img1} className="w-full  " />
          <div className="absolute bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] h-full text-white pt-32 pl-32">
            <h2 className="text-6xl font-bold ">
              Affordable <br /> Price For Car <br /> Servicing
            </h2>
            <p className="mt-6 text-lg">
              There are many variations of passages of available, but <br /> the
              majority have suffered alteration in some form
            </p>
            <div className="space-x-4 mt-5">
              <button className="inline-flex items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded whitespace-nowrap bg-red-500 hover:bg-black focus:bg-red-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-red-500 disabled:bg-red-500 disabled:shadow-none">
                <span>Discover More</span>
              </button>
              <button className="inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded border border-white px-6 text-sm font-medium tracking-wide text-white shadow-lg shadow-white transition duration-300 hover:border-white hover:text-white hover:shadow-md hover:shadow-white  focus:border-white focus:text-white focus:shadow-md focus:shadow-white  focus-visible:outline-none disabled:cursor-not-allowed disabled:border-white disabled:text-white disabled:shadow-none">
                <span>Latest Project</span>
              </button>
            </div>
          </div>
          <div className="absolute bottom-24 end-24 ">
            <a
              href="#slide4"
              className=" text-white rounded hover:bg-black  px-4 text-4xl mr-3 bg-red-500"
            >
              ❮
            </a>
            <a
              href="#slide2"
              className=" text-white rounded hover:bg-black  px-4 text-4xl  bg-red-500"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src={img2}
            className="w-full"
          />
          <div className="absolute bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] h-full text-white pt-32 pl-32">
            <h2 className="text-6xl font-bold ">
              Affordable <br /> Price For Car <br /> Servicing
            </h2>
            <p className="mt-6 text-lg">
              There are many variations of passages of available, but <br /> the
              majority have suffered alteration in some form
            </p>
            <div className="space-x-4 mt-5">
              <button className="inline-flex items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded whitespace-nowrap bg-red-500 hover:bg-black focus:bg-red-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-red-500 disabled:bg-red-500 disabled:shadow-none">
                <span>Discover More</span>
              </button>
              <button className="inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded border border-white px-6 text-sm font-medium tracking-wide text-white shadow-lg shadow-white transition duration-300 hover:border-white hover:text-white hover:shadow-md hover:shadow-white  focus:border-white focus:text-white focus:shadow-md focus:shadow-white  focus-visible:outline-none disabled:cursor-not-allowed disabled:border-white disabled:text-white disabled:shadow-none">
                <span>Latest Project</span>
              </button>
            </div>
          </div>
          <div className="absolute bottom-24 end-24">
            <a href="#slide1" className="text-white rounded hover:bg-black  px-4 text-4xl mr-3 bg-red-500">
              ❮
            </a>
            <a href="#slide3" className="text-white rounded hover:bg-black  px-4 text-4xl mr-3 bg-red-500">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src={img3}
            className="w-full"
          />
          <div className="absolute bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] h-full text-white pt-32 pl-32">
            <h2 className="text-6xl font-bold ">
              Affordable <br /> Price For Car <br /> Servicing
            </h2>
            <p className="mt-6 text-lg">
              There are many variations of passages of available, but <br /> the
              majority have suffered alteration in some form
            </p>
            <div className="space-x-4 mt-5">
              <button className="inline-flex items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded whitespace-nowrap bg-red-500 hover:bg-black focus:bg-red-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-red-500 disabled:bg-red-500 disabled:shadow-none">
                <span>Discover More</span>
              </button>
              <button className="inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded border border-white px-6 text-sm font-medium tracking-wide text-white shadow-lg shadow-white transition duration-300 hover:border-white hover:text-white hover:shadow-md hover:shadow-white  focus:border-white focus:text-white focus:shadow-md focus:shadow-white  focus-visible:outline-none disabled:cursor-not-allowed disabled:border-white disabled:text-white disabled:shadow-none">
                <span>Latest Project</span>
              </button>
            </div>
          </div>
          <div className="absolute bottom-24 end-24">
            <a href="#slide2" className="text-white rounded hover:bg-black  px-4 text-4xl mr-3 bg-red-500">
              ❮
            </a>
            <a href="#slide4" className="text-white rounded hover:bg-black  px-4 text-4xl mr-3 bg-red-500">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src={img4}
            className="w-full"
          />
          <div className="absolute bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] h-full text-white pt-32 pl-32">
            <h2 className="text-6xl font-bold ">
              Affordable <br /> Price For Car <br /> Servicing
            </h2>
            <p className="mt-6 text-lg">
              There are many variations of passages of available, but <br /> the
              majority have suffered alteration in some form
            </p>
            <div className="space-x-4 mt-5">
              <button className="inline-flex items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded whitespace-nowrap bg-red-500 hover:bg-black focus:bg-red-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-red-500 disabled:bg-red-500 disabled:shadow-none">
                <span>Discover More</span>
              </button>
              <button className="inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded border border-white px-6 text-sm font-medium tracking-wide text-white shadow-lg shadow-white transition duration-300 hover:border-white hover:text-white hover:shadow-md hover:shadow-white  focus:border-white focus:text-white focus:shadow-md focus:shadow-white  focus-visible:outline-none disabled:cursor-not-allowed disabled:border-white disabled:text-white disabled:shadow-none">
                <span>Latest Project</span>
              </button>
            </div>
          </div>
          <div className="absolute bottom-24 end-24">
            <a href="#slide3" className="text-white rounded hover:bg-black  px-4 text-4xl mr-3 bg-red-500">
              ❮
            </a>
            <a href="#slide1" className="text-white rounded hover:bg-black  px-4 text-4xl mr-3 bg-red-500">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
