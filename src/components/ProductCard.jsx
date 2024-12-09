import { Link, useNavigate } from "react-router-dom";

const ProductCard = ({ id, image, title, price }) => {
    const navigate = useNavigate();

    return (
        <div className="border  rounded shadow hover:shadow-lg w-[300px] " onClick={() => navigate(`/products/${id}`)}>
            <div className="p-4 flex flex-col gap-4 hover:cursor-pointer" >
                <img
                    src={image}
                    alt={title}
                    className="w-[300px] h-60 object-cover mb-2"
                />
                <h2 className="text-lg font-bold overflow-hidden text-ellipsis whitespace-nowrap">{title}</h2>
                <p className="text-gray-600">${price}</p>


            </div>


        </div>

    );
};

export default ProductCard;
