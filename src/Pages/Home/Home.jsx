import { useLoaderData } from "react-router-dom";
import ImageCard from "../Shared/imageCard";


const Home = () => {
  
  const places = useLoaderData()






  return (
    
    <>

  

      {/* card */}

      <div   className=" max-w-6xl mx-auto  grid grid-cols-2 col-span-2 md:grid-cols-3 gap-4">
       {
        places.map(place=><ImageCard key={place.id}    place={place}></ImageCard>)
       }
        </div>

        </>
     
      );
};

      export default Home;
