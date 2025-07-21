import { useState } from "react";

export default function CalcApp() {
  const [eqString, setEqString] = useState("");

  function solveEquation() {
    const operands = eqString.split(/[^0-9.]/);
    if (operands.length === 2) {
      const [operator = ""] = eqString.match(/[^0-9.]/) || [];
      const [op1 = "", op2 = ""] = operands;
      let result = 0;
      if (operator === "+")
        result = +op1 + +op2;
      else if (operator === "-")
        result = +op1 - +op2;
      else if (operator === "*")
        result = +op1 * +op2;
      else if (operator === "/")
        result = +op1 / +op2;
      setEqString(result.toString());
    }
  }

  function handleClick(action: string) {
    if (action === "ac") {
      setEqString("");
      return;
    }



    if (!/[0-9.]/.test(action)) {
      if (!/[0-9.]/.test(eqString[eqString.length - 1])) {
        setEqString(prev => prev.slice(0, -1) + action);
      } else {
        // Calculate result before adding operator
        solveEquation()

        setEqString(prev => prev + action);

      }
      return;
    }

    setEqString(prev => prev + action);
  }


  

  return (
    <main className="flex flex-col items-center pt-16 text-4xl">
      <div className="w-full max-w-xl outline outline-gray-500">
        <div className="flex justify-end p-3 bg-gray-500 text-white text-5xl overflow-hidden">
          <span>{eqString || "0"}</span>
        </div>
        <div className="grid grid-cols-4 grid-rows-5 *:bg-white *:py-8 *:outline *:outline-gray-500 *:hover:scale-[101%] *:cursor-pointer">
          <button onClick={() => handleClick("ac")}>AC</button>
          <button>+/-</button>
          <button>%</button>
          <button onClick={() => handleClick("/")} className="!bg-orange-400 text-white">/</button>

          <button onClick={() => handleClick("7")}>7</button>
          <button onClick={() => handleClick("8")}>8</button>
          <button onClick={() => handleClick("9")}>9</button>
          <button onClick={() => handleClick("*")} className="!bg-orange-400 text-white">X</button>

          <button onClick={() => handleClick("4")}>4</button>
          <button onClick={() => handleClick("5")}>5</button>
          <button onClick={() => handleClick("6")}>6</button>
          <button onClick={() => handleClick("-")} className="!bg-orange-400 text-white">-</button>

          <button onClick={() => handleClick("1")}>1</button>
          <button onClick={() => handleClick("2")}>2</button>
          <button onClick={() => handleClick("3")}>3</button>
          <button onClick={() => handleClick("+")} className="!bg-orange-400 text-white">+</button>

          <button onClick={() => handleClick("0")} className="col-span-2">0</button>
          <button onClick={() => handleClick(".")}>.</button>
          <button onClick={solveEquation} className="!bg-orange-400 text-white">=</button>
        </div>
      </div>
    </main>
  );
}
