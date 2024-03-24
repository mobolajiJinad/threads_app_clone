"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

const DeleteThread = ({ currentUserId, authorId }) => {
  const pathname = usePathname();

  if (currentUserId !== authorId || pathname === "/") return null;

  return (
    <Image
      src="/assets/delete.svg"
      alt="delete"
      width={18}
      height={18}
      className="cursor-pointer object-contain"
    />
  );
};
export default DeleteThread;
