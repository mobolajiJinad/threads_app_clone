"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const UserCard = ({ id, name, username, imgUrl, personType }) => {
  const router = useRouter();
  const isCommunity = personType === "Community";

  return (
    <article className="flex flex-col justify-between gap-4 max-xs:rounded-xl max-xs:bg-[#101012] max-xs:p-4 xs:flex-row xs:items-center">
      <div className="flex flex-1 items-start justify-start gap-3 xs:items-center">
        <div className="relative h-12 w-12">
          <Image
            src={imgUrl}
            alt="user_logo"
            fill
            className="rounded-full object-cover"
          />
        </div>

        <div className="flex-1 text-ellipsis">
          <h4 className="text-base font-semibold text-white">{name}</h4>
          <p className="text-sm font-medium text-[#697C89]">@{username}</p>
        </div>
      </div>

      <div
        className="h-auto min-w-[74px] cursor-pointer rounded-lg bg-[#877EFF] p-2 text-center text-xs text-white"
        onClick={() => {
          if (isCommunity) {
            router.push(`/communities/${id}`);
          } else {
            router.push(`/profile/${id}`);
          }
        }}
      >
        View
      </div>
    </article>
  );
};

export default UserCard;
