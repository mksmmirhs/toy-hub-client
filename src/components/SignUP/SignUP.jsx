import React from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const SignUP = () => {
  const { emailSignUp } = useContext(AuthContext);

  const signUpEmail = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);
    emailSignUp(email, password)
      .then(result => {
        console.log(result.user);
        Swal.fire('User created!', 'Successful!', 'success');
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="relative flex flex-col justify-center h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-lg">
        <h1 className="text-3xl font-semibold text-center text-purple-700">
          Sign up
        </h1>
        <form onSubmit={signUpEmail} className="space-y-4">
          <div>
            <label className="label">
              <span className="text-base label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Your name"
              name="name"
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
              name="email"
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
              name="password"
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
            <button className="btn btn-primary">Sign Up</button>
          </div>
        </form>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default SignUP;
