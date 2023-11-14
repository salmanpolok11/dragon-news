import moment from 'moment';
import img1 from '../assets/1.png'
import img2 from '../assets/2.png'
import img3 from '../assets/3.png'

const LeftSideNews = () => {
  return (
    <div>
                     <section>
                          <div className=' space-y-2 mb-2'>
                              <img src={img1} alt="" />
                              <h1 className=' font-semibold'>Bayern Slams Authorities Over Flight Delay 
                               to Club World Cup</h1>
                                <div className=' flex space-x-20 '>
                                   <h1>Sports</h1>
                                      <h1>
                                         {moment().format("ddd, hA")}
                                      </h1>
                                </div>
                          </div>

                          <div className=' space-y-2 mb-2'>
                              <img src={img2} alt="" />
                              <h1 className=' font-semibold'>Bayern Slams Authorities Over Flight Delay 
                               to Club World Cup</h1>
                                <div className=' flex space-x-20'>
                                   <h1>Sports</h1>
                                      <h1>
                                         {moment().format("ddd, hA")}
                                      </h1>
                                </div>
                          </div>

                          <div className=' space-y-2'>
                              <img src={img3} alt="" />
                              <h1 className=' font-semibold'>Bayern Slams Authorities Over Flight Delay 
                               to Club World Cup</h1>
                                <div className=' flex space-x-20'>
                                   <h1>Sports</h1>
                                      <h1>
                                         {moment().format("ddd, hA")}
                                      </h1>
                                </div>
                          </div>

                     </section>
    </div>
  );
};

export default LeftSideNews;