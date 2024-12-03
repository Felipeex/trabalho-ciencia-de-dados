import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import Link from "next/link";

export default function Reproved() {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <div className="bg-red-400 p-5 rounded-full">
        <X className="w-20 h-20" />
      </div>

      <div className="text-center mt-10">
        <h1 className="text-3xl">
          Você foi reprovado no processo do cartão de crédito.
        </h1>
        <p className="opacity-70 text-xl w-[1000px]">
          Analisamos o seu perfil, e observamos que você ainda não se enquada no
          perfil ideia para nosso cartão de crédito, tente novamente em 30 dias.
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
