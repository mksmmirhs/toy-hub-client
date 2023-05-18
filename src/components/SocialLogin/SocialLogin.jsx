import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const googleLog = () => {
    googleSignIn()
      .then(user => {
        console.log(user);
        Swal.fire('User Login!', 'Successful!', 'success');
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <div>
      <div className="divider">Social Login</div>
      <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
        <button onClick={googleLog} className="btn">
          Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
