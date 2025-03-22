import comments from '../../../data/comments'

export async function GET(request, {params}){
    const commentId = params.id
    const comment = comments.find(comment=>comment.id === parseInt(commentId))
    return Response.json(comment)
}


export async function PATCH(request, {params}){
    const commentId = params.id
    const comment = comments.find(comment=>comment.id === parseInt(commentId))
    return Response.json(comment)
}