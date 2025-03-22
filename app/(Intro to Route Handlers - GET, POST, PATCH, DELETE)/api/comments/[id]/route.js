import comments from '../../../data/comments'

export async function GET(_request, {params}){  //option parametre er jonn _ use kore hoy... optional ja kichur jonno eti use hoy...
    const commentId = params.id
    const comment = comments.find(comment=>comment.id === parseInt(commentId))
    return Response.json(comment)
}


export async function PATCH(request, {params}){
    const commentId = params.id
    const comment = comments.find(comment=>comment.id === parseInt(commentId))
    return Response.json(comment)
}