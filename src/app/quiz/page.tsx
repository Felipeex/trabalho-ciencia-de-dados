"use client";

import { useDecisionTree } from "@/hooks/use-decision-tree";
import { X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const alphabet: string[] = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(65 + i)
);

export default function Quiz() {
  const [tree] = useDecisionTree();
  const router = useRouter();

  if (tree.currentNodeFinished()) {
    if (tree.getBinaryFinalResult()) {
      return <h1>Aprovado</h1>;
    }

    router.push("/reproved");
  }

  function handleChooseAnswer(answer: string) {
    tree.move(answer);
  }

  return (
    <>
      <h1 className="font-bold text-3xl m-8 absolute">Hype Bank</h1>

      <h2 className="font-normal text-2xl mt-16 absolute left-1/2 transform -translate-x-1/2">
        {tree.getCurrectNodeQuestion()}
      </h2>

      <Link href="/">
        <button className="rounded-full bg-[#2BB32A] p-2 absolute right-10 top-10">
          <X />
        </button>
      </Link>

      <section className="flex flex-col h-screen justify-center items-center gap-6">
        {tree.getCurrectNodeResponses()?.map((response, key) => (
          <button
            key={key}
            onClick={() => handleChooseAnswer(response)}
            className="group w-[500px] bg-[#252A28] flex py-4 px-6 rounded-[8px] items-center gap-6 hover:bg-[#2BB32A] transition-colors"
          >
            <div className="text-xl bg-[#202422] px-5 py-3 rounded-full group-hover:bg-white group-hover:text-black transition-colors">
              {alphabet[key]}
            </div>
            <span className="font-normal text-xl">{response}</span>
          </button>
        ))}
      </section>
    </>
  );
}
