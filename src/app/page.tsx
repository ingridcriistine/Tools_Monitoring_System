import { CardTool } from "@/components/cardTool";
import Image from "next/image";
import imgTools from "@/app/assets/tools.jpg";

export default function Home() {
  return (
    <div className="bg-white grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start ml-[250px]">
        <Image src={imgTools} alt="" width={10000} height={10000} className="w-full h-[420px] bg-white rounded-3xl align-center shadow-md shadow-slate-400"/>
        <div className="flex flex-row flex-wrap gap-6 ">
          <CardTool imagem={1} title={"Martelo"} status={"true"}/>
          <CardTool imagem={2} title={"Alicate"} status={"true"}/>
          <CardTool imagem={3} title={"Chave de fenda"} status={"true"}/>
          <CardTool imagem={4} title={"Chave inglesa"} status={"true"}/>
        </div>
      </main>
    </div>
  );
}
