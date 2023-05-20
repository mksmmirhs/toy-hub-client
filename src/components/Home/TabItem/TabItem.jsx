import React, { useEffect } from 'react';
import ReactStars from 'react-rating-stars-component';
import ViewDetails from '../../Shared/ViewDetails/ViewDetails';
import AOS from 'aos';
import 'aos/dist/aos.css';
const TabItem = ({ car }) => {
  const { name, picture_url, price, rating, _id } = car;

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="card card-compact  w-full bg-base-100 shadow-xl my-4 mx-auto"
      data-aos="flip-left"
    >
      <figure>
        <img src={picture_url} alt="cars" className="w-[240px] h-[300px]" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Price: ${price}</p>
        <h1>
          Rating:{' '}
          <ReactStars
            count={5}
            size={24}
            edit={false}
            value={rating}
            isHalf={true}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#ffd700"
          />
          {rating}
        </h1>
        <div className="card-actions justify-end">
          <ViewDetails _id={_id}></ViewDetails>
        </div>
      </div>
    </div>
  );
};

export default TabItem;
