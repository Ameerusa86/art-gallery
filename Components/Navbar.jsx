"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import MobileMenu from "./MobileMenu";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

const Navbar = () => {
  const { data: session, status } = useSession();

  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };
  return (
    <nav className="w-full h-16 bg-black text-white mx-auto flex justify-between items-center px-7">
      <div className="w-full flex justify-between items-center lg:max-w-[1920px] mx-auto">
        <Link href={"/"} className="font-bold text-2xl">
          The Art <span className="text-blue-400">Gallery</span>
        </Link>
        {/* Navbar */}
        <div className="hidden md:flex items-center justify-between space-x-5">
          <ul className="flex gap-4">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/gallery"}>Gallery</Link>
            </li>
            {status === "authenticated" && (
              <li>
                <Link href={"/add_post"}>Add Post</Link>
              </li>
            )}
            <li>
              <Link href={"/"}>About</Link>
            </li>
            <li>
              <Link href={"/"}>Contact</Link>
            </li>
          </ul>
          {status !== "authenticated" ? (
            <div className="flex gap-5 items-center justify-center">
              <Link href={"/api/auth/signin"}>
                <button
                  onClick={() => signIn()}
                  className="bg-blue-400 text-white px-3 rounded-sm"
                >
                  Login
                </button>
              </Link>
              {/* <Link href={"/api/auth/signout"}>
                <button className="bg-blue-400 text-white px-3 rounded-sm">
                  Sign Up
                </button>
              </Link> */}
            </div>
          ) : (
            <div className="flex gap-5 items-center justify-center">
              <Link href={"/api/auth/signout"}>
                <button
                  onClick={() => signOut()}
                  className="bg-blue-400 text-white px-3 rounded-sm"
                >
                  Logout
                </button>
              </Link>
              <Image
                className="rounded-full"
                src={session.user?.image}
                width={50}
                height={50}
                alt="user image"
              />
            </div>
          )}
        </div>
      </div>
      {/* Mobile Menu Icons */}
      <div className="">
        <button className="md:hidden" onClick={toggleMenu}>
          {!mobileMenu ? (
            <FiMenu className="h-6 w-6 cursor-pointer" />
          ) : (
            <div className="w-full">
              <AiOutlineClose className="h-6 w-6 cursor-pointer" />
              <MobileMenu />
            </div>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
