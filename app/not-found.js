'use client'

import { usePathname } from 'next/navigation';

export default function NotFound() {
    const pathName = usePathname()
    return (
        <div>
            <h1 className="font-bold text-xl">Page not found</h1>
            <div className="mt-5">
                The page you are requesting({pathName}) was not found!
            </div>
        </div>
    );
}