import express from "express";

const router = express.Router();

router.get("/signup", (req, res) => {
    res.send("Signup endpoint");
  // Handle signup logic here
});

router.get("/login", (req, res) => {
    res.send("Login endpoint");
  // Handle login logic here
});

router.get("/logout", (req, res) => {
    res.send("Logout endpoint");
  // Handle logout logic here
});



export default router;
