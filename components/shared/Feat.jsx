import Image from "next/image";
import React from "react";
import left from "../../assets/left.png";

const Feat = () => {
  return (
    <section class="lg:p-8">

      <div class="mx-auto 2xl:max-w-7xl py-12  px-8  items-center w-full">

        <div>

          <span class="text-blue-400"> Features</span>
          <h2 class="text-3xl tracking-tighter mt-6 font-light lg:text-4xl text-white">
          Making your website Secured is just the start. < br />
With shadow you can go all the way             {/* <span class="md:block text-zinc-400">for complex data</span> */}
          </h2>
          {/* <p class="mt-4 text-base text-white max-w-md">
            Make informed decisions with our comparative analysis charts.
            Compare multiple data sets side by side using our intuitive charts.
          </p> */}
        </div>
        <div class="flex flex-col w-full">

          <div
            class="flex flex-col w-full"
            aria-labelledby="carousel-label"
            role="region"
            tabindex="0"
          >

            <h2 class="sr-only" hidden="" id="carousel-label">
              Carousel
            </h2>
            <span class="sr-only" hidden="" id="carousel-content-label">
              Carousel
            </span>
            <div class="grid grid-cols-1 lg:grid-cols-4 pb-6 border-b border-white/10">
              <div class="items-center inline-flex lg:col-start-4 lg:ml-auto lg:px-2 mb-4 order-last space-x-2">

              </div>
            </div>
            <ul
              class="flex gap-3 pb-24 pt-12 overflow-x-hidden snap-mandatory snap-x w-full"
              role="listbox"
              aria-labelledby="carousel-content-label"
              tabindex="0"
              x-ref="slider"
            >

              <li
                class="items-center justify-center w-full flex flex-col shrink-0 snap-start"
                x-bind="disableNextAndPreviousButtons"
              >

                <figure>

                  <ul class="grid grid-cols-1 lg:grid-cols-4 gap-3 group h-full">

                    <li class="bg-ebony shadow-inset rounded-3xl p-4">

                      <figure>

                        <div>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="icon icon-tabler icon-tabler-circle-check text-white"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >

                            <path
                              stroke="none"
                              d="M0 0h24v24H0z"
                              fill="none"
                            ></path>
                            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                            <path d="M9 12l2 2l4 -4"></path>
                          </svg>
                          <p class="font-medium leading-6 text-lg text-white mt-24">
                            Capitalize
                          </p>
                          <p class="text-md mt-2 text-zinc-300">
                            Tap into capital opportunities spanning various
                            industries, including SaaS.
                          </p>
                        </div>
                      </figure>
                    </li>
                    <li class="bg-ebony shadow-inset rounded-3xl p-4">

                      <figure>

                        <div>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="icon icon-tabler icon-tabler-circle-check text-white"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >

                            <path
                              stroke="none"
                              d="M0 0h24v24H0z"
                              fill="none"
                            ></path>
                            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                            <path d="M9 12l2 2l4 -4"></path>
                          </svg>
                          <p class="font-medium leading-6 text-lg text-white mt-24">
                            Accelerate
                          </p>
                          <p class="text-md mt-2 text-zinc-300">
                            Boost customer acquisition by streamlining financing
                            processes for enhanced convenience.
                          </p>
                        </div>
                      </figure>
                    </li>
                    <li class="bg-ebony shadow-inset rounded-3xl p-4">

                      <figure>

                        <div>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="icon icon-tabler icon-tabler-circle-check text-white"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >

                            <path
                              stroke="none"
                              d="M0 0h24v24H0z"
                              fill="none"
                            ></path>
                            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                            <path d="M9 12l2 2l4 -4"></path>
                          </svg>
                          <p class="font-medium leading-6 text-lg text-white mt-24">
                            Gain Insights
                          </p>
                          <p class="text-md mt-2 text-zinc-300">
                            Gain valuable insights into the well-being of your
                            customer base and uncover growth opportunities.
                          </p>
                        </div>
                      </figure>
                    </li>
                    <li class="bg-ebony shadow-inset rounded-3xl p-4">

                      <figure>

                        <div>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="icon icon-tabler icon-tabler-circle-check text-white"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >

                            <path
                              stroke="none"
                              d="M0 0h24v24H0z"
                              fill="none"
                            ></path>
                            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                            <path d="M9 12l2 2l4 -4"></path>
                          </svg>
                          <p class="font-medium leading-6 text-lg text-white mt-24">
                            Flourish
                          </p>
                          <p class="text-md mt-2 text-zinc-300">
                            Develop a new revenue stream that aligns seamlessly
                            with your primary growth objectives.
                          </p>
                        </div>
                      </figure>
                    </li>
                  </ul>
                </figure>
              </li>
              <li
                class="items-center justify-center w-full flex flex-col shrink-0 snap-start"
                x-bind="disableNextAndPreviousButtons"
              >

                <figure>

                  <ul class="grid grid-cols-1 lg:grid-cols-4 gap-3 group h-full">

                    <li class="bg-ebony shadow-inset rounded-3xl p-4">

                      <figure>

                        <div>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="icon icon-tabler icon-tabler-circle-check text-white"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >

                            <path
                              stroke="none"
                              d="M0 0h24v24H0z"
                              fill="none"
                            ></path>
                            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                            <path d="M9 12l2 2l4 -4"></path>
                          </svg>
                          <p class="font-medium leading-6 text-lg text-white mt-24">
                            Capitalize
                          </p>
                          <p class="text-md mt-2 text-zinc-300">
                            Tap into capital opportunities spanning various
                            industries, including SaaS, eCommerce, and more.
                          </p>
                        </div>
                      </figure>
                    </li>
                    <li class="bg-ebony shadow-inset rounded-3xl p-4">

                      <figure>

                        <div>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="icon icon-tabler icon-tabler-circle-check text-white"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >

                            <path
                              stroke="none"
                              d="M0 0h24v24H0z"
                              fill="none"
                            ></path>
                            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                            <path d="M9 12l2 2l4 -4"></path>
                          </svg>
                          <p class="font-medium leading-6 text-lg text-white mt-24">
                            Accelerate
                          </p>
                          <p class="text-md mt-2 text-zinc-300">
                            Boost customer acquisition by streamlining financing
                            processes for enhanced convenience.
                          </p>
                        </div>
                      </figure>
                    </li>
                    <li class="bg-ebony shadow-inset rounded-3xl p-4">

                      <figure>

                        <div>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="icon icon-tabler icon-tabler-circle-check text-white"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >

                            <path
                              stroke="none"
                              d="M0 0h24v24H0z"
                              fill="none"
                            ></path>
                            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                            <path d="M9 12l2 2l4 -4"></path>
                          </svg>
                          <p class="font-medium leading-6 text-lg text-white mt-24">
                            Gain Insights
                          </p>
                          <p class="text-md mt-2 text-zinc-300">
                            Gain valuable insights into the well-being of your
                            customer base and uncover growth opportunities.
                          </p>
                        </div>
                      </figure>
                    </li>
                    <li class="bg-ebony shadow-inset rounded-3xl p-4">

                      <figure>

                        <div>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="icon icon-tabler icon-tabler-circle-check text-white"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >

                            <path
                              stroke="none"
                              d="M0 0h24v24H0z"
                              fill="none"
                            ></path>
                            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                            <path d="M9 12l2 2l4 -4"></path>
                          </svg>
                          <p class="font-medium leading-6 text-lg text-white mt-24">
                            Flourish
                          </p>
                          <p class="text-md mt-2 text-zinc-300">
                            Develop a new revenue stream that aligns seamlessly
                            with your primary growth objectives.
                          </p>
                        </div>
                      </figure>
                    </li>
                  </ul>
                </figure>
              </li>
              <li
                class="items-center justify-center w-full flex flex-col shrink-0 snap-start"
                x-bind="disableNextAndPreviousButtons"
              >

                <figure>

                  <ul class="grid grid-cols-1 lg:grid-cols-4 gap-3 group h-full">

                    <li class="bg-ebony shadow-inset rounded-3xl p-4">

                      <figure>

                        <div>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="icon icon-tabler icon-tabler-circle-check text-white"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >

                            <path
                              stroke="none"
                              d="M0 0h24v24H0z"
                              fill="none"
                            ></path>
                            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                            <path d="M9 12l2 2l4 -4"></path>
                          </svg>
                          <p class="font-medium leading-6 text-lg text-white mt-24">
                            Capitalize
                          </p>
                          <p class="text-md mt-2 text-zinc-300">
                            Tap into capital opportunities spanning various
                            industries, including SaaS, eCommerce, and more.
                          </p>
                        </div>
                      </figure>
                    </li>
                    <li class="bg-ebony shadow-inset rounded-3xl p-4">

                      <figure>

                        <div>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="icon icon-tabler icon-tabler-circle-check text-white"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >

                            <path
                              stroke="none"
                              d="M0 0h24v24H0z"
                              fill="none"
                            ></path>
                            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                            <path d="M9 12l2 2l4 -4"></path>
                          </svg>
                          <p class="font-medium leading-6 text-lg text-white mt-24">
                            Accelerate
                          </p>
                          <p class="text-md mt-2 text-zinc-300">
                            Boost customer acquisition by streamlining financing
                            processes for enhanced convenience.
                          </p>
                        </div>
                      </figure>
                    </li>
                    <li class="bg-ebony shadow-inset rounded-3xl p-4">

                      <figure>

                        <div>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="icon icon-tabler icon-tabler-circle-check text-white"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >

                            <path
                              stroke="none"
                              d="M0 0h24v24H0z"
                              fill="none"
                            ></path>
                            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                            <path d="M9 12l2 2l4 -4"></path>
                          </svg>
                          <p class="font-medium leading-6 text-lg text-white mt-24">
                            Gain Insights
                          </p>
                          <p class="text-md mt-2 text-zinc-300">
                            Gain valuable insights into the well-being of your
                            customer base and uncover growth opportunities.
                          </p>
                        </div>
                      </figure>
                    </li>
                    <li class="bg-ebony shadow-inset rounded-3xl p-4">

                      <figure>

                        <div>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="icon icon-tabler icon-tabler-circle-check text-white"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >

                            <path
                              stroke="none"
                              d="M0 0h24v24H0z"
                              fill="none"
                            ></path>
                            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                            <path d="M9 12l2 2l4 -4"></path>
                          </svg>
                          <p class="font-medium leading-6 text-lg text-white mt-24">
                            Flourish
                          </p>
                          <p class="text-md mt-2 text-zinc-300">
                            Develop a new revenue stream that aligns seamlessly
                            with your primary growth objectives.
                          </p>
                        </div>
                      </figure>
                    </li>
                  </ul>
                </figure>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feat;
