import axios from "axios";
import { useEffect } from "react";
import useUsers from "./useUsers";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true
});
const useAxiosSecure = () => {
    const {logOut}=useUsers()
    const navigate =useNavigate()
  useEffect(() => {
    axiosSecure.interceptors.response.use(res => {
        return res;
      }, error => {
        console.log("error track in the interceptor", error.response);
        if (error.response.status === 401 ||error.response.status === 403) {
          console.log("logout  the user");
          logOut()
          .then(()=>{
            navigate('/')
          })
          .catch(error=>
            console.log(error)
          )
        }
      }
    );
  }, []);
  return axiosSecure;
};

export default useAxiosSecure;
