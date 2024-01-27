'use client';
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const onNavigation = () => router.push("/form");

  return (
    <main className="flex items-start justify-end flex-col min-h-screen w-full p-11 md:w-3/6">
      <h1 className="text-5xl font-fasterone text-black-12 text-wrap text-start">HAPPY <br/>GAME <br/> DAY</h1>
      <button onClick={() => onNavigation()}
        className="bg-slate-50 mt-6 p-4 w-full font-bold font-familjen rounded-md hover:bg-slate-300">
          START
      </button>
    </main>
  );
}
