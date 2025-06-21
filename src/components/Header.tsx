"use client";

import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  return (
    <div className="w-full bg-black text-white shadow-md px-6 py-4 flex items-center">
      <h1 className="text-5xl font-semibold">Sequence!</h1>
      <button
        className="btn ml-auto mr-15"
        onClick={() => router.push("/new-game")}
      >
        {" "}
        New Game{" "}
      </button>
      <button className="btn mr-20"> History </button>
    </div>
  );
}
