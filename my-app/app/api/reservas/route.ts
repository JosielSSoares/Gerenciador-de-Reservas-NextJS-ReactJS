import  db from '@/app/api/database'

export async function GET() {
    try {
        const [rows] = await db.query<any>("SELECT nome, data_reserva, horas, status FROM clientes")
        if(rows.length > 0){
            return new Response(JSON.stringify(rows), {
                headers: { 'Content-Type': 'application/json' }
            })
        } else {
            return new Response(JSON.stringify({erro:"Usuário não encontrado"}), {
                headers: { 'Content-Type': 'application/json' }
            })
        }
    } catch (error) {
        return new Response(JSON.stringify({erro: error}), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        })
    }
}