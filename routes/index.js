import express from "express";
import characterRouter from "./characters.routes.js"
import requestRouter from "./requests.routes.js"


const router = express.Router();

router.use("/characters", characterRouter)
router.get("/test", (req, res) => {
    res.send("working");
  });
router.use("/requests", requestRouter)

  export default router;