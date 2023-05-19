import React from 'react';

const HomeBlog = () => {
  return (
    <>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://images.pexels.com/photos/35967/mini-cooper-auto-model-vehicle.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            The Ultimate Guide to Collecting Toy Cars: From Vintage Classics to
            Modern Marvels
          </h2>
          <p>
            Discover the thrill of collecting toy cars, from rare vintage models
            to cutting-edge designs, and learn valuable tips for building your
            dream collection
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">View Blog</button>
          </div>
        </div>
      </div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://images.pexels.com/photos/35619/capri-ford-oldtimer-automotive.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Top 10 Toy Cars for Kids: Rev Up Their Imagination and Fun!
          </h2>
          <p>
            Explore the coolest toy cars for kids, featuring interactive
            features, realistic designs, and endless hours of imaginative play
            for young car enthusiasts
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">View Blog</button>
          </div>
        </div>
      </div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://images.pexels.com/photos/385997/pexels-photo-385997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            DIY Toy Car Racing Track: Unleash the Speed and Excitement at Home
          </h2>
          <p>
            Learn how to create your own thrilling toy car racing track using
            simple materials, and watch your little racers embark on exciting
            adventures right in your living room.
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">View Blog</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeBlog;
