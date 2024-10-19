import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useUsers = () => {
    const all =useContext(AuthContext)
    return all
   
};

export default useUsers;