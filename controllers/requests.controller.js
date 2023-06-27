import query from "../db/utils.js";

const findAll = async () => {
    return query("SELECT * FROM requests");
  };

  const findOne = async (id) => {
    return query("SELECT * FROM requests WHERE request_id = ?", [
      id
    ]);
  };
  
  export default {
    findAll,
    findOne,
  };