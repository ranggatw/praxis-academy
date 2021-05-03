import api from "./config";

const user = async () => {
  try {
    return await api.get("/todos/1");
  }catch (err){
    throw Error(err);
  }
};

export { user };
