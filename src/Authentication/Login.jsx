import { useLocation, useNavigate } from "react-router-dom";
import useUsers from "../hooks/useUsers";
import Swal from "sweetalert2";
import axios from "axios";

const Login = () => {
  const {signIn}=useUsers()
  const location = useLocation();
  const navigate = useNavigate();

    const onSubmit=e=>{
      e.preventDefault()
      const form=e.target;

      const email=form.email.value;
      const password=form.password.value;
      console.log(name,email,password);

      signIn(email,password)
      .then(result=>{
        const loggedUser=result.user;
        console.log(loggedUser);

        axios.post('http://localhost:5000/bookings')
        .then(res=>{
          console.log(res.data);
          if(res.data){
            navigate(location?.state ? location.state : "/")
          }
        })
        // console.log(result.user);
        // navigate(location?.state ? location.state : "/");
        // Swal.fire({
        //   title: "Success",
        //   text: "User Logged is successfully",
        //   icon: "success",
        //   confirmButtonText: "Ok",
        // });
      })
      .catch(error=>{
        console.error(error);
        Swal.fire({
          title: "Error!",
          text: "Invalid email and password",
          icon: "error",
          confirmButtonText: "Ok",
        });
      })

    }
    return (
        <div>
            <div className="">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={onSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button type="onSubmit" className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;