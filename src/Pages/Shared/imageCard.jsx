import { Link } from "react-router-dom";


const ImageCard = ({ place }) => {
    const { image, title, id } = place;



    return (




        <Link to={`destination/${id}`} className="text-white">

            <div>
                <img className=" w-[800px] h-[300px] object-cover rounded-lg" src={image} alt="" />
                <h2 className="text-xl">{title}</h2>
            </div>


        </Link>


    );
};

export default ImageCard;