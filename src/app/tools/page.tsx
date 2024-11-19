import Image from "next/image";

export default function Tools() {
  return (
    <div className="bg-white text-black flex flex-col min-h-screen p-8 ml-[250px] pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <div className="flex flex-row justify-between mt-16 pb-4">
            <h3 className="text-[22px] font-bold">Ferramentas</h3>
            <button className="bg-green-200 p-2">Adicionar ferramenta</button>
        </div>
        <hr/>
        <input></input>
    </div>
  );
}
