import Link from 'next/link';

const Navbar = () => {
  return (
    <>
      <ul className='flex gap-x-5'>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/about/us"}>Us</Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
