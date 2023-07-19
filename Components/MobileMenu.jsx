"use client";
import Link from "next/link";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const MobileMenu = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  const renderUserImage = () => {
    if (session?.user?.image) {
      return (
        <Image
          className="rounded-full"
          src={session.user.image}
          width={75}
          height={75}
          alt="user image"
        />
      );
    }
    return null;
  };

  return (
    <div className="md:hidden absolute left-0 top-16 w-full h-screen py-5 bg-blue-800 z-50">
      <ul className="flex mt-16 flex-col space-y-10 justify-center items-center text-2xl font-bold mb-10">
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
          {renderUserImage()}
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
