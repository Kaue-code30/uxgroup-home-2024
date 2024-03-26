import { useState } from "react";

export default function CarrouselVertical() {
  const [contentIndex, setContentIndex] = useState(0);
  const content = [
    {
      index: 0,
      title: "TMS embarcador",
      contentTitle: "TMS embarcador",
      contentText:
        "Reduza custos com organização, rastreabilidade e controle dos produtos em estoque e das suas vendas, garantindo eficiência operacional e satisfação do cliente.",
    },
    {
      index: 1,
      title: "TMS Transportador",
      contentTitle: "TMS Transportador",
      contentText:
        "Reduza custos com organização, rastreabilidade e controle dos produtos em estoque e das suas vendas, garantindo eficiência operacional e satisfação do cliente.",
    },
    {
      index: 2,
      title: "Plataforma de comunicação",
      contentTitle: "Plataforma de comunicação",
      contentText:
        "Reduza custos com organização, rastreabilidade e controle dos produtos em estoque e das suas vendas, garantindo eficiência operacional e satisfação do cliente.",
    },
    {
      index: 3,
      title: "Loja digital",
      contentTitle: "Loja digital",
      contentText:
        "Reduza custos com organização, rastreabilidade e controle dos produtos em estoque e das suas vendas, garantindo eficiência operacional e satisfação do cliente.",
    },
  ];

  const handleButtonClick = (index : number) => {
    setContentIndex(index);
  };

  return (
    <>
      <section className="flex flex-col gap-10 p-10 w-full h-full">
        <div className="w-full flex flex-col gap-2 items-center justify-center">
          <h1 className="font-bold">Inove, Controle e Venda Mais</h1>
          <p className="font-normal w-4/5 text-center">
            Adapte-se às mudanças do mercado com facilidade. Nossas soluções de
            tecnologia modulares oferecem flexibilidade, informação e eficiência
            para a gestão de fretes, gestão de transportes e comunicação das
            suas vendas digitais. Conheça nossas soluções!
          </p>
        </div>

        <div className="flex md:pl-[100px] bg-[#5F5F5F] rounded-md w-full h-full">
          <div className="flex flex-col justify-around gap-5 p-10 md:w-2/4 h-full">
            {content.map((item, index) => (
              <div
                key={index}
                className="flex hover:opacity-50 cursor-pointer hover:bg-white hover:transition-all flex-col font-bold md:w-2/4 gap-3 rounded-md p-6 bg-transparent"
                onClick={() => handleButtonClick(index)}
              >
                <div className="w-full bg-black h-1"></div>
                <h3 className=" text-base text-white">{item.title}</h3>
              </div>
            ))}
          </div>

          <div className="flex items-center  justify-center md:w-3/4">
            <div className=" flex flex-col items-start gap-2 justify-center h-full p-10 w-full " >
              <h4 className="font-bold text-white text-3xl">{content[contentIndex].contentTitle}</h4>
              <p className="text-white w-3/4">{content[contentIndex].contentText}</p>
              <button className="rounded-sm  bg-white text-black p-2 w-1/5">
                saiba mais
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
