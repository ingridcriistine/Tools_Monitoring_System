"use client"
import React, { useEffect, useState } from "react";
import { getData } from "@/firebaseService";// Importa a função de serviço
import Tabela from "@/components/tableTools";
import Image from "next/image";
import imgLupa from "@/app/assets/lupa.png"

interface tools {
  name: string, 
  qta: number,
}

const Tool: React.FC = () => {
  const [dado, setDado] = useState<tools[]>();

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getData("/tools");
        console.log(data)
        setDado(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);


  return (
    <div className="bg-white text-black flex flex-col min-h-screen p-8 ml-[250px] pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div>
        <div className="flex flex-row justify-between mt-16 pb-4">
          <h3 className="text-[22px] font-bold">Ferramentas</h3>
          <button className="bg-green-200 p-2 pr-4 pl-4 rounded-lg">Adicionar ferramenta</button>
        </div>
        <hr />
        <div className="flex flex-row mt-8 w-full justify-end">
          <input type="search" placeholder="Pesquisar usuário" className="w-[450px] border-b-2 pl-2 focus:outline-none" />
          <Image src={imgLupa} alt="" className="w-3 h-3 m-2 relative right-8 cursor-pointer	 " />
        </div>
      </div>
      <div className="mt-12">
        {dado &&  <Tabela tituloUm={"Nome"} tituloDois={"Quantidade"} dadoLinha={dado}/>}
      </div>
    </div>
  );
};

export default Tool;
