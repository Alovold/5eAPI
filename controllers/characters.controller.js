import query from "../db/utils.js";

const findAll = async () => {
    return query("SELECT * FROM characters");
  };
  
  const findOne = async (id) => {
    return query("SELECT * FROM characters WHERE character_id = ?", [
      id
    ]);
  };
  
  const addOne = async (character) => {
      return await query("INSERT INTO characters SET ?", [character]);
    };
    
    const updateOne = async (id, character) => {
      return await query("UPDATE characters SET ? WHERE character_id = ?", [
        character,
        id,
      ]);
    };
    
    const removeOne = async (id) => {
      return await query("DELETE FROM characters WHERE character_id = ?", [id]);
    };
  
    export default {
      findAll,
      findOne,
      addOne,
      updateOne,
      removeOne,
    };