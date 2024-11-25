import { CardTool } from "@/components/cardTool";
import Image from "next/image";
import imgTools from "@/app/assets/tools.jpg";

export default function Home() {
  return (
    <div className="bg-white grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start ml-[200px]">
        <div className="w-full flex h-52 items-top">
          <Image src={imgTools} alt=""  className="flex w-full h-full object-cover object-top"/>
        </div>
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
