const { Router } = require("express");
const { Account } = require("./schema");

const router = Router();

module.exports = router;

router.post("/create-account", async (req, res) => {
  const name = req.body.name;
  const account = await Account.create({ name: name });
  res.json(account);
})

router.post("/pay", async (req, res) => {
  const amount = req.body.amount;
  const senderId = req.body.senderId;
  const recieverId = req.body.recieverId;

  try {
    await payCustomer(amount, senderId, recieverId);
    res.send("Payment sucessful");
  } catch(e) {
    res.status(400).send("An error occured")
  }
});

const payCustomer = async (money, senderId, recieverId) => {
  const sender = await Account.findOne({ _id: senderId });
  const reciever = await Account.findOne({ _id: recieverId });

  sender.balance -= money;
  reciever.balance += money;

  await Promise.all([
    sender.save(),
    reciever.save(),
  ]);
};