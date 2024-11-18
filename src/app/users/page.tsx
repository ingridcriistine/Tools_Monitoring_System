"use client"

import React, { useEffect, useState } from "react";
import { getData } from "@/firebaseService";// Importa a função de serviço
import Tabela from "@/components/table";

interface employers{
    "employers": { EDV: string, RFID: string, name: string }[]
}

const User: React.FC = () => {
    const [dado, setDado] = useState<employers>();

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getData("/employers");
                console.log(data)
          setDado(data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
      fetchData();
    }, []);
    

  return (
    <div>
        <Tabela tituloUm={"Nome"} tituloDois={"Teste"} dadoLinha ={dado?.employers}>
        </Tabela>
    </div>
  );
};

export default User;
