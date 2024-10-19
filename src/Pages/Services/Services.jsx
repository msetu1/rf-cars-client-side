import CommonBanner from "../../Ui/CommonBanner/CommonBanner";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import useServices from "../../hooks/useServices";

const Services = () => {
  const services =useServices()
  return (
    <div className="mb-20">
      <CommonBanner bannerText={"Services"} bannerBtn={"Services"} />
      <h1 className="max-w-7xl mx-auto text-4xl font-bold mt-16 mb-5">All Services</h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16 max-w-7xl mx-auto">
        {
            services?.map(item =><ServiceCard item={item} key={item._id}/>)
        }
      </div>
    </div>
  );
};

export default Services;
