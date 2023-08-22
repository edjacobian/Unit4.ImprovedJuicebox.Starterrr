const router = require("express").Router();

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

//Returns all the users (posts)
router.get("/", async (req, res) => {
  try {
    const user = await prisma.post.findMany({
      include: {
        post: true,
      },
    });
    res.send(user);
  } catch (error) {
    res.send(error);
  }
});

//Returns a user with specified id
router.get("/:id", async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });
    if (!user) {
      res.send({ error: true, message: "Sorry! User Not Found" });
    } else {
      res.send(user);
    }
  } catch (error) {
    res.send(error);
  }
});

//Creates a new user
router.post("/", async (req, res) => {
  try {
    const user = await prisma.user.create({
      data: req.body,
    });

    res.send(user);
  } catch (error) {
    res.send(user);
  }
});

//Updates user with specified id
router.put("/:id", async (req, res) => {
  try {
    const user = await prisma.user.update({
      where: {
        id: Number(req.params.id),
      },
      data: req.body,
    });
    if (!user) {
      res.send({ error: true, message: "Sorry! User Not Found" });
    } else {
      res.send(user);
    }
  } catch (error) {
    res.send(error);
  }
});

//Deletes a user
router.delete("/:id", async (req, res) => {
  try {
    const user = await prisma.user.delete({
      where: {
        id: Number(req.params.id),
      },
    });

    if (!user) {
      res.send({ error: true, message: "Sorry! User Not Found" });
    } else {
      res.send(user);
    }
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
