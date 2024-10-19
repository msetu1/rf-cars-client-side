
const CommonText = ({subText,header,shortDes}) => {
    return (
        <div className="flex items-center justify-center">
            <div className="text-center">
<h3 className="text-red-500 font-bold text-xl">{subText}</h3>
<h2 className="text-4xl font-bold mb-3 mt-2">{header}</h2>
<p className="text-gray-500 max-w-[700px]">{shortDes}</p>

            </div>
        </div>
    );
};

export default CommonText;