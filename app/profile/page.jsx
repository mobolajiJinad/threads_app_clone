import Image from "next/image";

import ProfileHeader from "@/components/general/ProfileHeader";
import { profileTabs } from "@/constants";
import { userInfo, user } from "@/constants/dummyData";

const Profile = () => {
  return (
    <section>
      <ProfileHeader
        accountId={userInfo.id}
        authUserId={user.id}
        name={userInfo.name}
        username={userInfo.username}
        imgUrl={userInfo.image}
        bio={userInfo.bio}
      />

      <div className="mt-9 w-full">
        <ul className="flex min-h-[50px] flex-1 items-center justify-around gap-3 bg-[#121417] text-[#EFEFEF]">
          {profileTabs.map((tab) => (
            <li
              key={tab.label}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all"
            >
              <Image
                src={tab.icon}
                alt={tab.label}
                width={24}
                height={24}
                className="mr-1 object-contain"
              />
              <p className="max-sm:hidden">{tab.label}</p>

              {tab.label === "Threads" && (
                <p className="ml-1 rounded-sm bg-[#5C5C7B] px-2 py-1 !text-[10px] font-medium text-[#EFEFEF]">
                  {userInfo.threads.length}
                </p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Profile;
