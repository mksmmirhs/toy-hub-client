import React from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';

const SignUP = () => {
  return (
    <div className="relative flex flex-col justify-center h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-lg">
        <h1 className="text-3xl font-semibold text-center text-purple-700">
          Login
        </h1>
        <form className="space-y-4">
          <div>
            <label className="label">
              <span className="text-base label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full input input-bordered input-primary"
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="Email Address"
              className="w-full input input-bordered input-primary"
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered input-primary"
            />
          </div>
          <div>
            <p>
              Already have an account?{' '}
              <span className=" text-bold text-orange-400">
                <Link to="/login">Login</Link>
              </span>
            </p>
          </div>
          <div>
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default SignUP;
