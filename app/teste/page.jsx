"use client";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const Page = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme("theme1");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <></>;
  }

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-blue-gray-500">
      <div className="w-3/4 grid grid-cols-3 grid-rows-1 mb-20">
        <div
          onClick={() => setTheme("theme1")}
          className={`flex bg-brown-600 hover:cursor-pointer w-28 text-white h-10`}
        >
          <p>Theme1</p>
        </div>

        <div
          onClick={() => setTheme("theme2")}
          className={`flex bg-brown-600 hover:cursor-pointer w-28 text-white h-10`}
        >
          <p>Theme2</p>
        </div>

        <div
          onClick={() => setTheme("theme3")}
          className={`flex bg-brown-600 hover:cursor-pointer w-28 text-white h-10`}
        >
          <p>Theme3</p>
        </div>
      </div>
      <div className="w-3/4 grid grid-cols-3 grid-rows-4">
        <div className={`${theme} w-28 h-12 bg-t-main_bg flex`}>11</div>
        <div className={`${theme} w-28 h-12 bg-t-tog_keypad flex`}>22</div>
        <div className={`${theme} w-28 h-12 bg-t-screen_bg flex`}>33</div>
        <div className={`${theme} w-28 h-12 bg-t-key_bg flex`}>44</div>
        <div className={`${theme} w-28 h-12 bg-t-blue_key_shad flex`}>55</div>
        <div className={`${theme} w-28 h-12 bg-t-key_ng_tog flex`}>66</div>
        <div className={`${theme} w-28 h-12 bg-t-red_key_shad flex`}>77</div>
        <div className={`${theme} w-28 h-12 bg-t-orang_key_bg flex`}>88</div>
        <div className={`${theme} w-28 h-12 bg-t-grayish_key_shad flex`}>
          99
        </div>
        <div className={`${theme} w-28 h-12 bg-t-text_dark flex`}>10</div>
        <div className={`${theme} w-28 h-12 bg-t-text_light flex`}>11</div>
        <div className={`${theme} w-28 h-12 bg-white flex`}>12</div>
      </div>
      <h1 className="text-3xl font-bold">{theme}</h1>
    </div>
  );
};

export default Page;
