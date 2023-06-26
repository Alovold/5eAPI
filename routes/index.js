import express from "express";
import characterRouter from "./characters.routes.js"


const router = express.Router();

router.use("/characters", characterRouter)
router.get("/test", (req, res) => {
    res.send("working");
  });

  export default router;