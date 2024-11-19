"use client"
import { useState } from "react"
import Image from "next/image"
import deletar from "@/app/assets/delete.png"

interface dadoLinhasTable {
    tituloUm: string ,
    tituloDois: string
    tituloTres: string
    dadoLinha: {EDV : string,  RFID : string, name : string}[] 
    
}

const TabelaUser: React.FC<dadoLinhasTable> = ({tituloUm, tituloDois, tituloTres, dadoLinha}) => {{
    console.log(dadoLinha)
    return (
        <> 
         <table className="flex w-full flex-col">
            <thead className="w-full items-center flex ">
                <tr className="flex w-full items-center">
                    <th className="justify-center flex w-[25%] p-5">{tituloUm}</th>
                    <th className="justify-center flex w-[25%] p-5">{tituloDois}</th>
                    <th className="justify-center flex w-[25%] p-5">{tituloTres}</th>
                    <th className="justify-center flex w-[25%] p-5 ">Deletar</th>
                </tr>
            </thead>
            <tbody className="w-full items-center">
                {dadoLinha?.map((item, index) => (
                    <tr key={index} className="flex w-full items-center	">
                        <td className="justify-center flex w-[25%] border-b-2 p-2">{item.EDV}</td>
                        <td className="justify-center flex w-[25%] border-b-2 p-2">{item.RFID}</td>
                        <td className="justify-center flex w-[25%] border-b-2 p-2">{item.name}</td>
                        <td className="justify-center flex w-[25%] border-b-2 p-2.5 cursor-pointer"><Image src={deletar} alt="" width={20}></Image></td>
                    </tr>
                )   
                )}
            </tbody>
        </table>
        </>
    );
}}

export default TabelaUser;