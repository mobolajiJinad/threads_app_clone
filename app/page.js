import ThreadCard from "@/components/cards/ThreadCard";

import { result, user } from "@/constants/dummyData";

export default function Home() {
  return (
    <section className="mt-7 flex flex-col gap-7">
      {result.posts.length === 0 ? (
        <p className="no-result">No threads found</p>
      ) : (
        <>
          {result.posts.map((post) => (
            <ThreadCard
              key={post._id}
              id={post._id}
              currentUserId={user.id}
              content={post.text}
              author={post.author}
              community={post.community}
              createdAt={post.createdAt}
              comments={post.children}
            />
          ))}
        </>
      )}
    </section>
  );
}
