import { useEffect, useState } from "react";

export default function CalcApp() {
  const [dispValue, setDispValue] = useState("0")
  const [currValue, setCurrValue] = useState(0);
  const [prevValue, setPrevValue] = useState(0);
  const [currOperator, setCurrOperator] = useState<string>();
  const [resetInput, setResetInput] = useState<boolean>(false);
  const [error, setError] = useState("");

  function inputDigit(digit: string) {
    let newDispValue = dispValue
    if (resetInput) {
      newDispValue = String(digit)
      setDispValue(newDispValue)
      setResetInput(false)
    } else {
      newDispValue = newDispValue === "0" ? String(digit) : newDispValue + digit
      setDispValue(newDispValue)
    }
    setCurrValue(parseFloat(newDispValue))
  }

  function inputDecimal() {
    if (resetInput) {
      setDispValue("0.")
      setResetInput(false)
    } else if (!dispValue.includes(".")) {
      setDispValue(dispValue + ".")
    }
  }

  function setOperation(operator: string) {
    let scopeCurrValue = currValue;
    if (currOperator) {
      const calcRes = calculate();
      if (!calcRes) return;
      scopeCurrValue = calcRes;
    }

    setPrevValue(scopeCurrValue);
    setCurrOperator(operator);
    setResetInput(true);
  }

  function calculate() {
    if (!currOperator) return;

    let result = 0;
    switch (currOperator) {
      case "+":
        result = prevValue + currValue;
        break;
      case "-":
        result = prevValue - currValue;
        break;
      case "*":
        result = prevValue * currValue;
        break;
      case "/":
        if (currValue === 0) {
          setError("Error: Division by zero");
          return;
        }
        result = prevValue / currValue;
        break;
    }

    setDispValue(String(result))
    setCurrValue(result);
    setPrevValue(0);
    setCurrOperator(undefined);
    setResetInput(true);
    return result;
  }

  function clear() {
    setDispValue("0")
    setCurrValue(0);
    setPrevValue(0);
    setCurrOperator(undefined);
    setResetInput(false);
  }

  function swapSign() {
    if (dispValue[0] === "-") {
      setCurrValue(Math.abs(currValue))
      setDispValue(Math.abs(currValue).toString())
    } else {
      setCurrValue(0 - currValue)
      setDispValue((0 - currValue).toString())
    }
  }

  function doPercent() {
    if (resetInput) {
      setCurrValue(currValue / 100)
      setDispValue((currValue / 100).toString())
    } else {
      setCurrValue(0)
      setDispValue("0")
    }
  }

  useEffect(() => {
    setError("");
  }, [currValue, currOperator]);

  return (
    <main className="flex flex-col items-center pt-16 text-4xl">
      <div className="w-full max-w-xl bg-[#202021] p-2 rounded-lg">
        <div className="outline outline-[#202021]">
          <div className="flex flex-col items-end p-3 text-white text-5xl overflow-hidden">
            {/* <span>{parseDisplay() || "0"}</span> */}
            {/* <span className={`text-base text-gray-400 mb-2 ${!isSigns() ? "invisible" : ""}`}>{parseDisplay(eqString) || "0"}</span>
            <span>{parseDisplay(getAfterSign()) || "0"}</span> */}
            <span className={`text-base text-gray-400 mb-2 h-6`}>{!!currOperator && `${prevValue}${currOperator}`}</span>
            {
              !error
                ? <span className="h-12">{dispValue}</span>
                : <span className="h-12 text-red-400 text-5xl">{error}</span>
            }
          </div>
          <div className="grid grid-cols-4 grid-rows-5 gap-1 *:bg-[#444444] *:hover:bg-[#323232] *:py-5 *:rounded-md text-white *:hover:scale-[101%] *:cursor-pointer">
            <button onClick={clear} className="!bg-[#323232] text-white hover:!bg-[#444444]">AC</button>
            <button onClick={swapSign} className="!bg-[#323232] text-white hover:!bg-[#444444]">+/-</button>
            <button onClick={doPercent} className="!bg-[#323232] text-white hover:!bg-[#444444]">%</button>
            <button onClick={() => setOperation("/")} className="!bg-[#323232] text-white hover:!bg-[#444444]">/</button>

            <button onClick={() => inputDigit("7")}>7</button>
            <button onClick={() => inputDigit("8")}>8</button>
            <button onClick={() => inputDigit("9")}>9</button>
            <button onClick={() => setOperation("*")} className="!bg-[#323232] text-white hover:!bg-[#444444]">X</button>

            <button onClick={() => inputDigit("4")}>4</button>
            <button onClick={() => inputDigit("5")}>5</button>
            <button onClick={() => inputDigit("6")}>6</button>
            <button onClick={() => setOperation("-")} className="!bg-[#323232] text-white hover:!bg-[#444444]">-</button>

            <button onClick={() => inputDigit("1")}>1</button>
            <button onClick={() => inputDigit("2")}>2</button>
            <button onClick={() => inputDigit("3")}>3</button>
            <button onClick={() => setOperation("+")} className="!bg-[#323232] text-white hover:!bg-[#444444]">+</button>

            <button onClick={() => inputDigit("0")} className="col-span-2">0</button>
            <button onClick={inputDecimal}>.</button>
            <button onClick={calculate} className="!bg-[#323232] text-white hover:!bg-[#444444]">=</button>
          </div>
        </div>
      </div>

    </main>
  );
}
