import { useEffect, useState } from "react";
import useUsers from "../../hooks/useUsers";
import CommonBanner from "../../Ui/CommonBanner/CommonBanner";
import MyBookingTableRow from "../../components/MyBookingTableRow/MyBookingTableRow";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MyBooking = () => {
  const { user } = useUsers() || {};
  const [bookings, setBookings] = useState([]);
  const axiosSecure = useAxiosSecure();
  // const url =`https://rf-car-server-side.vercel.app/bookings/${user?.email}`
  const url = `/bookings/${user?.email}`;
  useEffect(() => {
    axiosSecure.get(url).then((res) => {
      setBookings(res.data);
    });
  }, [url, axiosSecure]);

  // handle delete
  const handleDeleted = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://rf-car-server-side.vercel.app/bookings/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remaining = bookings.filter(
                (booking) => booking._id !== id
              );
              setBookings(remaining);
            }
          });
      }
    });
  };
  const handleUpdated = (id) => {
    fetch(`https://rf-car-server-side.vercel.app/bookings/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "Confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount === 1) {
          Swal.fire({
            title: "Deleted!",
            text: "Booking service updated successfully",
            icon: "success",
          });
        }
      });
  };

  return (
    <div>
      <CommonBanner
        bannerText={`My Booking Service`}
        bannerBtn={`My Bookings`}
      />
      <div className="mt-16 max-w-7xl mx-auto">
        {bookings?.length === 0 ? (
          <div className="max-w-7xl flex items-center justify-center mx-auto h-[80vh]">
            <img
              className="h-full"
              src="https://i.ibb.co/3FVgSYq/3009287.jpg"
              alt=""
            />
          </div>
        ) : (
          <div className="container-class ">
            <div className="custom-scrollbar h-[80vh] overflow-y-auto overflow-x-auto bg-white rounded">
              <table className="min-w-full table-auto">
                <thead className="sticky top-0">
                  <tr className="bg-[#FF3811] text-white">
                    <th className="px-6 py-6 text-left text-xl font-semibold">
                      #
                    </th>
                    <th className="px-6 py-6 text-left text-xl font-semibold">
                      Image
                    </th>
                    <th className="px-6 py-6 text-left text-xl font-semibold">
                      Service title
                    </th>
                    <th className="px-6 py-6 text-left text-xl font-semibold">
                      Email
                    </th>
                    <th className="px-6 py-6 text-left text-xl font-semibold">
                      Price
                    </th>
                    <th className="px-6 py-6 text-left text-xl font-semibold">
                      Date
                    </th>
                    <th className="px-6 py-6 text-left text-xl font-semibold"></th>
                  </tr>
                </thead>
                <tbody>
                  {bookings?.map((item, idx) => (
                    <MyBookingTableRow
                      key={item?._id}
                      item={item}
                      idx={idx}
                      handleDeleted={handleDeleted}
                      handleUpdated={handleUpdated}
                    ></MyBookingTableRow>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyBooking;
