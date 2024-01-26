'use client';
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const onNavigation = () => router.push("/form");

  return (
    <main className="flex items-center justify-center flex-col min-h-screen w-full p-10">
      <h1 className="text-4xl font-montserratalternates font-bold text-black-12 text-wrap text-center">HAPPY <br/>GAME DAY</h1>

      <button onClick={() => onNavigation()}
        className="m-5 bg-slate-50 p-4 w-full font-bold font-inter rounded-sm hover:bg-slate-300">
          START
      </button>
    </main>
  );
}
