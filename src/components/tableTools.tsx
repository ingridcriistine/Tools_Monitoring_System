"use client"
import { useState } from "react"
import Image from "next/image"
import deletar from "@/app/assets/delete.png"

interface dadoLinhasTable {
    tituloUm: string ,
    tituloDois: string,
    dadoLinha: {name : string,  qta : number}[] 
}

const TabelaTools: React.FC<dadoLinhasTable> = ({tituloUm, tituloDois, dadoLinha}) => {{
    console.log(dadoLinha)
    return (
        <> 
         <table className="flex w-full flex-col">
            <thead className="w-full items-center flex ">
                <tr className="flex w-full items-center">
                    <th className="justify-center flex w-[30%] p-5">{tituloUm}</th>
                    <th className="justify-center flex w-[30%] p-5">{tituloDois}</th>
                    <th className="justify-center flex w-[30%] p-5 ">Deletar</th>
                </tr>
            </thead>
            <tbody className="w-full items-center">
                {dadoLinha?.map((item, index) => (
                    <tr key={index} className="flex w-full items-center	">
                        <td className="justify-center flex w-[30%] border-b-2 p-2">{item.name}</td>
                        <td className="justify-center flex w-[30%] border-b-2 p-2">{item.qta}</td>
                        <td className="justify-center flex w-[30%] border-b-2 p-2.5 cursor-pointer"><Image src={deletar} alt="" width={20}></Image></td>
                    </tr>
                )   
                )}
            </tbody>
        </table>
        </>

    );
}}

export default TabelaTools;