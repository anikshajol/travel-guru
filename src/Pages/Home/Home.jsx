import { useLoaderData } from "react-router-dom";
import ImageCard from "../Shared/imageCard";
import { useEffect, useState } from "react";

const Home = () => {
  
  const places = useLoaderData()
  const [data,setData] = useState([])

  useEffect(()=>{
    fetch('./data.json')
    .then(res=>res.json())
    .then(data=>setData(data))
  },[])

  console.log(data);



  return (
    
    <>

  

      {/* card */}

      <div  className="grid grid-cols-2 col-span-2 md:grid-cols-3 gap-4">
       {
        places.map(place=><ImageCard key={place.id}    place={place}></ImageCard>)
       }
        </div>

        </>
     
      );
};

      export default Home;
