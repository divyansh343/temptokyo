import React from "react";

const Pricing = () => {
  return (
    <div>
      <section className="py-12 md:py-24 " id="pricing">
        <div className="container px-4 mx-auto">
          <div className="max-w-sm md:max-w-md lg:max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className=" tracking-tight text-4xl sm:text-5xl font-bold text-white mb-4">
               Cross Platform protection
              </h1>
              <p className="text-lg ">
                Pricing
              </p>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-1/3 mb-12 lg:mb-0 md:px-4">
                <div className="p-8 mb-10 bg-gray-800/60 border border-gray-700 rounded-xl shadow-sm">
                  <div className="flex mb-8 items-center">
                    <span className="mr-3">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15 3.6V14.4C15 14.7314 14.7314 15 14.4 15H3.6C3.26863 15 3 14.7314 3 14.4V3.6C3 3.26863 3.26863 3 3.6 3H14.4C14.7314 3 15 3.26863 15 3.6Z"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M13.5 21H16.5"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M21 13.5V16.5"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M21 19.5V20.4C21 20.7314 20.7314 21 20.4 21H19.5"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M10.5 21H9.6C9.26863 21 9 20.7314 9 20.4V19.5"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M19.5 9H20.4C20.7314 9 21 9.26863 21 9.6V10.5"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M16.5 9H9.6C9.26863 9 9 9.26863 9 9.6V16.5"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </span>
                    <span className="text-base font-semibold text-white uppercase">
                   Basic
                    </span>
                  </div>
                  <div className="flex items-end mb-4">
                    <span className="mr-2 text-5xl font-semibold text-white tracking-tighter">
                      Free
                    </span>
                    {/* <span className="inline-block pb-2 text-lg ">
                      /word
                    </span> */}
                  </div>
                  <span className="block  mb-8">
                   Enjoy the security for free with almost all pro Features.
                  </span>
                  {/* <div className="p-4 mb-8 border border-teal-800 rounded-xl">
                    <div className="mb-4">
                      <span className="text-white font-medium">No-risk&nbsp;</span>
                      <span className="font-medium ">
                        7 day trial.
                      </span>
                    </div>
                    <div>
                      <span className="text-white font-medium">
                        Up to 32,000&nbsp;
                      </span>
                      <span className="font-medium ">words</span>
                    </div>
                  </div> */}
                  <a
                    className="group flex justify-center w-full h-12 p-1 text-center text-base text-white font-semibold rounded-lg"
                    href="#"
                  >
                    <div className="inline-flex items-stretch w-full h-12 p-0.5 rounded-lg bg-gradient-to-b from-gray-500 via-gray-700 to-gray-700 hover:to-gray-800">
                      <div className="flex w-full items-center justify-center px-4 bg-gray-700 group-hover:bg-opacity-40 rounded-md transition duration-300">
                        <span>Get Started</span>
                      </div>
                    </div>
                  </a>
                </div>
                <div>
                  <div className="flex mb-10 items-start">
                    <span className="flex-shrink-0 inline-flex w-5 h-5 items-center justify-center bg-gray-800 rounded-full">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.91699 7.58337L5.25033 9.91671L11.0837 4.08337"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </span>
                    <div className="ml-4">
                      <p className="text-sm">
                        <span className="font-semibold text-white">
                          4 business days or less.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="w-full lg:w-1/3 mb-12 lg:mb-0 md:px-4">
                <div className="relative p-8 mb-10 bg-white border text-gray-800 border-gray-100 rounded-xl shadow-sm">
                  <span className="absolute top-0 right-0 m-8 inline-block px-2.5 leading-relaxed text-sm text-white bg-gray-800 uppercase rounded-full">
                    Popular
                  </span>
                  <div className="flex mb-8 items-center">
                    <span className="mr-3">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.5 15H9.6C9.26863 15 9 15.2686 9 15.6V20.4C9 20.7314 9.26863 21 9.6 21H20.4C20.7314 21 21 20.7314 21 20.4V9.6C21 9.26863 20.7314 9 20.4 9H15.6C15.2686 9 15 9.26863 15 9.6V10.5"
                          stroke="black"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M13.5 15H14.4C14.7314 15 15 14.7314 15 14.4V13.5"
                          stroke="black"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M9 13.5V14.4C9 14.7314 8.73137 15 8.4 15H3.6C3.26863 15 3 14.7314 3 14.4V3.6C3 3.26863 3.26863 3 3.6 3H14.4C14.7314 3 15 3.26863 15 3.6V8.4C15 8.73137 14.7314 9 14.4 9H13.5"
                          stroke="black"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M9 10.5V9.6C9 9.26863 9.26863 9 9.6 9H10.5"
                          stroke="black"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </span>
                    <span className="text-base font-semibold uppercase">Bulk</span>
                  </div>
                  <div className="flex items-end mb-4">
                    <span className="mr-2 text-5xl font-semibold tracking-tighter">
                      $0.08
                    </span>
                    <span className="inline-block pb-2 text-lg ">
                      /word
                    </span>
                  </div>
                  <span className="block  mb-8">
                    For larger teams &amp; affiliate websites over 32,000 words.
                  </span>
                  <div className="p-4 mb-8 border border-gray-200 rounded-xl">
                    <div className="mb-4">
                      <span className="text-sm font-medium">No-risk&nbsp;</span>
                      <span className="text-sm font-medium text-gray-500">
                        14 day trial.
                      </span>
                    </div>
                    <div>
                      <span className="text-sm font-medium">
                        Up to 72,000&nbsp;
                      </span>
                      <span className="text-sm font-medium text-gray-500">
                        words.
                      </span>
                    </div>
                  </div>
                  <a
                    className="group relative flex items-center justify-center px-5 h-12 font-bold  bg-gradient-to-br from-cyanGreen-800 to-cyan-800 rounded-lg transition-all duration-300"
                    href="https://app.Tokyo.com"
                  >
                    <div className="absolute top-0 left-0 w-full h-full rounded-lg ring ring-green-300 animate-pulse group-hover:ring-0 transition duration-300"></div>
                    <span>Get Started</span>
                  </a>
                </div>
                <div className="flex mb-10 items-start">
                  <span className="flex-shrink-0 inline-flex w-5 h-5 items-center justify-center bg-gray-800 rounded-full">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.91699 7.58337L5.25033 9.91671L11.0837 4.08337"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </span>
                  <div className="ml-4">
                    <p className="text-sm">
                      <span className="font-semibold text-white">
                        3 business days or less.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/3 md:px-4">
                <div className="p-8 mb-10 bg-gray-800/60 border border-gray-700 rounded-xl">
                  <div className="flex mb-8 items-center">
                    <span className="mr-3">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15 9H20.4C20.7314 9 21 9.26863 21 9.6V20.4C21 20.7314 20.7314 21 20.4 21H9.6C9.26863 21 9 20.7314 9 20.4V15"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M15 9V3.6C15 3.26863 14.7314 3 14.4 3H3.6C3.26863 3 3 3.26863 3 3.6V14.4C3 14.7314 3.26863 15 3.6 15H9"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </span>
                    <span className="text-base font-semibold text-white uppercase">
                      Enterprise
                    </span>
                  </div>
                  <div className="mb-4">
                    <span className="text-5xl font-semibold text-white tracking-tighter">
                      $0.07
                    </span>
                    <span className="inline-block pb-2 text-lg ">
                      /word &amp; below
                    </span>
                  </div>
                  <span className="block  mb-8">
                    Contact our sales team for details.
                  </span>
                  <div className="p-4 mb-8 border border-gray-700 rounded-xl">
                    <div className="mb-4">
                      <span className="text-sm font-medium text-white">
                        Unlimited&nbsp;
                      </span>
                      <span className="text-sm font-medium ">
                        content.
                      </span>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-white">
                        Automated posting &amp;&nbsp;
                      </span>
                      <span className="text-sm font-medium ">
                        delivery.
                      </span>
                    </div>
                  </div>
                  <a
                    className="flex items-center justify-center w-full h-12 px-4 text-center text-base text-gray-900 hover:text-white font-bold bg-white hover:bg-gray-800/60 rounded-lg transition duration-200"
                    href="/contact"
                  >
                    Contact Sales
                  </a>
                </div>
                <div className="flex mb-10 items-start">
                  <span className="flex-shrink-0 inline-flex w-5 h-5 items-center justify-center bg-gray-800 rounded-full">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.91699 7.58337L5.25033 9.91671L11.0837 4.08337"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </span>
                  <div className="ml-4">
                    <p className="text-sm">
                      <span className="font-semibold text-white">
                        2 business days or less.
                      </span>
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
