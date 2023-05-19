import React from 'react';
import { Link } from 'react-router-dom';

const Gallery = ({ item }) => {
  const { picture_url, description, name, _id } = item;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
      <figure>
        <img src={picture_url} alt="cars" className="h-[284px] w-[284px]" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <Link to={`viewDetails/${_id}`}>
          <button className="btn btn-primary">View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default Gallery;
