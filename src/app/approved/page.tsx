"use client";

import { Button } from "@/components/ui/button";
import JSConfetti from "js-confetti";
import { Check } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Approved() {
  React.useEffect(() => {
    const jsConfetti = new JSConfetti();

    jsConfetti.addConfetti({ emojis: ["💳"] });
  }, []);

  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <div className="bg-green-400 p-5 rounded-full">
        <Check className="w-20 h-20" />
      </div>

      <div className="text-center mt-10">
        <h1 className="text-3xl">
          Você foi aprovado no processo do cartão de crédito.
        </h1>
        <p className="opacity-70 text-xl w-[1000px]">
          Analisamos o seu perfil, e observamos que você se enquada no perfil
          ideia para nosso cartão de crédito.
        </p>
      </div>

      <Link href="/">
        <Button className="mt-10" size="lg">
          Voltar para página inicial
        </Button>
      </Link>
    </main>
  );
}
