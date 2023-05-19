import createConnection from "./client.js";

const getDogsCollection = async () => {
  const connection = await createConnection();

  return connection.db("udv").collection("dogs");
};

export default getDogsCollection;
