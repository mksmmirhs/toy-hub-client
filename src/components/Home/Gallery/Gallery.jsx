import React, { useContext } from 'react';
import ViewDetails from '../../Shared/ViewDetails/ViewDetails';

const Gallery = ({ item }) => {
  const { picture_url, description, name, _id } = item;

  return (
    <div className="card card-compact w-full bg-base-100 shadow-xl mx-auto">
      <figure>
        <img src={picture_url} alt="cars" className="h-[284px] w-[284px]" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <ViewDetails _id={_id}></ViewDetails>
      </div>
    </div>
  );
};

export default Gallery;
