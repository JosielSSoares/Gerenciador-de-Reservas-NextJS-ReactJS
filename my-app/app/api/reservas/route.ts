import  db from '@/app/api/database'

export async function GET() {

    try {
        const [rows] = await db.query<any>("SELECT * FROM clientes")
        if(rows.length > 0){
            return new Response(JSON.stringify(rows),{
            headers: {'Contente-type': 'applicatiom/json'}
            })
        } else{
            return new Response(JSON.stringify({erro:"Usuario não encontrado"}))
        }
    } catch (error) {
        return new Response(JSON.stringify({erro: error}), 
        {status: 500}
    )}
}