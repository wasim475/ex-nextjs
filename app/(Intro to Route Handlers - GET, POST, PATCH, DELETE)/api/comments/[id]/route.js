import comments from '../../../data/comments'

export async function GET(_request, {params}){  //option parametre er jonn _ use kore hoy... optional ja kichur jonno eti use hoy...
    const commentId = params.id
    const comment = comments.find(comment=>comment.id === parseInt(commentId))
    return Response.json(comment)
}


export async function PATCH(request, {params}){
    const comment = await request.json()
    const commentId = params.id
    const commentIndex = comments.findIndex(comment=>comment.id === parseInt(commentId))
    comments[commentIndex]= comment.text
    return Response.json(comments[commentIndex])
}
export async function DELETE(_request, {params}){
    const commentId = params.id
    const commentIndex = comments.findIndex(comment=>comment.id === parseInt(commentId))
    const commentToDelete = comments[commentIndex]
    comments.slice(commentIndex,1)
    return Response.json(commentToDelete)
}