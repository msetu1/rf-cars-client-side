
const ServiceSection1 = ({singleService}) => {
    const {title, img,description,name,details }=singleService;
    return (
        <div>
            <img className="w-full rounded-xl" src={img} alt="" />
            <h2 className="mt-8 mb-5 font-bold text-4xl">{title}</h2>
            <p>{description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-5 gap-y-8 mt-16">
<div>
    <h2>name: {name}</h2>
</div>
            </div>
        </div>
    );
};

export default ServiceSection1;