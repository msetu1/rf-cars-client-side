import person from '../../assets/images/about_us/person.jpg'
import parts from '../../assets/images/about_us/parts.jpg'
const About = () => {
  return (
    <div className="max-w-7xl mx-auto mb-40">
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-[50%]  relative">
            <img className='w-[90%] h-[400px] rounded-xl' src={person} alt="" />
           <div className="absolute top-64 end-0">
            <img className='w-[300px] h-[250px] rounded-xl' src={parts} alt="" />
           </div>
          </div>
          <div className="w-full lg:w-[50%] ">
          <h3 className="text-red-500 font-bold text-xl mb-4">About Us</h3>
            <h1 className="text-5xl font-bold">
              We are qualified <br /> & of experience <br /> in this field
            </h1>
            <p className="py-6">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
            <p className="py-6">
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which don't look even slightly
              believable.
            </p>
            <button className="inline-flex items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded whitespace-nowrap bg-red-500 hover:bg-black focus:bg-red-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-red-500 disabled:bg-red-500 disabled:shadow-none">
            <span>Get More Info</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
