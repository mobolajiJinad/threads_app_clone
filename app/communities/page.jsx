import CommunityCard from "@/components/cards/CommunityCard";

import { result } from "@/constants/dummyData";

const Page = () => {
  return (
    <>
      <section className="mt-9 flex flex-wrap gap-4">
        {result.communities.length === 0 ? (
          <p className="text-center text-base text-[#7878A3]">No Result</p>
        ) : (
          <>
            {result.communities.map((community) => (
              <CommunityCard
                key={community.id}
                id={community.id}
                name={community.name}
                username={community.username}
                imgUrl={community.image}
                bio={community.bio}
                members={community.members}
              />
            ))}
          </>
        )}
      </section>
    </>
  );
};

export default Page;
