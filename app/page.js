import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Back button hidden on home page */}
      <div className="invisible">
        <Link href="/">
          <Image
            src="/cross.svg"
            width={40}
            height={40}
            alt="Back to home"
            className="fixed top-14 left-14 z-50 cursor-pointer"
          />
        </Link>
      </div>

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
          <h1 className="text-8xl mb-2 font-[family-name:var(--font-colchester)]">
            Illustrated Primer
          </h1>
          
          <p className="text-4xl text-center">
            Welcome to your own Primer where you can learn about any topic
          </p>

          <Link href="/details">
            <button className="rounded-full bg-foreground text-background px-8 py-3 text-2xl hover:bg-[#383838] transition-colors">
              Ready to Start
            </button>
          </Link>

          <div className="w-[80%]">
            <Image
              src="/landing.jpg"
              alt="Landing illustration"
              width={2000}
              height={1000}
              className="w-full h-auto rounded-lg"
              priority
            />
          </div>
        </main>
      </div>
    </>
  );
}
