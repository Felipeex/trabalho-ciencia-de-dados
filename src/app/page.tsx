import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="max-w-7xl m-auto">
        <section className="flex gap-8">
          <div className="flex flex-col items-start gap-8">
            <h1 className="text-[56px] leading-[64px] tracking-[-2.5%] font-bold">
              Descubra o cartão de crédito perfeito para você
            </h1>
            <p className="text-lg text-[#ADB2B1] font-normal">
              Descubra o poder dos nossos cartões de crédito seguros e
              gratificantes. Peça o seu agora mesmo através do nosso sistema de
              aprovação automática.
            </p>
            <button className="bg-[#2BB32A] px-8 py-4 rounded-[64px] flex gap-4 text-base font-medium">
              Perdir meu cartão
              <ArrowRight />
            </button>
            <Image
              src="./home-stats.svg"
              width={349}
              height={56}
              alt="Card Stats"
            />
          </div>

          <Image
            src="./home-card.svg"
            width={536.78}
            height={339.96}
            alt="Card Image"
          />
        </section>
      </main>

      <Image
        src="./home-line-decoration.svg"
        width={1446}
        height={5080.07}
        alt="Line Decoration"
        className="absolute top-[-1px] left-1/2 transform -translate-x-1/2 -z-10"
      />
    </>
  );
}
