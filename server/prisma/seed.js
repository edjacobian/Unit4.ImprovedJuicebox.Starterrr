const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const bcrypt = require('bcryptjs');

const main = async() => {
  const user1 = await prisma.user.create({
    data: {
      username: 'user1',
      password: 'pword1',
      posts: {
        create: [
          {
            title: 'First Post',
            content: 'This is the content of the first post.',
          },
          {
            title: 'Second Post',
            content: 'This is the content of the second post.',
          },
          {
            title: 'Third Post',
            content: 'This is the content of the third post.',
          },
        ],
      },
    },
  });

  const user2 = await prisma.user.create({
    data: {
      username: 'user2',
      password: 'pword2',
      posts: {
        create: [
          {
            title: 'Hello World',
            content: 'Hello world! This is a post.',
          },
          {
            title: 'Second Post',
            content: 'This is the content of the second post.',
          },
          {
            title: 'Third Post',
            content: 'This is the content of the third post.',
          },
        ],
      },
    },
  });

  const user3 = await prisma.user.create({
    data: {
      username: 'user3',
      password: 'pword3',
      posts: {
        create: [
          {
            title: 'Hello World',
            content: 'Hello world! This is a test post.',
          },
          {
            title: 'Second Post',
            content: 'This is the content of the second post.',
          },
          {
            title: 'Third Post',
            content: 'This is the content of the third post.',
          },
        ],
      },
    },
  });

  console.log('Seed data created:', { user1, user2, user3 });
}

const user1 = {
  firstName: "Dean",
  lastName: "Winchester",
  username: "BigBro",
  password: await bcrypt.hash("applep1e", 10)
};

const user2 = {
  firstName: "Sam",
  lastName: "Winchester",
  username: "Moose",
  password: await bcrypt.hash("Cr0wley", 10)
};

const user3 = {
  firstName: "Bobby",
  lastName: "Singer",
  username: "bSinger",
  password: await bcrypt.hash("1dj1t5", 10)
};


await prisma.user.create({
  data: user1
})

await prisma.user.create({
  data: user2
})

await prisma.user.create({
  data: user3
})

main();
