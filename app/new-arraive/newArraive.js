import CustomLink from '../components/customLink/customLink';

export default function NewArrive(){
    return (
        <ul>
        <li>
          <CustomLink path={'/new-arraive'} >Home</CustomLink>
        </li>
        <li>
          <CustomLink path={'/new-arraive/electronic'} >Electric</CustomLink>
        </li>
        <li>
          <CustomLink path={'/new-arraive/education'} >Education</CustomLink>
        </li>
       
      </ul>
    );
}