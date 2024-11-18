// firebaseService.ts
import { database } from "./firebaseConfig"; // Importa a configuração do Firebase
import { ref, get } from "firebase/database";

// Função para capturar dados do Firebase Realtime Database
export const getData = async (path: string) => {
  try {
    const dataRef = ref(database, path); // Ref para o caminho desejado
    const snapshot = await get(dataRef); // Faz a leitura dos dados
    if (snapshot.exists()) {
      return snapshot.val(); // Retorna os dados se existirem
    } else {
      throw new Error("No data available"); // Se não houver dados, lança um erro
    }
  } catch (error) {
    console.error("Error fetching data from Firebase:", error);
    throw error; // Lança o erro para o componente tratar
  }
};
