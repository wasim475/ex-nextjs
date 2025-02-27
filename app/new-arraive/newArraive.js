import CustomLink from '../components/customLink/customLink';

export default function NewArrive(){
    return (
        <ul className='flex justify-between'>
        <li>
          <CustomLink path={'/new-arraive'} >Home</CustomLink>
        </li>
        <li>
          <CustomLink prefetch={false} path={'/new-arraive/electronic'} >Electric</CustomLink>
        </li>
        <li>
          <CustomLink path={'/new-arraive/education'} >Education</CustomLink>
        </li>
        <li>
          <CustomLink path={'/new-arraive/heavy'} >Heavy</CustomLink>
        </li>
        <li>
          <CustomLink path={'/new-arraive/blogs'} >Blogs</CustomLink>
        </li>
        <li>
          <CustomLink path={'/new-arraive/books'} >Books</CustomLink>
        </li>
       
      </ul>
    );
}