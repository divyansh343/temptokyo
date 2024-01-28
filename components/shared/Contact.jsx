import Image from "next/image";
import React from "react";
import portrait from "../../assets/portrait.jpeg";
import Link from "next/link";

const Contact = () => {
  return (
    <div>
      <section className="py-12 md:py-24 ">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-5/12 xl:w-1/2 px-4 mb-16 lg:mb-0">
              <div className="flex flex-col h-full max-w-sm">
                <h1 className=" tracking-tight text-4xl xs:text-5xl font-bold text-white mb-4">
                  Login                </h1>
                <p className="max-w-xs text-lg text-gray-400 mb-10">
                  {/* Have enterprise needs or looking for more info? */}
                </p>
                <div className="mt-auto p-8 border border-gray-700 rounded-xl">
                  <Image className="block rounded-xl mb-8 w-12" src={portrait} alt="" />

                  <p className="font-medium text-white mb-4">
                    &quot;Their research, quality of copy and ability to turn
                    around complex projects quickly is second to none.&quot;
                  </p>
                  <span className="">Scott Clary, Founder</span>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-7/12 xl:w-1/2 px-4">
              <div className="p-8 border border-gray-700 rounded-xl">
                <form name="contact-sales" className="grid-cols-2 grid gap-x-6">
                  <div className="mb-4 col-span-1">
                    <label
                      className="block mb-2 text-sm font-medium text-white"
                      for=""
                    >
                      First name*
                    </label>

                    <input
                      className="py-2 px-4 h-11 w-full  bg-gray-800 border border-gray-700 focus:border-primary rounded-lg outline-none ring ring-transparent focus:ring-primary"
                      type="text"
                      placeholder="Your first name"
                      required=""
                    />
                  </div>
                  <div className="mb-4 col-span-1">
                    <label
                      className="block mb-2 text-sm font-medium text-white"
                      for=""
                    >
                      Last name*
                    </label>

                    <input
                      className="py-2 px-4 h-11 w-full  bg-gray-800 border border-gray-700 focus:border-primary rounded-lg outline-none ring ring-transparent focus:ring-primary"
                      type="text"
                      placeholder="Your last name"
                      required=""
                    />
                  </div>
                  <div className="mb-4 col-span-2">
                    <label
                      className="block mb-2 text-sm font-medium text-white"
                      for=""
                    >
                      Email*
                    </label>

                    <input
                      className="py-2 px-4 h-11 w-full  bg-gray-800 border border-gray-700 focus:border-primary rounded-lg outline-none ring ring-transparent focus:ring-primary"
                      type="email"
                      placeholder="john@email.com"
                      required=""
                    />
                  </div>
                  {/* <div className="mb-8 col-span-2">
                    <label
                      className="block mb-2 text-sm font-medium text-white"
                      for=""
                    >
                      Message
                    </label>
                    <textarea
                      className="block py-2 px-4 w-full h-44  bg-gray-800 border border-gray-700 focus:border-primary rounded-lg outline-none ring ring-transparent focus:ring-primary resize-none"
                      placeholder="Enter your message"
                    ></textarea>
                  </div> */}
                  <Link    href="/features">
                  <button
                    className="group relative w-32 px-4 py-3  p-px font-bold bg-primary
                    text-gray-900 rounded-lg transition-all duration-300 focus:outline-none"
                 
                  >
                    <div className="absolute top-0 left-0 w-full h-full rounded-lg ring ring-primary animate-pulse group-hover:ring-0 transition duration-300">
                      
                    </div>
                    <span className="">Submit</span>
                  </button>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
