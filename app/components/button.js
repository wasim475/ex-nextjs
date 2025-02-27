"use client";
import { useRouter } from "next/navigation";

export default function Button({ children, path, prefetch=false }) {
  const router = useRouter();
  const onNvaigate = (pathname) => {
    router.push(pathname);
  };
  return (
    <button
    
      onClick={() => onNvaigate(path)}
      prefetch={prefetch}
      className="bg-green-600 text-white border-2 border-gray-400 rounded-lg hover:bg-white hover:text-green-600 font-semibold px-4 py-2 transition duration-150 mt-10"
    >
      {children}
    </button>
  );
}
