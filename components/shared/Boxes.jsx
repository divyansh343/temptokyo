import React from "react";

const Boxes = () => {
  return (
    <div>
      <div class="pt-24 px-24">
        
        <ol
          class="grid grid-cols-1 gap-4 lg:grid-cols-2 sm:grid-cols-2"
          role="list"
        >
          
          <li class="group ring-1 ring-inset ring-white/5 text-white bg-gradient-to-b from-indigo-500 via-indigo-500/5  rounded-xl p-[0.060rem] overflow-hidden  shadow-vulcan-950 shadow-2xl">
            
            <a href="/posts/1" title="The benefits of learning a new language">
              
              <div class="bg-vulcan-900  rounded-xl">
                
                <div class="flex items-end justify-center overflow-hidden rounded-t-xl border-b border-vulcan-800">
                  
                  <div class="flex">
                    {/* <img class="group-hover:scale-110 duration-300 aspect-[2/1] object-cover" loading="lazy" src="https://cdn.dribbble.com/userupload/2712463/file/original-274b8bc4dfb550cd144c51091eab3163.jpg?compress=1&amp;resize=1504x1128" alt="The benefits of learning a new language" width="560">  */}
                  </div>
                </div>
                <div class="p-8">
                  
                  {/* <p>
                    <time
                      class=" items-center w-auto px-3 py-1 text-xs font-semibold text-white transition-all border rounded-full h-7 bg-vulcan-900 hover:text-indigo-400 border-vulcan-700"
                      datetime="Fri Jul 01"
                    >
                      Fri Jul 01
                    </time>
                  </p> */}
                  <h3 class="mt-5 text-sm font-medium leading-6 text-white">
                    The benefits of learning a new language
                  </h3>
                  <p class="mt-2 text-sm text-vulcan-300 line-clamp-1">
                    
                    Learning a new language can open up a world of
                    possibilities. It can help you gain new perspectives, make
                    new friends, and even land a better job. In this post, well
                    explore the benefits of learning a new language and why its
                    worth the effort
                  </p>
                </div>
              </div>
            </a>
          </li>
          <li class="group ring-1 ring-inset ring-white/5 text-white bg-gradient-to-b from-indigo-500 via-indigo-500/5  rounded-xl p-[0.060rem] overflow-hidden  shadow-vulcan-950 shadow-2xl">
            
            <a href="/posts/5" title="Tips for managing stress">
              
              <div class="bg-vulcan-900  rounded-xl">
                
                <div class="flex items-end justify-center overflow-hidden rounded-t-xl border-b border-vulcan-800">
                  
                  <div class="flex">
                    {/* <img class="group-hover:scale-110 duration-300 aspect-[2/1] object-cover" loading="lazy" src="https://cdn.dribbble.com/users/78433/screenshots/17560847/media/b5c7c2130ea36372572dc925e532818c.jpg?compress=1&amp;resize=1600x1200&amp;vertical=top" alt="Tips for managing stress" width="560"> */}
                  </div>
                </div>
                <div class="p-8">
                  
                  {/* <p>
                    
                    <time
                      class=" items-center w-auto px-3 py-1 text-xs font-semibold text-white transition-all border rounded-full h-7 bg-vulcan-900 hover:text-indigo-400 border-vulcan-700"
                      datetime="Mon Aug 08"
                    >
                      Mon Aug 08
                    </time>
                  </p> */}
                  <h3 class="mt-5 text-sm font-medium leading-6 text-white">
                    
                    Tips for managing stress
                  </h3>
                  <p class="mt-2 text-sm text-vulcan-300 line-clamp-1">
                    
                    Stress can be a major obstacle in life. In this post, well
                    cover some tips and tricks to help you manage stress and
                    stay healthy. Well also look at some strategies to help you
                    stay calm and focused.
                  </p>
                </div>
              </div>
            </a>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Boxes;
