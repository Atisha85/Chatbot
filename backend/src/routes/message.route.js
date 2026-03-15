import express from "express";

const router = express.Router();

router.get("/send", (req, res) => {
    res.send("Send message endpoint");
  // Handle send message logic here
});
router.get("/receive", (req, res) => {
    res.send("Receive message endpoint");
  // Handle receive message logic here
});

export default router;