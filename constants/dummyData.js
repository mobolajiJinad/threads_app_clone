export const user = {
  id: "user123",
};

export const result = {
  posts: [
    {
      _id: "post1",
      text: "This is the first post.",
      author: {
        name: "John Doe",
        image: "/assets/Photo4.jpg",
        id: "author123",
      },
      community: {
        id: "community1",
        name: "tech_enthusiasts",
        image: "/assets/Photo4.jpg",
      },
      createdAt: "2024-03-23T12:00:00Z",
      children: [
        {
          author: {
            image: "/assets/Photo4.jpg",
          },
        },
        {
          author: {
            image: "/assets/Photo4.jpg",
          },
        },
      ],
    },
    {
      _id: "post2",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, esse nesciunt ut officiis a cum blanditiis dignissimos quas incidunt perferendis temporibus nemo.",
      author: {
        name: "Jane Smith",
        image: "/assets/Photo4.jpg",
        id: "author456",
      },
      community: null,
      createdAt: "2024-03-24T10:00:00Z",
      children: [],
    },
    {
      _id: "post3",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, esse nesciunt ut officiis a cum blanditiis dignissimos quas incidunt perferendis temporibus nemo, illo ducimus rem quo itaque magni similique perspiciatis.",
      author: {
        name: "Ajanlekoko",
        image: "/assets/Photo4.jpg",
        id: "author789",
      },
      community: {
        id: "community2",
        name: "nature_lovers",
        image: "/assets/Photo4.jpg",
      },
      createdAt: "2024-03-23T12:00:00Z",
      children: [
        {
          author: {
            image: "/assets/Photo4.jpg",
          },
        },
        {
          author: {
            image: "/assets/Photo4.jpg",
          },
        },
      ],
    },
    {
      _id: "post4",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, esse nesciunt ut officiis a cum blanditiis dignissimos quas incidunt perferendis temporibus nemo.",
      author: {
        name: "Amoteda",
        image: "/assets/Photo4.jpg",
        id: "author101112",
      },
      community: null,
      createdAt: "2024-03-24T10:00:00Z",
      children: [],
    },
  ],
  communities: [
    {
      id: "community1",
      name: "Tech Enthusiasts",
      username: "tech_enthusiasts",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      members: [
        { image: "/assets/Photo4.jpg" },
        { image: "/assets/Photo4.jpg" },
        { image: "/assets/Photo4.jpg" },
      ],
      image: "/assets/Photo9.png",
    },
    {
      id: "community2",
      name: "Nature Lovers",
      username: "nature_lovers",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      members: [
        { image: "/assets/Photo4.jpg" },
        { image: "/assets/Photo4.jpg" },
        { image: "/assets/Photo4.jpg" },
        { image: "/assets/Photo4.jpg" },
        { image: "/assets/Photo4.jpg" },
        { image: "/assets/Photo4.jpg" },
      ],
      image: "/assets/Photo9.png",
    },
    {
      id: "community3",
      name: "Artists Community",
      username: "artists_community",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      members: [
        { image: "/assets/Photo4.jpg" },
        { image: "/assets/Photo4.jpg" },
        { image: "/assets/Photo4.jpg" },
        { image: "/assets/Photo4.jpg" },
        { image: "/assets/Photo4.jpg" },
      ],
      image: "/assets/Photo9.png",
    },
  ],
};

export const suggestedCommunities = {
  communities: [
    {
      id: "community1",
      name: "Tech Enthusiasts",
      username: "tech_enthusiasts",
      image: "/assets/Photo9.png",
    },
    {
      id: "community2",
      name: "Nature Lovers",
      username: "nature_lovers",
      image: "/assets/Photo9.png",
    },
    {
      id: "community3",
      name: "Artists Community",
      username: "artists_community",
      image: "/assets/Photo9.png",
    },
  ],
};

export const similarMinds = {
  users: [
    {
      id: "author456",
      name: "Jane Smith",
      username: "jane_smith",
      image: "/assets/Photo4.jpg",
    },
  ],
};


export const activities = [
  {
    _id: "1",
    parentId: "thread1",
    act: "liked",
    author: {
      name: "John Doe",
      image: "/assets/Photo9.png",
    },
  },
  {
    _id: "2",
    parentId: "thread2",
    act: "replied",
    author: {
      name: "Jane Smith",
      image: "/assets/Photo9.png",
    },
  },
  {
    _id: "3",
    parentId: "thread3",
    act: "reposted",
    author: {
      name: "Alex Johnson",
      image: "/assets/Photo9.png",
    },
  },
];

export const userInfo = {
  id: "user123",
  name: "John Doe",
  username: "johndoe",
  image: "/assets/Photo4.jpg",
  bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  threads: [],
};
