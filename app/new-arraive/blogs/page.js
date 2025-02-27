import blogs from '../../data/blogs';

export default function Blogs(){
    return (
        <>
            <div>
                <h1>Blogs list</h1>
            </div>
            <div>
                {
                    blogs.map((blog)=>(
                        
                    ))
                }
            </div>
        </>
    );
}