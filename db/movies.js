import createConnection from "./client.js";

const getMoviesCollection = async () => {
  const connection = await createConnection();

  return connection.db("udv").collection("movies");
};

export default getMoviesCollection;
