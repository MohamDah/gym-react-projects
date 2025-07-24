import { useEffect, useLayoutEffect, useState } from "react";

export default function CalcApp() {
  const [eqString, setEqString] = useState("");
  const [lastOperand, setLastOperand] = useState("")

  const isDigited = () => eqString.length === 0 || /[+*/s]$/.test(eqString);
  const isSigns = () => !!(eqString)?.match(/[^0-9.]/)?.length;
  const getAfterSign = () => eqString.split(/[+*/-]/).at(-1)!;


  function solveEquation() {
    setEqString(`${eval(eqString)}`);
  }

  function handleClick(action: string) {
    if (action === "ac") {
      setEqString("");
      return;
    }


    // if (action === "0" && isDigited()) return;


    if (/[+*/-]/.test(action)) {
      if (/[+*/-]$/.test(eqString)) {
        setEqString(prev => prev.slice(0, -1) + action);
      } else {
        // Calculate result before adding operator
        solveEquation();

        setEqString(prev => prev + action);

      }
      return;
    }

    setEqString(prev => prev + action);
  }

  useLayoutEffect(() => {
    // if (/^0+$/.test(eqString)) {
    //   setEqString("0");
    // }
    if (/^0+./.test(eqString)) {
      console.log(eqString)
      setEqString(prev => prev.replace(/^0+/g, ""))
    }
  }, [eqString]);

  // TODO: Handle periods edgecase


  function parseDisplay(str: string) {
    return str
  }


  // function switchSign() {
  //   if (isDigited()) {

  //   }
  // }


  return (
    <main className="flex flex-col items-center pt-16 text-4xl">
      <div className="w-full max-w-xl bg-[#202021] p-2 rounded-lg">
        <div className="outline outline-[#202021]">
          <div className="flex flex-col items-end p-3 text-white text-5xl overflow-hidden">
            {/* <span>{parseDisplay() || "0"}</span> */}
            <span className={`text-base text-gray-400 mb-2 ${!isSigns() ? "invisible" : ""}`}>{parseDisplay(eqString) || "0"}</span>
            <span>{parseDisplay(getAfterSign()) || "0"}</span>
          </div>
          <div className="grid grid-cols-4 grid-rows-5 gap-1 *:bg-[#444444] *:hover:bg-[#323232] *:py-5 *:rounded-md text-white *:hover:scale-[101%] *:cursor-pointer">
            <button onClick={() => handleClick("ac")} className="!bg-[#323232] text-white hover:!bg-[#444444]">AC</button>
            <button onClick={() => null} className="!bg-[#323232] text-white hover:!bg-[#444444]">+/-</button>
            <button className="!bg-[#323232] text-white hover:!bg-[#444444]">%</button>
            <button onClick={() => handleClick("/")} className="!bg-[#323232] text-white hover:!bg-[#444444]">/</button>

            <button onClick={() => handleClick("7")}>7</button>
            <button onClick={() => handleClick("8")}>8</button>
            <button onClick={() => handleClick("9")}>9</button>
            <button onClick={() => handleClick("*")} className="!bg-[#323232] text-white hover:!bg-[#444444]">X</button>

            <button onClick={() => handleClick("4")}>4</button>
            <button onClick={() => handleClick("5")}>5</button>
            <button onClick={() => handleClick("6")}>6</button>
            <button onClick={() => handleClick("-")} className="!bg-[#323232] text-white hover:!bg-[#444444]">-</button>

            <button onClick={() => handleClick("1")}>1</button>
            <button onClick={() => handleClick("2")}>2</button>
            <button onClick={() => handleClick("3")}>3</button>
            <button onClick={() => handleClick("+")} className="!bg-[#323232] text-white hover:!bg-[#444444]">+</button>

            <button onClick={() => handleClick("0")} className="col-span-2">0</button>
            <button onClick={() => handleClick(".")}>.</button>
            <button onClick={solveEquation} className="!bg-[#323232] text-white hover:!bg-[#444444]">=</button>
          </div>
        </div>
      </div>

    </main>
  );
}
