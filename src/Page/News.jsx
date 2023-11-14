import { useLoaderData, useParams } from "react-router-dom";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import RightSideNav from "../Components/RightSideNav";

const News = () => {
   const newses = useLoaderData()
   console.log(newses);
  const {id} = useParams()
  const idInt = parseInt(id)
 const aNews = newses.find( aNews => aNews.id === idInt)
 console.log(aNews );
  

  return (
    <div>
         <Header/>
          <Navbar/>
          <div className=" grid md:grid-cols-4">
                
                <div className=" col-span-3">
                    <h1>News Deatils</h1>
                     <p>{id}</p>
                </div>
               <div>
                  <RightSideNav/>
               </div>
          </div>

    </div>
  );
};

export default News;