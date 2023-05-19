import express from "express";
import MoviesService from "../services/moviesService.js";

function moviesApi(app) {
  const moviesSrv = new MoviesService();
  // creamos el router
  const router = express.Router();
  app.use("/api/movies", router);

  router.get("/", async function (req, res, next) {
    try {
      const movies = await moviesSrv.getMovies();
      res.status(200).json({
        data: movies,
        message: "movies list",
      });
    } catch (error) {
      next(error);
    }
  });

  // Obtener movie por id
  router.get("/:movieId", async function (req, res, next) {
    try {
      const movies = await moviesSrv.getMovieById(req.params.movieId);
      res.status(200).json({
        data: movies,
        message: "movies retrieved",
      });
    } catch (error) {
      next(error);
    }
  });

  // create
  router.post("/", async function (req, res, next) {
    try {
      const createdMovie = await moviesSrv.addMovie(req.body);
      res.status(201).json({
        data: createdMovie,
        message: "movie created",
      });
    } catch (error) {
      next(error);
    }
  });

  // update movie per id
  router.put("/:movieId", async function (req, res, next) {
    try {
      const movies = await moviesSrv.updateMovie(req.params.movieId, req.body);
      res.status(200).json({
        data: movies,
        message: "movie delete",
      });
    } catch (error) {
      next(error);
    }
  });

  // delete movie per id
  router.delete("/:movieId", async function (req, res, next) {
    try {
      const movies = await moviesSrv.deleteMovie(req.params.movieId);
      res.status(200).json({
        data: movies,
        message: "movie delete",
      });
    } catch (error) {
      next(error);
    }
  });
}

export default moviesApi;
