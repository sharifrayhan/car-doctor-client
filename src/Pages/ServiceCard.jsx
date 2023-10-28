import { Link } from "react-router-dom";


const ServiceCard = ({ service }) => {
    const { _id, title, img, price } = service;
    return (
        <div className="card max-w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl h-[250px]" />
            </figure>
            <div className="card-body">
                <h2 className="card-title font-bold">{title}</h2>
                <div className=" flex justify-between">
                <p className="text-md font-semibold text-orange-500">Price: ${price}</p>
                    <Link to={`/book/${_id}`}>
                    <button><img className=" h-7" src="https://i.ibb.co/VBDcMVQ/arrow.png" alt="" /></button>
                    </Link>
                        
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;