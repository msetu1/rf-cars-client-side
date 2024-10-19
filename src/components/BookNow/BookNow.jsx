import { useLoaderData } from "react-router-dom";
import useUsers from "../../hooks/useUsers";
import CommonBanner from "../../Ui/CommonBanner/CommonBanner";
import Swal from "sweetalert2";

const BookNow = () => {
  const service = useLoaderData();
  const { price } = service;
  const { user } = useUsers();

  const onSubmit = (e) => {
    e.preventDefault();
    const from = e.target;

    const name = from.name.value;
    const email = user?.email;
    const img = service?.img;
    const date = from.date.value;
    const price = from.price.value;
    const message = from.message.value;
    const info = {
      name,
      email,
      img,
      date,
      price,
      message,
    };
    console.log(info);

    fetch(`http://localhost:5000/bookings`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(info),
    }).then((res) =>
      res.json().then((data) => {
        console.log(data);
        Swal.fire({
          title: "Success",
          text: "Order Confirmed Successfully",
          icon: "success",
          confirmButtonText: "Ok",
        });
      })
    );
  };
  return (
    <div>
      <CommonBanner bannerText={"Book Now"} bannerBtn={"book now"} />
      <div className="mt-16 max-w-7xl mx-auto bg-[#F3F3F3] px-32 py-20 rounded-2xl">
        <form onSubmit={onSubmit} className="">
          <div className="flex items center gap-5 mb-8">
            <div className="w-full ">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="name"
                name="name"
                defaultValue={user?.displayName}
                placeholder="Name"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="w-full lg:">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                defaultValue={user?.email}
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>
          <div className="flex items center gap-5 mb-8">
            <div className="w-full ">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                type="date"
                name="date"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="w-full lg:">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="price"
                name="price"
                defaultValue={` $ ` + price}
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>
          <textarea
            name="message"
            placeholder="write your message"
            className="w-full h-[150px] p-5"
            id=""
          ></textarea>
          <div className="mt-10">
            <button
              type="submit"
              className="inline-flex items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded whitespace-nowrap bg-red-500 hover:bg-black focus:bg-red-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-red-500 disabled:bg-red-500 disabled:shadow-none w-full"
            >
              <span>Order Confirm</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookNow;
