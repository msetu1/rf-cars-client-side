import Swal from "sweetalert2";
import useUsers from "../hooks/useUsers";

const Register = () => {
  const {createUser}=useUsers()
    const onSubmit=e=>{
        e.preventDefault()
        const form=e.target;

        const name=form.name.value;
        const email=form.email.value;
        const password=form.password.value;
        console.log(name,email,password);

        createUser(email,password)
        .then(result=>{
          console.log(result.user);
          Swal.fire({
            title: "Success",
            text: "User register is successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        })
        .catch(error=>{
          console.error(error);
          Swal.fire({
            title: "Success",
            text: "Something want wrong",
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
            <span className="label-text">Name</span>
          </label>
          <input type="name" name="name" placeholder="name" className="input input-bordered" required />
        </div>
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
        </div>
        <div className="form-control mt-6">
          <button type="onSubmit" className="btn btn-primary">Register</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;