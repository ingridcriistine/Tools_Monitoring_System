import { CardTool } from "@/components/cardTool";
import Image from "next/image";
import imgTools from "@/app/assets/bosch.png";

export default function Home() {
  return (
    <div className="bg-white grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start ml-[200px]">
        <Image src={imgTools} alt="" width={10} height={10}/>
        <div className="flex flex-row flex-wrap">
          <CardTool imagem={1} title={"Martelo"} status={"true"}/>
          <CardTool imagem={2} title={"Alicate"} status={"true"}/>
          <CardTool imagem={3} title={"Chave de fenda"} status={"true"}/>
          <CardTool imagem={4} title={"Chave inglesa"} status={"true"}/>
        </div>
      </main>
    </div>
  );
}
