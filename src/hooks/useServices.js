import { useEffect, useState } from "react";

const useServices = () => {
  const [services, setService] = useState([]);
  useEffect(() => {
    fetch("https://rf-car-server-side.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return services;
};

export default useServices;
