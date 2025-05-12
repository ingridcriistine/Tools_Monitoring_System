"use client"

import React, { useEffect, useState } from "react";
import { getData } from "@/firebaseService";// Importa a função de serviço
import { CardTool } from "@/components/cardTool";
import Image from "next/image";
import imgTools from "@/app/assets/tools.jpg";

interface tools {
  name: string, 
  qta: number,
}

export default function Home() {

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
    console.log(dado);
  }, []);

  return (
    <div className="bg-white grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-6 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start ml-[200px]">
        <div className="w-full flex h-52 items-top">
          <Image src={imgTools} alt=""  className="flex w-full h-full object-cover object-top  bg-white rounded-3xl align-center shadow-md shadow-slate-400"/>
        </div>
        <div className="flex flex-row flex-wrap">
          {dado&&
          <>
            <CardTool imagem={4} title={"Chave de fenda"} status={(dado[2].qta == 0) ? false : true}/>
            <CardTool imagem={2} title={"Alicate"} status={(dado[1].qta == 0) ? false : true}/>
            <CardTool imagem={1} title={"Martelo"} status={(dado[0].qta == 0) ? false : true}/>
            <CardTool imagem={3} title={"Chave de boca"} status={(dado[3].qta == 0) ? false : true}/>  
          </>
          }
          
        </div>
      </main>
    </div>
  );
}
