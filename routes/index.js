import moviesApi from "./movies.js";
import dogsApi from "./dogs.js";

const controllers = (app) => {
  moviesApi(app);
  dogsApi(app);
};

export default controllers;
