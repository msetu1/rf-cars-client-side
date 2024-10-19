import img1 from "../../../assets/location/Group 32.png";
import img2 from "../../../assets/location/Group 34.png";
import img3 from "../../../assets/location/Group 35.png";

const Location = () => {
  return (
    <div className="max-w-7xl mx-auto mb-20">
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-x-10 gap-y-16 bg-black px-[120px] py-20 rounded-xl">
        <div className="flex items-center text-white gap-3">
          <img src={img1} alt="" />
          <div>
            <p>We are open monday-friday</p>
            <h2 className="text-xl font-bold mt-2">7:00 am - 9:00 pm</h2>
          </div>
        </div>
        <div className="flex items-center text-white gap-3">
          <img src={img2} alt="" />
          <div>
            <p>Have a question?</p>
            <h2 className="text-xl font-bold mt-2">+2546 251 2658</h2>
          </div>
        </div>
        <div className="flex items-center text-white gap-3">
          <img src={img3} alt="" />
          <div>
            <p>Need a repair? our address</p>
            <h2 className="text-xl font-bold mt-2">Liza Street, New York</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
