import { BackgroundLines } from "@/components/ui/background-lines";
import { FlipWords } from "@/components/ui/flip-words";

export default function Home() {
  const words = ["Innovative", "Beautiful", "Creative", "Functional"];
  return (
    <div className="flex items-center justify-center min-h-screen w-full pb-20 gap-16 sm:p-2 font-[family-name:var(--font-geist-sans)]">
      <BackgroundLines className="flex items-center justify-center flex-col px-4">
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-4xl sm:text-7xl font-sans py-4 sm:py-16 relative z-20 font-bold tracking-tight">
          Elevate Your Ideas with <br /> <FlipWords words={words} duration={1000}/> Design
        </h2>
        <p className="max-w-xl mx-auto text-base sm:text-lg text-neutral-700 dark:text-neutral-400 text-center">
          Let's turn your vision into reality—together, we can create something extraordinary!
        </p>
      </BackgroundLines>

    </div>
  );
}


