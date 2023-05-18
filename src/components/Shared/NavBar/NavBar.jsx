import React from 'react';
import { Link } from 'react-router-dom';

const navBarMenu = (
  <>
    <li>
      <Link to="/">Home</Link>
    </li>

    <li>
      <Link to="/allToys">All Toys</Link>
    </li>
    <li>
      <Link to="/myToys">My Toys</Link>
    </li>
    <li>
      <Link to="/AddToy">Add A Toy</Link>
    </li>
    <li>
      <Link to="/blog">Blog</Link>
    </li>

    <li>
      <Link to="/Login">Login</Link>
    </li>
  </>
);

const NavBar = () => {
  return (
    <div className="navbar bg-[#e0f8fa]">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navBarMenu}
          </ul>
        </div>
        <img
          className=" h-[78px] w-[78px]"
          src="https://img.freepik.com/premium-vector/train-kids-toys-logo-vector_586862-66.jpg?"
          alt=""
        />
        <Link to="/" className=" text-xl text-[#d6b08e]">
          Car Toy Store
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navBarMenu}</ul>
      </div>
      <div className="navbar-end me-4">
        <div className="avatar">
          <div className=" w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
