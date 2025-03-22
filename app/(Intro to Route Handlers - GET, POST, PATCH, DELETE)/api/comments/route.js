import comments from '../../data/comments';

export async function GET(request){
    const searchparams = request.nextUrl.searchParams;
    const query = searchparams.get('query')
    if(query){
        const filterComments = comments.filter(comment=> comment.text.toLocaleLowerCase().includes(query))
        return Response.json(filterComments)
    }
    return Response.json(comments)
}


export async function POST(request){
    const comment = await request.json()
    const newComment = {
        id: comments.length +1,
        text: comment.text
    }
    comments.push(newComment)
    // return Response.json(newComment)

    return new Response(JSON.stringify(newComment),{
        headers:{
            "Content-Type":"aplication/json"
        },
        status:201
    })
}

export async function PATCH(request){
    
}