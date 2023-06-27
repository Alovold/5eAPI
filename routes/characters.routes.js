import express from "express";
import character from "../controllers/characters.controller.js";

const router = express.Router();

router.get("/:id?", async (req, res, next) => {
  let { id } = req.params;
  let data;

  if (id) {
    data = await character.findOne(id);
    character.logRequest({ request_type: "Get", request_body: "Retrieved data for " + id});
  } else {
    data = await character.findAll();
    character.logRequest({ request_type: "Get", request_body: "Retrieved all data"});
  }

  res.json(data);
});

router.post("/", async (req, res, next) => {
  let characterDTO = req.body;
  let data = await character.addOne(characterDTO);
  character.logRequest({ request_type: "Post", request_body: "Added record for " + characterDTO.character_name});
  res.json(data);
});

router.put("/:id", async (req, res, next) => {
  let { id } = req.params;
  let characterDTO = req.body;
  let data = await character.updateOne(id, characterDTO);
  character.logRequest({ request_type: "Put", request_body: "Adjusted record " + id});
  res.json(data);
});

router.delete("/:id", async (req, res, next) => {
  let { id } = req.params;
  let data = await character.removeOne(id);
  character.logRequest({ request_type: "Delete", request_body: "Deleted record " + id});
  res.json(data);
});

export default router;