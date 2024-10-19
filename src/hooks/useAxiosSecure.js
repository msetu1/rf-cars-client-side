import axios from "axios";
import { useEffect } from "react";
import useUsers from "./useUsers";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: "https://rf-car-server-side.vercel.app",
  withCredentials: true,
});
const useAxiosSecure = () => {
  const { logOut } = useUsers();
  const navigate = useNavigate();
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        if (error.response.status === 401 || error.response.status === 403) {
          logOut()
            .then(() => {
              navigate("/");
            })
            .catch((error) => console.log(error));
        }
      }
    );
  }, []);
  return axiosSecure;
};

export default useAxiosSecure;
