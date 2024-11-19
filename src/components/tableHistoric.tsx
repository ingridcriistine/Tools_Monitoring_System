"use client"
interface dadoLinhasTable {
    tituloUm: string ,
    tituloDois: string,
    tituloTres: string,
    tituloQuatro: string,
    dadoLinha : {[key: string] : {name: string , RFID: string, datetime: string, loan: string }}[]
}

const TabelaHistorico: React.FC<dadoLinhasTable> = ({tituloUm, tituloDois, tituloTres, tituloQuatro, dadoLinha}) => {{
    console.log(dadoLinha);
    return (
        <> 
         <table className="flex w-full flex-col">
            <thead className="w-full items-center flex ">
                <tr className="flex w-full items-center">
                    <th className="justify-center flex w-[25%] p-5">{tituloUm}</th>
                    <th className="justify-center flex w-[25%] p-5">{tituloDois}</th>
                    <th className="justify-center flex w-[25%] p-5">{tituloTres}</th>
                    <th className="justify-center flex w-[25%] p-5">{tituloQuatro}</th>
                </tr>
            </thead>
            <tbody className="w-full items-center">
                {dadoLinha?.fo((item, index) => (
                    <tr key={index} className="flex w-full items-center	">
                        <td className="justify-center flex w-[25%] border-b-2 p-2">{item.dadoLinha.name}</td>
                        <td className="justify-center flex w-[25%] border-b-2 p-2">{item.dadoLinha.RFID}</td>
                        <td className="justify-center flex w-[25%] border-b-2 p-2">{item.dadoLinha.loan}</td>
                        <td className="justify-center flex w-[25%] border-b-2 p-2">{item.dadoLinha.datetime}</td>
                    </tr>
                )   
                )}
            </tbody>
        </table>
        </>

    );
}}
export default TabelaHistorico;