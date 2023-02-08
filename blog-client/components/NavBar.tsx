import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <Link href="/">
        <div className="flex items-center cursior-pointer">
          <Image
            src="/../public/blog.png"
            height={35}
            width={40}
            alt="blog-logo"
          />
          <span className="font-bold ml-2 text-primary">Kanon blog</span>
        </div>
      </Link>

      <ul className="flex items-center">
        <li className="mr-6 text-gray-600 font-medium">
          <a href="#">pricing</a>
        </li>
        <li className="mr-6 text-gray-600 font-medium">
          <a href="#">document</a>
        </li>
        <li className="mr-6 text-gray-600 font-medium">
          <a href="#">about</a>
        </li>
        <li className="mr-6 text-gray-600 font-medium">
          <a href="#">contact</a>
        </li>
        <li className="mr-6 text-gray-600 font-medium">
          <a href="#">details</a>
        </li>
      </ul>

      <ul className="flex item-center">
        <li className="mr-6 text-gray-600 font-medium">
          <a href="#" className="hover:text-gray-400">
            Log in
          </a>
        </li>
        <li className="mr-6 text-gray-600 font-medium">
          <a
            href="#"
            className="bg-primary px-4 py-2 rounded-sm text-white hover:bg-primary-dark transition-all"
          >
            Sign up
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
