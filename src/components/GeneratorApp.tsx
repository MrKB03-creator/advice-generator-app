import { useState, useEffect } from "react";
import { PatternDividerDesktop, iconDice } from "../assets/images";

const GeneratorApp = () => {
  const [count, setCount] = useState(1);
  const [advice, setAdvice] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchAdvice = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      setAdvice(data.slip.advice);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  const handleClick = () => {
    setCount(count + 1);
    fetchAdvice();
  };

  return (
    <div className="rounded-lg bg-Dark-Grayish-Blue  p-9 font-Manrope md:w-[560px] md:h-[330px] max-sm:w-[80%] max-sm:h-[40%]">
      <div className="flex flex-col items-center justify-between h-full">
        <h1 className="text-Neon-Green text-base">ADVICE # {count} </h1>
        <p className="text-center text-Light-Cyan md:text-[28px] max-sm:text-lg">
          {loading ? "Loading..." : `"${advice}"`}
        </p>
        <div className="flex flex-row w-full h-[50px] ">
          <img
            src={PatternDividerDesktop}
            alt="Pattern Divider Desktop"
            className="w-full h-[20px]"
          />
        </div>
        <button
          className="bg-Neon-Green w-14 h-14 rounded-full flex justify-center items-center absolute xl:top-[68%] lg:top-[65%] md:top-[70%] max-sm:top-[66%] cursor-"
          onClick={handleClick}
        >
          <img src={iconDice} alt="Icon Dice" />
        </button>
      </div>
    </div>
  );
};

export default GeneratorApp;
