import Image from "next/image";
import Link from "next/link";
import { userProps } from "@/tipos";
import { formatarDataBrasileira} from "./(servicos)/formatData";
import { formatarHorario } from "./(servicos)/formatHours";

export default async function Home() {

  const resposta = await fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/reservas`)
  const dados: userProps[] = await resposta.json();

  return (
    <div className="font-sans grid grid-rows items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1 className="text-2xl font-bold mb-6">Lista de Usuários</h1>

      {Array.isArray(dados) && dados.length > 0 ? (
        <div className="space-y-4 w-full max-w-2xl">
          {dados.map((item, index) => (
            <div key={item.id || `cliente-${index}`} className="border p-4 rounded-md shadow-sm bg-white">
              <div className="mb-3">
                <h2 className="text-lg text-black font-semibold">
                  <span className="font-bold">Nome:</span> {item.nome}
                </h2>
                <p className="text-md text-gray-600">
                  <span className="font-bold">Data:</span> {formatarDataBrasileira(item.data_reserva)}
                </p>
                <p className="text-md text-gray-600">
                  <span className="font-bold">Horário:</span> {formatarHorario(item.horas)}
                </p>
                <p className="text-md text-gray-600">
                  <span className="font-bold">Status:</span> {item.status ? 'Confirmado' : 'Cancelado'}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center p-8">
          <p className="text-gray-600">Nenhum usuário encontrado.</p>
        </div>
      )}

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center mt-8">
        {/* Footer content if needed */}
      </footer>
    </div>
  )
}
