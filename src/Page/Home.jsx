import { useLoaderData } from "react-router-dom";
import BrekingNews from "../Components/BrekingNews";
import Header from "../Components/Header";
import LeftSideNav from "../Components/LeftSideNav";
import Navbar from "../Components/Navbar";
import RightSideNav from "../Components/RightSideNav";
import NewsCard from "../Components/NewsCard";

const Home = () => {

 const news =  useLoaderData([])
 console.log(news);

  return (
    <div className="p-3">
      <Header />
        <BrekingNews/>
      <Navbar />
    
      <section className=" grid grid-cols-1 md:grid-cols-4 gap-6 ">
        <div className=" border  p-4">
           <LeftSideNav/>
        </div>
        <div className=" md:col-span-2 border space-y-4  p-4">
          {
              news.map( aNews => <NewsCard  key={aNews._id} news={aNews} ></NewsCard>)
          }
        </div>
        <div className=" border  p-4">
           <RightSideNav/>
        </div>
      </section>
    </div>
  );
};

export default Home;
