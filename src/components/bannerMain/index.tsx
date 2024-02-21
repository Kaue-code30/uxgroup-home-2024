import { useState } from "react";

export default function BannerMain() {
  const [contentIndex, setContentIndex] = useState(0); // Estado para controlar o índice do conteúdo atual

  const contentBanners = [
    {
      title: "Institucional",
      text: "Conteúdo do Institucional",
    },
    {
      title: "Gestão",
      text: "Conteúdo do Gestão",
    },
    {
      title: "Logística",
      text: "Conteúdo do Logística",
    },
  ];

  const handleButtonClick = (index : number) => {
    setContentIndex(index); 
  };

  return (
    <>
      <section className="relative flex w-full h-2/5">
        <div className="w-full md:p-0 h-[100vh] bg-no-repeat bg-cover bg-gray-400 relative">
          <div className="flex flex-col justify-center text-white md:text-4xl text-xl items-center w-full h-2/4">
            <div className="p-5 md:p-0 h-full flex items-end justify-end">
              <h1 className="font-bold text-white">
                {contentBanners[contentIndex].title}
              </h1>
            </div>
          </div>
          <div className="w-full h-2/4 flex items-end justify-center relative">
            <div className="w-[180px] h-[100px] md:w-[350px] md:h-[210px] rounded-ss-[200px] rounded-se-[200px] bg-white relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  className={`w-16 h-16 text-gray-800 dark:text-white delay-100 transform transition-transform ${
                    contentIndex === 1 ? "-rotate-90" : ""} transition-transform ${
                        contentIndex === 0 ? "-rotate-180" : ""} transition-transform ${
                            contentIndex === 2 ? "-rotate-[270deg]" : ""}`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 1v12m0 0 4-4m-4 4L1 9"
                  />
                </svg>
              </div>
              <div className="absolute top-[-10px] left-1/2 transform -translate-x-1/2 -translate-y-full">
                <button
                  className="bg-yellow-500 text-white px-4 py-2 rounded-full"
                  onClick={() => handleButtonClick(0)}
                >
                  Botão 3
                </button>
              </div>
              <div className="absolute right-[-40px] md:bottom-2/4 md:right-[-60px] transform translate-x-1/2 translate-y-1/2">
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-full"
                  onClick={() => handleButtonClick(1)}
                >
                  Botão 2
                </button>
              </div>
              <div className="absolute left-[-40px] md:bottom-2/4 md:left-[-60px] transform -translate-x-1/2 translate-y-1/2">
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded-full"
                  onClick={() => handleButtonClick(2)}
                >
                  Botão 1
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
