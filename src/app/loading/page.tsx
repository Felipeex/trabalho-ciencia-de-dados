"use client";

import { LoadingIcon } from "@/components/loading";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React from "react";

export default function Loading() {
  const params = useSearchParams();
  const router = useRouter();

  React.useEffect(() => {
    const result = params.get("result");

    setTimeout(() => {
      if (result === "01000001") {
        router.push("/approved");
      } else {
        router.push("/reproved");
      }
    }, 2000);
  }, []);

  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <div className="bg-[#252A28] p-5 rounded-full">
        <LoadingIcon />
      </div>

      <div className="text-center mt-10">
        <h1 className="text-3xl">Estamos analisando o seu perfil...</h1>
        <p className="opacity-70 text-xl w-[1000px]">
          Esse processo pode demorar alguns segundos, por favor aguarde
        </p>
      </div>
    </main>
  );
}
