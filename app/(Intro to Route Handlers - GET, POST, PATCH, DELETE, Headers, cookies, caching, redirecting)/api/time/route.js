export const dynamic = 'force-dynamic' // chaching off korar jonno
export async function GET(){
    return new Response(new Date().toLocaleTimeString())
}