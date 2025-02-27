import { Suspense } from "react";
import SortProducts from "./practpage/sortProducts";

export default function Home() {
  // const [counter, setCounter]= useState()
  return (
    <main>
      <Suspense>
        <SortProducts />
      </Suspense>
    </main>
  );
}
