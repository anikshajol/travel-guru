import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";



const Details = () => {

    const {me} = useContext(AuthContext)

console.log(me);

  const {id} = useParams()
    const [data,setData] = useState([])

    useEffect(()=>{
      fetch('/data.json')
      .then(res=>res.json())
      .then(data=>setData(data))
    },[])

    console.log(data);

    


    return (
        <div className="text-white">
           <p>{me}</p>
           <p>{id}</p>
           <p className="text-white">
            {
              data.filter(place=>place.id==id).map(p=><h2 className="text-3xl text-center" key={p.id} >{p.title}</h2>)
            }
           </p>
        </div>
    );
};

export default Details;