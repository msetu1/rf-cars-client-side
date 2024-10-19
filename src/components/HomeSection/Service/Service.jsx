import { useEffect, useState } from "react";
import CommonText from "../../../Ui/CommonText/CommonText";
import ServiceCard from "../../ServiceCard/ServiceCard";

const Service = () => {
  const [services, setService] = useState([]);
  useEffect(() => {
    fetch("https://rf-car-server-side.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <div>
      <CommonText
        subText={`Service`}
        header={`Our Service Area`}
        shortDes={`the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  `}
      />
      <div className="mt-16">
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16 max-w-7xl mx-auto">
          {services?.map((item) => (
            <ServiceCard item={item} key={item._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
