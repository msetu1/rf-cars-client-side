import { MdDelete } from "react-icons/md";

const MyBookingTableRow = ({ item, idx, handleDeleted,handleUpdated }) => {
  const { img, name, price, date, email, _id } = item;

  return (
    <tr className="border-b border-slate-200 hover:bg-gray-50">
      <td className="h-12 px-6 py-3 text-xl transition duration-300 border-slate-200">
        {idx + 1}
      </td>

      <td className="text-xl transition duration-300 border-slate-200 ">
        <img className="w-[80px] h-[60px] rounded-lg" src={img} alt="" />
      </td>

      <td className="h-12 px-6 py-3 text-xl transition duration-300 border-slate-200">
        <p className="text-[#2F327D] font-medium">{name}</p>
      </td>
      <td className="h-12 px-6 py-3 text-xl transition duration-300 border-slate-200">
        <p className="font-medium">{email}</p>
      </td>

      <td className="h-12 px-6 py-3 text-xl font-bold transition duration-300 border-slate-200 text-[#FF3811]">
        {price}
      </td>

      <td className="h-12 px-6 py-3  transition duration-300 border-slate-200 font-bold  text-xl">
        {date}
      </td>

      {/* button for edit */}
      <td className=" px-6 py-3 text-sm transition duration-300 border-slate-200 flex space-x-2">
        <button
          onClick={() => handleUpdated(_id)}
          className="font-bold btn"
        >
          Confirm
        </button>
        <button
          onClick={() => handleDeleted(_id)}
          className="text-2xl font-bold bg-red-600 p-2 text-white rounded-lg hover:bg-black transition duration-200"
        >
          <MdDelete />
        </button>
      </td>
    </tr>
  );
};

export default MyBookingTableRow;
