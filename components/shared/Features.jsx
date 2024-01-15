import Image from "next/image";
import React from "react";
import left from "../../assets/left.png";

const Features = () => {
  return (
    <div>
      <section className="relative py-12 md:py-24 ">
        <div className="relative z-10 container px-4 mx-auto">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 lg:w-7/12 px-4 order-last md:order-first">
              <div>
                <Image className="block" src={left} alt="" />
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-5/12 mb-16 md:mb-0">
              <div className="md:max-w-lg">
                <div className="pb-10 mb-10 border-b border-teal-800">
                  <div className="max-w-md mb-10">
                    <h1 className=" tracking-tight text-4xl sm:text-5xl font-bold text-white mb-4">
                      Quit the busywork &amp; get back to growth
                    </h1>
                    <p className="text-gray-400">
                      You&apos;re an affiliate site, agency, or SaaS company.
                      Why waste your time hiring and managing when you could be
                      focusing on growth? That&apos;s where we come in.
                    </p>
                  </div>
                  <a
                    className="group inline-block justify-center p-1 text-center text-base text-white font-semibold rounded-lg"
                    href="/about"
                  >
                    <div className="inline-flex items-stretch h-12 p-0.5 rounded-lg bg-gradient-to-b from-gray-500 via-gray-700 to-gray-700 hover:to-gray-800">
                      <div className="flex items-center px-4 bg-gray-700 group-hover:bg-opacity-40 rounded-md transition duration-300">
                        <span className="mr-2">Learn more</span>
                        <span className="transform group-hover:translate-x-1 transition duration-300">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.5 5L12.5 10L7.5 15"
                              stroke="white"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="max-w-md mb-10">
                  <span className="block mb-5">
                    <svg
                      width="13"
                      height="9"
                      viewBox="0 0 13 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.18 0.939999L4.32 8.02H0.24L3.18 0.939999H6.18ZM12.06 0.939999L10.2 8.02H6.12L9.03 0.939999H12.06Z"
                        fill="white"
                      ></path>
                    </svg>
                  </span>
                  <p className="font-medium text-white">
                    Clean, simple, and easy to use. I love it! Tripling volume
                    was a breeze, and quality has never been better.
                  </p>
                </div>
                <div className="xs:flex items-center justify-between">
                  <div className="flex items-center mb-6 xs:mb-0">
                    {/* <img className="block w-10 h-10 rounded-full" src="zak_blake.png" alt=""> */}
                    <div className="ml-4">
                      <span className="block text-sm font-semibold text-white mb-1">
                        Zak Blake
                      </span>
                      <span className="block text-xs text-gray-400">
                        Former CTO, Scaling With Systems
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <img className="absolute bottom-0 right-0 opacity-80" src="aurora-assets/features/shadow-blur-right.png" alt=""> */}
      </section>
    </div>
  );
};

export default Features;
