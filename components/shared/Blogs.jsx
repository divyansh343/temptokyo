import Image from "next/image";
import React from "react";
import blog1 from "../../assets/blogs/blog1.jpg";
import blog2 from "../../assets/blogs/blog2.jpg";
import blog3 from "../../assets/blogs/blog3.jpg";
import portrait from "../../assets/portrait.jpeg";

const Blogs = () => {
  return (
    <div>
      <section>
        <div className="container px-4 mx-auto">
          <h4 className="text-2xl font-semibold text-white mt-16 mb-8">
            All Marketing Posts
          </h4>
          <div className="flex flex-wrap -mx-4 -mb-16">
            {/* Blog Post 1 */}
            <div className="w-full lg:w-1/3 px-4 mb-16">
              <a
                className="group flex flex-col h-full rounded-xl border border-gray-800 hover:border-yellowGreen-500 overflow-hidden ring ring-transparent hover:ring-yellowGreen-500"
                href="/blog/creating-a-successful-marketing-theme"
              >
                <div className="flex-shrink-0 h-72 rounded-t-lg overflow-hidden">
                  <Image className="block w-full h-full object-cover" src={blog1} alt="" />
                </div>
                <div className="h-full py-10 md:pt-6 md:pb-8 px-5">
                  <div className="flex mb-4 items-center">
                    <span className="text-sm text-gray-500">
                      Tuesday, Jan 10, 2024
                    </span>
                    <span className="mx-3">
                      <svg
                        width="4"
                        height="4"
                        viewBox="0 0 4 4"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="2" cy="2" r="2" fill="#D2DAD5"></circle>
                      </svg>
                    </span>
                    <span className="text-sm text-gray-500">6 min read</span>
                  </div>
                  <h2 className="tracking-tight text-xl text-white font-semibold mb-4">
                    Creating a Successful Marketing Theme
                  </h2>
                  <div className="flex items-center">
                    <Image className="block w-8 h-8 rounded-full object-contain" src={portrait} alt="" />
                    <div className="ml-3">
                      <span className="block text-sm font-semibold text-white">
                        Jane Doe
                      </span>
                      <span className="block text-sm font-medium text-gray-500">
                        Marketing Specialist
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            {/* Blog Post 2 */}
            <div className="w-full lg:w-1/3 px-4 mb-16">
              <a
                className="group flex flex-col h-full rounded-xl border border-gray-800 hover:border-yellowGreen-500 overflow-hidden ring ring-transparent hover:ring-yellowGreen-500"
                href="/blog/effective-marketing-strategies"
              >
                <div className="flex-shrink-0 h-72 rounded-t-lg overflow-hidden">
                  <Image className="block w-full h-full object-cover" src={blog2} alt="" />
                </div>
                <div className="h-full py-10 md:pt-6 md:pb-8 px-5">
                  <div className="flex mb-4 items-center">
                    <span className="text-sm text-gray-500">
                      Wednesday, Jan 11, 2024
                    </span>
                    <span className="mx-3">
                      <svg
                        width="4"
                        height="4"
                        viewBox="0 0 4 4"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="2" cy="2" r="2" fill="#D2DAD5"></circle>
                      </svg>
                    </span>
                    <span className="text-sm text-gray-500">7 min read</span>
                  </div>
                  <h2 className="tracking-tight text-xl text-white font-semibold mb-4">
                    Effective Marketing Strategies
                  </h2>
                  <div className="flex items-center">
                    <Image className="block w-8 h-8 rounded-full object-contain" src={portrait} alt="" />
                    <div className="ml-3">
                      <span className="block text-sm font-semibold text-white">
                        John Smith
                      </span>
                      <span className="block text-sm font-medium text-gray-500">
                        Marketing Director
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            {/* Blog Post 3 */}
            <div className="w-full lg:w-1/3 px-4 mb-16">
              <a
                className="group flex flex-col h-full rounded-xl border border-gray-800 hover:border-yellowGreen-500 overflow-hidden ring ring-transparent hover:ring-yellowGreen-500"
                href="/blog/branding-tips-for-marketers"
              >
                <div className="flex-shrink-0 h-72 rounded-t-lg overflow-hidden">
                  <Image className="block w-full h-full object-cover" src={blog3} alt="" />
                </div>
                <div className="h-full py-10 md:pt-6 md:pb-8 px-5">
                  <div className="flex mb-4 items-center">
                    <span className="text-sm text-gray-500">
                      Thursday, Jan 12, 2024
                    </span>
                    <span className="mx-3">
                      <svg
                        width="4"
                        height="4"
                        viewBox="0 0 4 4"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="2" cy="2" r="2" fill="#D2DAD5"></circle>
                      </svg>
                    </span>
                    <span className="text-sm text-gray-500">8 min read</span>
                  </div>
                  <h2 className="tracking-tight text-xl text-white font-semibold mb-4">
                    Branding Tips for Marketers
                  </h2>
                  <div className="flex items-center">
                    <Image className="block w-8 h-8 rounded-full object-contain" src={portrait} alt="" />
                    <div className="ml-3">
                      <span className="block text-sm font-semibold text-white">
                        Emily Johnson
                      </span>
                      <span className="block text-sm font-medium text-gray-500">
                        Marketing Specialist
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
