"use client"
import { useState } from "react"
import Image from "next/image"
import deletar from "@/app/assets/delete.png"

interface linha {
    colunaUm : string, 
    colunaDois : string
}

interface dadosTable {
    tituloUm: string,
    tituloDois: string
    dado: linha[]
}

const Tabela: React.FC<dadosTable> = ({tituloUm, tituloDois,  dado}) => {{
    return (
        <> 
         <table>
            <tr>
                <th>{tituloUm}</th>
                <th>{tituloDois}</th>
                <th>Deletar</th>
            </tr>
            <tr>
                <td>{dado[0].colunaUm}</td>
                <td>{dado[1].colunaDois}</td>
                <td><Image src={deletar} alt=""></Image></td>
            </tr>
        </table>
        </>

    );
}}

export default Tabela