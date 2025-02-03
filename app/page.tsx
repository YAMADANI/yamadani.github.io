"use client";
import "./globals.css";
import Image from "next/image"
import { useState , useEffect } from "react";
import { Transition } from "@headlessui/react";

export default function Home() {
  const [scrollPos, setScrollPos] = useState(0);

  const handleScroll = (event: React.WheelEvent | React.TouchEvent) => {
    const deltaY =
      "deltaY" in event
        ? event.deltaY // PCスクロール
        : event.type === "touchmove"
        ? event.touches[0].clientY - event.touches[event.touches.length - 1].clientY // スワイプ
        : 0;

    setScrollPos((prev) => Math.max(0, Math.min(200, prev + deltaY * 0.1)));
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      <Transition
        show={scrollPos <= 100}
        as={"div"}
        className="flex-col mx-auto h-dvh bg-ic content-center"
        onWheel={handleScroll}
        onTouchMove={handleScroll}
        style={{ opacity: 1 - (scrollPos / 100) }}>
        <div style={{transform: `translateY(${scrollPos * -5}px)`}}>
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
        </div>
      </Transition>
      <Transition
        show={scrollPos > 100}
        as={"div"}
        className="flex-col mx-auto h-dvh bg-teal-500 content-center"
        onWheel={handleScroll}
        onTouchMove={handleScroll}
        style={{ opacity: (scrollPos - 100) / 100 }}>
        <div style={{transform: `translateY(${scrollPos * 5}px)`}}>
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
        </div>
      </Transition>
    </>
  );
}
