import { useState } from "react";
import useUsers from "../../hooks/useUsers";
import { MdModeEdit } from "react-icons/md";

const ServiceUpdate = ({item}) => {
    const { user } = useUsers() || {};


    const onSubmit=()=>{

    }


    // modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
    return (
        <div>
      <button
        onClick={toggleModal}
        className="text-2xl font-bold bg-[#67e8f9] p-2 text-white rounded-lg hover:bg-[#a5f3fc] transition duration-200"
      >
        <MdModeEdit />
      </button>
      {/* Modal for updating tourist */}
      <div
        className={`fixed inset-0 z-50 flex justify-center items-center transition-opacity duration-300 ${
          isModalOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Background overlay */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
            isModalOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={toggleModal}
        ></div>

        {/* Modal box */}
        <div
          className={`relative w-full max-w-4xl bg-white rounded-lg shadow transform transition-transform duration-300 ${
            isModalOpen ? "scale-100" : "scale-75"
          }`}
        >
          {/* Modal content */}
          <div className="relative rounded-lg max-h-[90vh] overflow-y-auto">
            {/* Modal header */}
            <div className="flex items-center justify-between p-4 border-b rounded-t">
              <button
                type="button"
                onClick={toggleModal}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm inline-flex justify-center items-center"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            {/* Modal body */}
            <div className="p-6">
              <form onSubmit={onSubmit}>
                <div className="flex flex-col md:flex-row lg:flex-row items-center gap-5 mt-5">
                  <div className="w-full lg:w-[50%]">
                    <label className="label">
                      <span className="label-text font-semibold text-md text-gray-600">
                        Tourists Spot Name
                      </span>
                    </label>
                    <input
                      type="text"
                      name="tourists_spot_name"
                    //   defaultValue={touristSpot?.tourists_spot_name}
                      className="text-left w-full rounded py-3 px-5 mt-2 text-sm border border-[#38bdf8]"
                      required
                    />
                  </div>
                  <div className="w-full lg:w-[50%]">
                    <label className="label">
                      <span className="label-text font-semibold text-md text-gray-600">
                        Photo URL
                      </span>
                    </label>
                    <input
                      type="img"
                      name="img"
                    //   defaultValue={touristSpot?.img}
                      className="text-left w-full rounded py-3 px-5 mt-2 text-sm border border-[#38bdf8]"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row lg:flex-row items-center gap-5 mt-5">
                  <div className="w-full lg:w-[50%]">
                    <label className="label">
                      <span className="label-text font-semibold text-md text-gray-600">
                        Average Cost
                      </span>
                    </label>
                    <input
                      type="number"
                      name="average_cost"
                    //   defaultValue={touristSpot?.average_cost}
                      className="text-left w-full rounded py-3 px-5 mt-2 text-sm border border-[#38bdf8]"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row lg:flex-row items-center gap-5 mt-5">
                 
                  <div className="w-full lg:w-[50%]">
                    <label className="label">
                      <span className="label-text font-semibold text-md text-gray-600">
                        Location
                      </span>
                    </label>
                    <input
                      type="text"
                      name="location"
                    //   defaultValue={touristSpot?.location}
                      className="text-left w-full rounded py-3 px-5 mt-2 text-sm border border-[#38bdf8]"
                      required
                    />
                  </div>
                </div>

                {/*  description */}
                <div className="mt-10">
                  <label className="text-[#5B5B5B] font-semibold">
                    Description
                  </label>
                  <textarea
                    type="text"
                    name="description"
                    // defaultValue={touristSpot?.description}
                    className="text-left w-full rounded py-3 px-5 mt-2 text-sm border border-[#38bdf8]"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="rounded border hover:bg-white hover:text-black px-4 py-2 font-bold mt-8 bg-[#38bdf8] border-[#38bdf8] text-white text-xl "
                >
                  Updated
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default ServiceUpdate;