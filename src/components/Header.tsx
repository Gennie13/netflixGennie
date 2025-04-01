import React from "react";
import Link from "next/link";

export default function Header() {
    return(
        <header className="w-full flex justify-between content-center items-center p-6 bg-black fixed top-0 z-100">
        <a href="/">
         <img src="/logo.png" alt="" className="w-36" />
        </a>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="/" className="hover:text-gray-800">Нүүр хуудас</Link></li>
            <li><Link href="/" className="hover:text-gray-800">Кино сан</Link></li>
            <li><Link href="/" className="hover:text-gray-800">ТВ шоу</Link></li>
            <li><Link href="/" className="hover:text-gray-800">Миний жагсаалт</Link></li>
          </ul>
        </nav>
      </header>
    )
}