import Image from "next/image";
import React from "react";
import logo from "../assets/logo.png"
import Link from "next/link";

const PhoneNav = ({ setNav }) => {
  return (
    <div>
      <div className="navbar-menu fixed top-0 left-0 bottom-0 w-full sm:max-w-xs z-50">
        <div className="navbar-backdrop fixed inset-0 bg-base-100 opacity-80"></div>
        <nav className="relative z-10 px-8 pt-8 -mt-0.5 bg-base-100 h-full overflow-y-auto ">
          <div className="flex flex-wrap justify-between h-full">
            <div className="w-full">
              <div className="flex items-center justify-between -m-2">
                <div className="w-auto p-2">
                  <a className="flex space-x-4 items-center" href="#">
                  <Image height={60} width={60} className="h-10 w-10 rounded-lg" src={logo} alt="" />
                  <p className="font-bold">SHADOW</p>
                  </a>
                </div>
                <div className="w-auto p-2">
                  <button
                    onClick={() => setNav(false)}
                    className="inline-block navbar-burger"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 18L18 6M6 6L18 18"
                        stroke="#ffffff"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center py-8 w-full">
              <ul className="flex flex-col space-y-8">
                <li className="mr-9">
                  <a
                    className="inline-block text-sm font-medium text-opacity-80 hover:text-gray-200"
                    href="#"
                  >
                    How it works
                  </a>
                </li>
       
                <li className="mr-9">
                  <a
                    className="inline-block text-sm font-medium text-opacity-80 hover:text-gray-200"
                    href="#"
                  >
                    Blog
                  </a>
                </li>
                <li className="mr-9">
                  <a
                    className="inline-block text-sm font-medium text-opacity-80 hover:text-gray-200"
                    href="#"
                  >
                    Contact Sales
                  </a>
                </li>
                <li>
                  <Link
                    className="inline-block text-sm font-medium text-opacity-80 hover:text-gray-200"
                    href="/login"
                  >
                    Login
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-end w-full pb-8">
              <div className="flex flex-wrap -m-2">
                <Link
                  href="/login"
                  className="xs:flex-shrink-0 group relative flex xs:inline-flex w-full xs:w-auto items-center justify-center px-5 h-12 font-bold bg-pr rounded-lg transition-all duration-300 focus:outline-none"
                >
                  <div className="absolute top-0 left-0 w-full h-full rounded-lg ring ring-primary hover:bg-primary/30 animate-pulse group-hover:ring-0 transition duration-300"></div>
                  <span>Login</span>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default PhoneNav;
