import Boxes from "@/components/shared/Boxes";
import Link from "next/link";
import React from "react";

const report = () => {
  return (
    <div>
      <Boxes />
      <div class="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        <div class="relative pt-32 ml-auto">
          <div class="lg:w-2/3 text-center mx-auto">
            <div class="flex justify-center mb-8"></div>
            <h1 class="text-primary  font-bold text-5xl md:text-5xl xl:text-5xl">
              Generate Report <br />
            </h1>
            {/* <p class="mt-8 text-white dark:text-gray-300 text-lg">
              Generate bulk blogs b
              <span class="font-bold text-primary underline">AI</span>
            </p> */}
            <div class="mt-8">
              <div class="p-4 w-5/5 md:w-4/5 mx-auto text-left border border-gray-400 rounded-2xl">
                <div class="mb-4 flex flex-col">
                  <p class="font-bold">Fill the details below</p>
                </div>
          
                <div class="mb-4 flex flex-col">
                  <label for="domain" class="text-white font-bold mb-1 text-sm">
                    Name
                  </label>
                  <input
                    type="text"
                    id="domain"
                    class="w-full p-2 border rounded-md text-sm"
                    placeholder="E.g. How to do SEO"
                    value=""
                  />
                  <p class="text-xs text-white">
                    The domain or field of expertise for the generated content.
                  </p>
                </div>
                <div class="mb-4">
                  <label
                    for="numArticles"
                    class="block text-white font-bold mb-1 text-sm"
                  >
                    Number of Connection
                  </label>

                  <input
                    type="number"
                    id="numArticles"
                    class="w-full p-2 border rounded-md text-sm"
                    placeholder="Number of Articles to generate"
                    value="0"
                  />

                  <p class="text-xs text-white">
                    The number of articles you want to generate.
                  </p>
                </div>
                {/* <div class="flex flex-col sm:flex-row space-x-1">
                  <div class="w-full sm:w-1/2 mb-4">
                    <label
                      for="type"
                      class="block text-white font-bold mb-1 text-sm"
                    >
                      Type (optional)
                    </label>
                    <select
                      id="type"
                      class="w-full p-2 border rounded-md text-sm"
                    >
                      <option value="" selected="">
                        Select Type
                      </option>
                      <option value="Informative">Informative</option>
                      <option value="Persuasive">Persuasive</option>
                      <option value="Entertaining">Entertaining</option>
                    </select>
                    <p class="text-xs text-white">
                      The type of content you want to generate.
                    </p>
                  </div>
                  <div class="w-full sm:w-1/2 mb-4">
                    <label
                      for="task"
                      class="block text-white font-bold mb-1 text-sm"
                    >
                      Task (optional)
                    </label>
                    <select
                      id="task"
                      class="w-full p-2 border rounded-md text-sm"
                    >
                      <option value="" selected="">
                        Select Task
                      </option>
                      <option value="Article Writing">Article Writing</option>
                      <option value="Blog Post Writing">
                        Blog Post Writing
                      </option>
                      <option value="Tutorial Writing">Tutorial Writing</option>
                    </select>
                    <p class="text-xs text-white">
                      Select specific task for the content.
                    </p>
                  </div>
                </div>
                <div class="flex flex-col sm:flex-row space-x-1">
                  <div class="w-full sm:w-1/2 mb-4">
                    <label
                      for="tone"
                      class="block text-white font-bold mb-1 text-sm"
                    >
                      Tone (optional)
                    </label>
                    <select
                      id="tone"
                      class="w-full p-2 border rounded-md text-sm"
                    >
                      <option value="" selected="">
                        Select Tone
                      </option>
                      <option value="Neutral">Neutral</option>
                      <option value="Formal">Formal</option>
                      <option value="Friendly">Friendly</option>
                      <option value="Passionate">Passionate</option>
                    </select>
                    <p class="text-xs text-white">
                      The tone of voice for the generated content.
                    </p>
                  </div>
                  <div class="w-full sm:w-1/2 mb-4">
                    <label
                      for="length"
                      class="block text-white font-bold mb-1 text-sm"
                    >
                      Length (optional)
                    </label>
                    <select
                      id="length"
                      class="w-full p-2 border rounded-md text-sm"
                    >
                      <option value="" selected="">
                        Select Length
                      </option>
                      <option value="Short">Short</option>
                      <option value="Medium">Medium</option>
                      <option value="Long">Long</option>
                    </select>
                    <p class="text-xs text-white">
                      Determines the approximate length of the generated
                      content.
                    </p>
                  </div>
                </div>
                <div class="flex flex-col sm:flex-row space-x-1">
                  <div class="w-full sm:w-1/2 mb-4">
                    <label
                      for="language"
                      class="block text-white font-bold mb-1 text-sm"
                    >
                      Language (optional)
                    </label>
                    <select
                      id="language"
                      class="w-full p-2 border rounded-md text-sm"
                    >
                      <option value="" selected="">
                        Select Language
                      </option>
                      <option value="English">English</option>
                      <option value="Spanish">Spanish</option>
                      <option value="French">French</option>
                    </select>
                    <p class="text-xs text-white">
                      The language in which the content should be generated.
                    </p>
                  </div>
                  <div class="w-full sm:w-1/2 mb-4">
                    <label
                      for="skill"
                      class="block text-white font-bold mb-1 text-sm"
                    >
                      Skill (optional)
                    </label>
                    <select
                      id="skill"
                      class="w-full p-2 border rounded-md text-sm"
                    >
                      <option value="" selected="">
                        Select type
                      </option>
                      <option value="Beginner">Beginner</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Advanced">Advanced</option>
                    </select>
                    <p class="text-xs text-white">
                      Select Skills for the AI for content generation.
                    </p>
                  </div>
                </div> */}
                <Link href="/sucess">
                <button class="bg-primary hover:bg-blue-600 mt-10 text-white font-bold py-2 px-4 btn rounded-lg text-sm">
                 Submit Report
                </button>
                </Link>
                {/* <button class="bg-white text-black border border-white font-bold py-2 px-4 rounded-lg text-sm ml-2">
                  API Key Settings
                </button>
                <p class="text-sm"></p>
                <div class="border border-gray-400 rounded-lg px-2 py-2 mt-4 mb-4">
                  <p class="text-sm mb-1">
                    Generating Articles
                    <span class="text-primary font-bold text-lg">0</span>/0
                  </p>
                  <hr />
                  <ul class="mt-1"></ul>
                  <div class="mt-auto"> </div>
                </div> */}
                <div class="border-t border-gray-300 mt-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default report;
