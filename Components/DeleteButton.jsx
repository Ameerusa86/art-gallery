"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import { AiOutlineDelete } from "react-icons/ai";

const DeleteButton = ({ id }) => {
  const router = useRouter();
  const { data: session, status } = useSession();

  const handleDelete = () => {
    fetch(`http://localhost:3000/api/gallery/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    router.push("/gallery");
    router.refresh();
  };
  return (
    <div onClick={handleDelete}>
      {status === "authenticated" && (
        <AiOutlineDelete
          size={15}
          className="text-red-700 w-10 h-10 p-2 mt-5 cursor-pointer hover:bg-gray-300 hover:rounded-full"
        />
      )}
    </div>
  );
};

export default DeleteButton;
