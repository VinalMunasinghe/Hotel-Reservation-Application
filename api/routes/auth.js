import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Auth route");
});

router.get("/register", (req, res) => {
    res.send("Auth route register");
});

export default router;