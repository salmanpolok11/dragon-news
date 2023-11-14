import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  console.log(news);

  const { title , image_url , details , _id } = news;

  return (
    <div>
      <section>
        <div className="card p-4 bg-base-100 shadow-xl">
          <figure>
            <img
              src={image_url}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
 
 {
   details.length > 200 ?
   <p>{details.slice(0 , 150)} <Link to={`/news/${_id}`} className=" text-xl text-blue-500"> Read More.. </Link> </p>  :
   <p>{details}</p>
 }

          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsCard;
