'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Details() {


  return (
    <>
      <Link href="/">
        <Image
          src="/cross.svg"
          width={40}
          height={40}
          alt="Back to home"
          className="fixed top-14 left-14 z-50 cursor-pointer hover:opacity-80 transition-opacity"
        />
      </Link>

      <Image
        src="/styleborder.svg"
        width={100}
        height={100}
        alt="Corner border"
        className="fixed top-4 left-4 z-40"
      />
      <Image
        src="/styleborder.svg"
        width={100}
        height={100}
        alt="Corner border"
        className="fixed top-4 right-4 z-50 rotate-90"
      />
      <Image
        src="/styleborder.svg"
        width={100}
        height={100}
        alt="Corner border"
        className="fixed bottom-4 left-4 z-50 -rotate-90"
      />
      <Image
        src="/styleborder.svg"
        width={100}
        height={100}
        alt="Corner border"
        className="fixed bottom-4 right-4 z-50 rotate-180"
      />
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 sm:p-0">
        <main className="flex flex-col gap-8 row-start-2 items-center w-full max-w-5xl">
          <div className="w-[80%] mb-8">
            <Image
              src="/details.jpg"
              alt="Details illustration"
              width={2000}
              height={1000}
              className="w-full h-auto rounded-lg"
              priority
            />
          </div>

          <h1 className="text-6xl mb-2 font-[family-name:var(--font-colchester)]">
            Before We Begin
          </h1>
          
          <form 
            action="/journey" 
            className="flex flex-col gap-6 w-full max-w-md"
          >
            <input
              type="text"
              name="name"
              required
              placeholder="What's your name?"
              className="text-2xl p-4 rounded-lg border border-black/20 bg-transparent"
            />
            <textarea
              name="topic"
              required
              placeholder="What would you like to learn about?"
              className="text-2xl p-4 rounded-lg border border-black/20 bg-transparent min-h-[150px] resize-none"
            />
            <button 
              type="submit"
              className="rounded-full bg-foreground text-background px-8 py-3 text-2xl hover:bg-[#383838] transition-colors mt-4"
            >
              Begin Journey
            </button>
          </form>
        </main>
      </div>
    </>
  );
} 