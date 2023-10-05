import { useState } from "react";


const ImageCard = ({ place }) => {
    const { image,title,description } = place;
    const [t,setTitle] = useState('')
    const [data,setData] = useState('')
   const handleCard = ()=>{
        setTitle(title)
        setData(description)
      
      }

  
    return (

        <div className="grid grid-cols-3">

       
        <div>
      <h2 className="text-5xl">{t}</h2>
    </div>
        

        <div onClick={handleCard} className="text-white">

            <div>

                <img className=" w-[800px] h-[300px] object-cover rounded-lg" src={image} alt="" />
              

            </div>


        </div>
        </div>

    );
};

export default ImageCard;