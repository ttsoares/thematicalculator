"use client";

import { useState } from "react";
import { useTheme } from "next-themes";

//---------------------------------
export default function Home() {
  const { theme, setTheme } = useTheme("theme1");

  const [theme1, setTheme1] = useState(true);
  const [theme2, setTheme2] = useState(false);
  const [theme3, setTheme3] = useState(false);

  const [array1, setArray1] = useState([]);
  const [buffer, setBuffer] = useState([]);
  const [operator, setOperator] = useState("");

  function arrayToNumber(array) {
    const numberString = array.join("");
    let commaTOpoint = numberString.replace(",", ".");
    return parseFloat(commaTOpoint);
  }

  function numberToArray(num) {
    const arr1 = Array.from(String(num));
    const arr2 = arr1.map((elm) => (elm === "." ? "," : String(elm)));
    return arr2.slice(0, 9);
  }

  function callTheme1() {
    setTheme("theme1");
    setTheme1(true);
    setTheme2(false);
    setTheme3(false);
  }
  function callTheme2() {
    setTheme("theme2");
    setTheme1(false);
    setTheme2(true);
    setTheme3(false);
  }
  function callTheme3() {
    setTheme("theme3");
    setTheme1(false);
    setTheme2(false);
    setTheme3(true);
  }

  function callNumber(element) {
    if (element === "0" && buffer.length === 0) return;
    setBuffer((buffer) => [...buffer, element]);
  }

  function fncDel() {
    const copyArr = [...buffer];
    copyArr.pop();
    setBuffer(copyArr);
  }

  function fncReset() {
    setArray1([]);
    setBuffer([]);
    setOperator("");
  }

  function fncEqual() {
    if (operator === "" || array1.length === 0 || buffer.length === 0) return;
    let result;
    switch (operator) {
      case "+":
        result = arrayToNumber(array1) + arrayToNumber(buffer);
        break;
      case "-":
        result = arrayToNumber(array1) - arrayToNumber(buffer);
        break;
      case "X":
        result = arrayToNumber(array1) * arrayToNumber(buffer);
        break;
      case "/":
        result = arrayToNumber(array1) / arrayToNumber(buffer);
        break;
    }
    setBuffer(numberToArray(Math.round(result * 10000) / 10000));
    setArray1([]);
    setOperator("");
  }

  function fncOperator(op) {
    if (buffer.length === 0) return;
    setArray1(buffer);
    setOperator(op);
    setBuffer([]);
  }

  return (
    <main
      className={`${theme} flex min-h-screen flex-col items-center justify-center p-14 bg-t-main_bg`}
    >
      {/* Header */}
      <header className="flex items-center justify-between w-64 md:w-96 mb-3">
        <h1 className={`${theme} font-bold text-lg text-t-text_out`}>calc</h1>
        <div className="flex">
          <h1 className="text-xs mt-2 mr-2 text-t-text_out">theme</h1>
          <div className="flex">
            <div className="flex flex-col">
              <div className="flex">
                <span
                  className={`${theme} ml-2 mr-2 hover:cursor-pointer text-t-text_out text-xs`}
                  onClick={callTheme1}
                >
                  1
                </span>
                <span
                  className={`${theme} ml-2 mr-2 hover:cursor-pointer text-t-text_out text-xs`}
                  onClick={callTheme2}
                >
                  2
                </span>
                <span
                  className={`${theme} ml-2 mr-2 hover:cursor-pointer text-t-text_out text-xs`}
                  onClick={callTheme3}
                >
                  3
                </span>
              </div>
              <div
                className={`${theme} flex bg-t-bg_keyboard h-4 rounded-md items-center`}
              >
                <div
                  onClick={callTheme1}
                  className="hover:cursor-pointer ml-1 mr-1"
                >
                  {theme1 ? (
                    <div
                      className={`${theme} w-3 h-3  bg-t-bg_equal rounded-full`}
                    ></div>
                  ) : (
                    <div
                      className={`${theme} w-3 h-3  bg-t-bg_keyboard rounded-full`}
                      onClick={callTheme1}
                    ></div>
                  )}
                </div>

                <div
                  onClick={callTheme2}
                  className="hover:cursor-pointer ml-1 mr-1"
                >
                  {theme2 ? (
                    <div
                      className={`${theme} w-3 h-3 bg-t-bg_equal rounded-full`}
                    ></div>
                  ) : (
                    <div
                      className={`${theme} w-3 h-3  bg-t-bg_keyboard rounded-full`}
                      onClick={callTheme2}
                    ></div>
                  )}
                </div>

                <div
                  onClick={callTheme3}
                  className="hover:cursor-pointer ml-1 mr-1"
                >
                  {theme3 ? (
                    <div
                      className={`${theme} w-3 h-3 ml-1 bg-t-bg_equal rounded-full`}
                    ></div>
                  ) : (
                    <div
                      className={`${theme} w-3 h-3  bg-t-bg_keyboard rounded-full`}
                      onClick={callTheme3}
                    ></div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* display */}
      <div
        className={`${theme} flex w-64 md:w-96 h-20 bg-t-display_bg mb-4 rounded-md  items-center justify-end`}
      >
        <h1 className={`${theme} flex text-t-text_out font-bold text-3xl mr-3`}>
          {buffer.length === 0
            ? ""
            : buffer.map((elm, index) => <span key={index}>{elm}</span>)}
        </h1>
      </div>
      {/* keyboard */}
      <div className={`${theme} w-64 md:w-96 bg-t-bg_keyboard rounded-lg`}>
        <div
          className={`${theme} m-3 pt-1  pb-1 grid grid-cols-4 grid-rows-5 gap-3 bg-t-bg_keyboard justify-center justify-items-center`}
        >
          <h2
            className={`${theme} bg-t-bg_nrm_keys text-t-text_out`}
            onClick={() => callNumber("7")}
          >
            7
          </h2>
          <h2
            className={`${theme} bg-t-bg_nrm_keys text-t-text_out`}
            onClick={() => callNumber("8")}
          >
            8
          </h2>
          <h2
            className={`${theme} bg-t-bg_nrm_keys text-t-text_out`}
            onClick={() => callNumber("9")}
          >
            9
          </h2>
          <h3
            className={`${theme} bg-t-spc_key_bg text-white shadow-sm shadow-t-spc_key_shad`}
            onClick={fncDel}
          >
            DEL
          </h3>
          <h2
            className={`${theme} bg-t-bg_nrm_keys text-t-text_out`}
            onClick={() => callNumber("4")}
          >
            4
          </h2>
          <h2
            className={`${theme} bg-t-bg_nrm_keys text-t-text_out`}
            onClick={() => callNumber("5")}
          >
            5
          </h2>
          <h2
            className={`${theme} bg-t-bg_nrm_keys text-t-text_out`}
            onClick={() => callNumber("6")}
          >
            6
          </h2>
          <h2
            className={`${
              operator === "+"
                ? `${theme} bg-t-spc_key_shad`
                : "bg-t-bg_nrm_keys text-t-text_out"
            }`}
            onClick={() => fncOperator("+")}
          >
            +
          </h2>
          <h2
            className={`${theme} bg-t-bg_nrm_keys text-t-text_out`}
            onClick={() => callNumber("1")}
          >
            {" "}
            1
          </h2>
          <h2
            className={`${theme} bg-t-bg_nrm_keys text-t-text_out`}
            onClick={() => callNumber("2")}
          >
            {" "}
            2
          </h2>
          <h2
            className={`${theme} bg-t-bg_nrm_keys text-t-text_out`}
            onClick={() => callNumber("3")}
          >
            {" "}
            3
          </h2>
          <h2
            className={`${
              operator === "-"
                ? `${theme} bg-t-spc_key_shad`
                : "bg-t-bg_nrm_keys text-t-text_out"
            }`}
            onClick={() => fncOperator("-")}
          >
            -
          </h2>
          <h2
            className={`${theme} bg-t-bg_nrm_keys text-t-text_out`}
            onClick={() => callNumber(",")}
          >
            .
          </h2>
          <h2
            className={`${theme} bg-t-bg_nrm_keys text-t-text_out`}
            onClick={() => callNumber("0")}
          >
            0
          </h2>
          <h2
            className={`${
              operator === "/"
                ? `${theme} bg-t-spc_key_shad`
                : "bg-t-bg_nrm_keys text-t-text_out"
            }`}
            onClick={() => fncOperator("/")}
          >
            /
          </h2>
          <h2
            className={`${
              operator === "X"
                ? `${theme} bg-t-spc_key_shad`
                : "bg-t-bg_nrm_keys text-t-text_out"
            }`}
            onClick={() => fncOperator("X")}
          >
            X
          </h2>
          <h3
            onClick={fncReset}
            className={`${theme} text-white bg-t-spc_key_bg w-28 md:w-[169px] col-span-2 shadow-sm shadow-t-spc_key_shad`}
          >
            RESET
          </h3>
          <h4
            onClick={fncEqual}
            className={`${theme} bg-t-bg_equal w-28 md:w-[169px] col-span-2 text-t-text_display shadow-md shadow-t-equal_shad`}
          >
            =
          </h4>
        </div>
      </div>
    </main>
  );
}
