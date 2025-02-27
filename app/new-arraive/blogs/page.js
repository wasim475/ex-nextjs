import blogs from '../../data/blogs';

export default function Blogs(){
    return (
        <>
            <div>
                <h1>Blogs list</h1>
            </div>
            <div className='grid grid-cols-3 gap-5'>
                {
                    blogs.map((blog)=>(
                        <div className='border-2 p-4 mt-5' key={blog.id}> 
                            <h1>{blog.title}</h1>
                            <p>{blog.description}</p>
                        </div>
                    ))
                }
            </div>
        </>
    );
}