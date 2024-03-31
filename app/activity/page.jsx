import Image from "next/image";
import Link from "next/link";

import { activities } from "@/constants/dummyData";

const Activity = () => {
  return (
    <section className="mt-10 flex flex-col gap-5">
      {activities.length > 0 ? (
        <>
          {activities.map((activity) => (
            <Link key={activity._id} href={`/thread/${activity.parentId}`}>
              <article className="flex items-center gap-2 rounded-md bg-[#121417] px-7 py-4">
                <Image
                  src={activity.author.image}
                  alt="user_logo"
                  width={20}
                  height={20}
                  className="rounded-full object-cover"
                />
                <p className="!text-sm text-white">
                  <span className="mr-1 text-[#877EFF]">
                    {activity.author.name}
                  </span>{" "}
                  {activity.act} your thread
                </p>
              </article>
            </Link>
          ))}
        </>
      ) : (
        <p className="!text-base-regular text-light-3">No activity yet</p>
      )}
    </section>
  );
};

export default Activity;
