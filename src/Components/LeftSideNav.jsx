import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import LeftSideNews from "./LeftSideNews";

const LeftSideNav = () => {

  const [categories , setCategorise] = useState([])
  useEffect( ()=> {
      fetch('categories.json')
      .then( res => res.json())
      .then( data => setCategorise(data))
  },[])

  return (
    <div>
              <h1 className="  text-3xl font-semibold mb-4">All Caterogy {categories.length}</h1>
              {
                 categories.map( category => <NavLink
                 className='block text-xl mb-3'
                  to={`/category/${category.id}`}
                  key={category.id}> 
                  {category.name} 
                  </NavLink>)
              }
              <LeftSideNews/>
    </div>
  );
};

export default LeftSideNav;