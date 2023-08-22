const router = require("express").Router();
const { requireUser } = require("./utils"); 
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


router.get("/", requireUser, async (req, res) => {
  try {
    const post = await prisma.post.findMany({
      include: {
        user: true,
      },
    });
    res.send(post);
  } catch (error) {
    res.send(error);
  }
});

//Returns a post with specified id
router.get("/:id", requireUser, async (req, res) => {
  try {
    const post = await prisma.post.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });
    if (!post) {
      res.send({ error: true, message: "post Not Found" });
    } else {
      res.send(post);
    }
  } catch (error) {
    res.send(error);
  }
});

//Creates a new post
router.post("/", requireUser, async (req, res) => {
  try {
    const post = await prisma.post.create({
      data: req.body,
    });

    res.send(post);
  } catch (error) {
    res.send(error);
  }
});

//Updates post with specified id
router.put("/:id", requireUser, async (req, res) => {
  try {
    const post = await prisma.post.update({
      where: {
        id: Number(req.params.id),
      },
      data: req.body,
    });
    if (!post) {
      res.send({ error: true, message: "post Not Found" });
    } else {
      res.send(post);
    }
  } catch (error) {
    res.send(error);
  }
});

//Deletes a post
router.delete("/:id", requireUser, async (req, res) => {
  try {
    const post = await prisma.post.delete({
      where: {
        id: Number(req.params.id),
      },
    });

    if (!post) {
      res.send({ error: true, message: "post Not Found" });
    } else {
      res.send(post);
    }
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
