import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {
  const { emailSignIn } = useContext(AuthContext);
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const navigate = useNavigate();

  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    emailSignIn(email, password)
      .then(res => {
        console.log(res.user);
        Swal.fire('User Login!', 'Successful!', 'success');
        navigate(from, { replace: true });
      })
      .catch(err => {
        const message = err.message;
        Swal.fire('User Login failed!', message, 'error');
        console.log(err);
      });
  };

  return (
    <div className="relative flex flex-col justify-center h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-lg">
        <h1 className="text-3xl font-semibold text-center text-purple-700">
          Login
        </h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="label">
              <span className="text-base label-text">Email</span>
            </label>
            <input
              type="text"
              name="email"
              placeholder="Email Address"
              className="w-full input input-bordered input-primary"
              required
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              className="w-full input input-bordered input-primary"
              required
            />
          </div>
          <div>
            <p>
              New to site?{' '}
              <span className=" text-bold text-orange-400">
                <Link to="/signup">Sign Up</Link>
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

export default Login;
