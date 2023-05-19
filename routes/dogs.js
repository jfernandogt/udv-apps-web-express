import express from "express";
import DogsService from "../services/dogsService.js";

function dogsApi(app) {
  const dogsSrv = new DogsService();

  const router = express.Router();
  app.use("/api/dogs", router);

  router.get("/", async function (req, res, next) {
    try {
      const dogs = await dogsSrv.getDogs();
      res.status(200).json({
        data: dogs,
        message: "dogs list",
      });
    } catch (error) {
      next(error);
    }
  });

  // Obtener dog por id
  router.get("/:dogId", async function (req, res, next) {
    try {
      const dogs = await dogsSrv.getDogById(req.params.dogId);
      res.status(200).json({
        data: dogs,
        message: "dogs retrieved",
      });
    } catch (error) {
      next(error);
    }
  });

  // create
  router.post("/", async function (req, res, next) {
    try {
      const createdDog = await dogsSrv.addDog(req.body);
      res.status(201).json({
        data: createdDog,
        message: "dog created",
      });
    } catch (error) {
      next(error);
    }
  });

  // update dog per id
  router.put("/:dogId", async function (req, res, next) {
    try {
      const dogs = await dogsSrv.updateDog(req.params.dogId, req.body);
      res.status(200).json({
        data: dogs,
        message: "dog delete",
      });
    } catch (error) {
      next(error);
    }
  });

  // delete dog per id
  router.delete("/:dogId", async function (req, res, next) {
    try {
      const dogs = await dogsSrv.deleteDog(req.params.dogId);
      res.status(200).json({
        data: dogs,
        message: "dog delete",
      });
    } catch (error) {
      next(error);
    }
  });
}

export default dogsApi;
