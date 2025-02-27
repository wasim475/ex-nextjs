import blogs from '../../../data/blogs';

export default function SingleBlog({params}){
    const {singleBlog}= params
    const blog = blogs.find(blog=>blog.id== singleBlog)
    return (
        <div>
            <h1>{blog.title}</h1>
            <h2>{blog.description}</h2>
        </div>
    );
}