import Image from "next/image";
import { userProps } from "@/tipos";

export default async function Home() {

  const respota = await fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/usuarios`)
  const dados: userProps[] = await respota.json();
  return (
    <div className="font-sans grid grid-rows items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
          {Array.isArray(dados) && dados.length > 0 ? (
            // Container para a lista, que adiciona um espaço entre cada usuário
            <div className="space-y-4">
              {dados.map((item) => (
                // 3. CARD DO USUÁRIO: Usamos flex-col para empilhar as informações e o botão.
                <div key={item.id} className="border p-4 rounded-md shadow-sm flex flex-col items-start">

                  {/* Informações do usuário (Nome e Email) */}
                  <div className="mb-3">
                    <h1 className="text-lg text-black"><b>Nome:</b> {item.nome}</h1>
                    <p className="text-md text-gray-600"><b>Email:</b> {item.status}</p>
                  </div>
                </div>
              ))}
            </div>
          )
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  )
}
