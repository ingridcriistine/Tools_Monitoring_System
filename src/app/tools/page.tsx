import Image from "next/image";
import imgLupa from "@/app/assets/lupa.png"

export default function Tools() {
  return (
    <div className="bg-white text-black flex flex-col min-h-screen p-8 ml-[250px] pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <div className="flex flex-row justify-between mt-16 pb-4">
            <h3 className="text-[22px] font-bold">Ferramentas</h3>
            <button className="bg-green-200 p-2 pr-4 pl-4 rounded-lg">Adicionar ferramenta</button>
        </div>
        <hr/>
        <div className="flex flex-row mt-8 w-full justify-end">
          <input type="search" placeholder="Pesquisar ferramenta" className="w-[450px] border-b-2 pl-2 focus:outline-none"/>
          <Image src={imgLupa} alt="" className="w-3 h-3 m-2 relative right-8"/>
        </div>
    </div>
  );
}
