import express from "express";
import records from "../controllers/requests.controller.js"

const router = express.Router();

router.get("/:id?", async (req, res, next) => {
    let { id } = req.params;
    let data;
  
    if (id) {
      data = await records.findOne(id);
    } else {
      data = await records.findAll();
    }
  
    res.json(data);
  });

  export default router;