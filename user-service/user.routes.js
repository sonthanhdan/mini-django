const router = require('express').Router()
const httpError = require('http-errors')
const User = require("./user.model");
const { validator, createUserSchema, getUserParamSchema } = require('./user.schemas')

router.get("/users", async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

router.post("/users", validator.body(createUserSchema), async (req, res, next) => {
  let user = await User.findOne({
    where: {
      email: req.body.email
    }
  })

  if (user) {
    res.status(error.status).send(error)
  }

  user = await User.create(req.body);

  res.json(user);
});

router.get("/users/:id", validator.params(getUserParamSchema), async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (!user) {
    throw new httpError.BadRequest("User not exists")
  }
  res.json(user);
});

router.put("/users/:id", validator.params(getUserParamSchema), async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (!user) {
    throw new httpError.BadRequest("User not exists")
  }
  user.update(req.body);
  res.json(user);
});

router.delete("/users/:id", validator.params(getUserParamSchema), async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (!user) {
    throw new httpError.BadRequest("User not exists")
  }
  user.destroy();
  res.json({ message: "User deleted" });
});

module.exports = router
