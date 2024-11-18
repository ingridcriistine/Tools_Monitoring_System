"use client"
import { useState } from "react"
import Image from "next/image"
import deletar from "@/app/assets/delete.png"

interface linha {
    EDV : string, 
    RFID : string,
    name : string
}

interface dadoLinhasTable {
    tituloUm: string,
    tituloDois: string
    dadoLinha: {EDV : string,  RFID : string, name : string}[] | undefined
}

const Tabela: React.FC<dadoLinhasTable> = ({tituloUm, tituloDois,  dadoLinha}) => {{
    return (
        <> 
         <table>
            <tr>
                <th>{tituloUm}</th>
                <th>{tituloDois}</th>
                <th>Deletar</th>
            </tr>
                {dadoLinha?.map((item, index) => 
                <tr>
                    <td>{item.EDV}</td>
                    <td>{item.RFID}</td>
                    <td>{item.name}</td>
                    <td><Image src={deletar} alt=""></Image></td>
                </tr>
                )}
        </table>
        </>

    );
}}

export default Tabela