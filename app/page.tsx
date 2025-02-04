"use client";
import { Transition } from "@headlessui/react";
import "./globals.css";
import Image from "next/image"
import { useState , useEffect } from "react";

export default function Home() {
  const [scrollPos, setScrollPos] = useState(0);

  const handleScroll = (event: React.WheelEvent | React.TouchEvent) => {
    const deltaY =
      "deltaY" in event
        ? event.deltaY // PCスクロール
        : event.type === "touchmove"
        ? event.touches[0].clientY - event.touches[event.touches.length - 1].clientY // スワイプ
        : 0;

    setScrollPos((prev) => Math.max(0, Math.min(100, prev + deltaY * 0.1)));
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };  
  }, []);

  const L = 0.46 + (scrollPos / 100) * (0.704 - 0.46);  // 明度 (L)
  const C = 0.08 + (scrollPos / 100) * (0.14 - 0.08);  // 彩度 (C)
  const h = 194.77 - (scrollPos / 100) * (194.77 - 182.503);  // 色相 (h)

  // 背景色に OKLCH を適用
  const backgroundColor = `oklch(${L} ${C} ${h}deg)`;

  const translateYValue = scrollPos === 100 ? 0 : scrollPos * -5;


  return (
    <>
      <div
        className="mx-auto content-center h-dvh bg-teal-500"
        onWheel={handleScroll}
        onTouchMove={handleScroll}
        // style={{ backgroundColor: backgroundColor }}
        ><Transition
          show={false}
          as="div"
          className="h-dvh"
          style={{
            opacity: 1 - (scrollPos / 100),
            transform: `translateY(${scrollPos * -5}px)`
          }}>
          <Image
            src="https://avatars.githubusercontent.com/u/193315978?s=400&u=0231ca17fbfb8858722c9b98e810c4730fcc353d&v=4"
            alt="icon"
            width={400}
            height={400}
            className="rounded-full mx-auto"/>
          <p className="text-center font-rampart text-8xl text-gray-100">YAMADANI</p>
          <svg className="size-15 text-gray-100 mx-auto mt-10 animate-bounce" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
          </svg>
        </Transition>
        <Transition
        show={true}
        as="div" 
          className="h-dvh"
          // style={{
          //   opacity: scrollPos / 100,
          //   transform: `translateY(${translateYValue}px)`
          // }}
          ><Image
            src="https://avatars.githubusercontent.com/u/193315978?s=400&u=0231ca17fbfb8858722c9b98e810c4730fcc353d&v=4"
            alt="icon"
            width={400}
            height={400}
            className="rounded-full mx-auto my-5"/>
          <p className="text-center font-rampart text-8xl text-gray-100">YAMADANI</p>
          <ul className="text-center mt-10 text-gray-100 text-2xl">
            <li><a href="https://github.com/YAMADANI/">GitHub</a></li>
          </ul>
        </Transition>
      </div>
    </>
  );
}
