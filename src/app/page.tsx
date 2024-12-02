import { ArrowRight } from "lucide-react";
import Image from "next/image";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="max-w-7xl m-auto">
        <section className="mt-36 flex gap-8 justify-center">
          <div className="max-w-[604px] flex flex-col items-start gap-8">
            <h1 className="text-[56px] leading-[64px] tracking-[-2.5%] font-bold">
              Descubra o cartão de crédito perfeito para você
            </h1>
            <p className="text-lg text-[#ADB2B1] font-normal">
              Descubra o poder dos nossos cartões de crédito seguros e
              gratificantes. Peça o seu agora mesmo através do nosso sistema de
              aprovação automática.
            </p>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <button className="bg-[#2BB32A] hover:bg-[#26a126] transition-colors px-8 py-4 rounded-[64px] flex gap-4 text-base font-medium">
                  Perdir meu cartão
                  <ArrowRight />
                </button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    Confirme sua Elegibilidade para o Cartão
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    Precisamos fazer algumas perguntas para confirmar se você
                    atende aos requisitos para o cartão de crédito
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Voltar</AlertDialogCancel>
                  <AlertDialogAction
                    className="bg-[#31CD63] hover:bg-[#2dbb5a] text-white"
                    asChild
                  >
                    <Link href="/quiz">Ok, vamos lá</Link>
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
            <Image
              src="./home-stats.svg"
              width={349}
              height={56}
              alt="Card Stats"
            />
          </div>

          <div className="relative">
            <Image
              src="./home-card.svg"
              width={536.78}
              height={339.96}
              alt="Card Image"
              className="self-start"
            />
            <div className="absolute top-[5%] left-[40%] w-[492px] h-[492px] bg-[#2BB32A] rounded-full -z-10" />
          </div>
        </section>
      </main>

      <Image
        src="./home-line-decoration.svg"
        width={1446}
        height={5080.07}
        alt="Line Decoration"
        className="absolute top-[-1px] left-1/2 transform -translate-x-1/2 -z-10"
      />

      <Image
        src="./home-star-decoration.svg"
        width={47}
        height={47}
        alt="Line Decoration"
        className="absolute top-[120px] left-[65%] -z-10"
      />

      <Image
        src="./home-star-decoration.svg"
        width={47}
        height={47}
        alt="Line Decoration"
        className="absolute top-1/2 left-1/2 -z-10 rotate-6"
      />

      <Image
        src="./home-star-decoration.svg"
        width={47}
        height={47}
        alt="Line Decoration"
        className="absolute top-[70%] left-[25%] scale-50 rotate-45 -z-10"
      />

      <div className="absolute w-[492px] h-[492px] bg-[#2BB32A] rounded-full top-[-30%] left-[60%] transform -translate-x-[60%] -z-10 blur-[400px]" />
    </>
  );
}
