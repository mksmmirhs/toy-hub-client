import React from 'react';

const Gallery = ({ item }) => {
  const { picture_url } = item;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
      <figure>
        <img src={picture_url} alt="Shoes" />
      </figure>
    </div>
  );
};

export default Gallery;
