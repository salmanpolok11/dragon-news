import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BrekingNews = () => {
  return (
    <div className=" flex  items-center bg-gray-400 p-2 rounded-lg">
      <button className="btn btn-accent ">Breking News</button>
      <Marquee className=" space-x-7" pauseOnHover={true} speed={70}>
        <Link to='/' className=" text-xl text-black">
        বিএনপি কার্যালয়ে তারা নিজেরা তালা মেরে রেখেছে, বললেন ডিএমপি কমিশনার..{" "}
        </Link>
        <Link to='/' className=" text-xl text-black">
        আবার ট্রাকে পণ্য বিক্রি শুরু টিসিবির, আজ ঢাকার যে ৩০টি স্থানে পাওয়া যাচ্ছে.{" "}
        </Link>

      </Marquee>
    </div>
  );
};

export default BrekingNews;
