import { ObjectId } from "mongodb";

import getMoviesCollection from "../db/movies.js";

class MoviesService {
  constructor() {
    this.moviesCollection = null;
    this.getConnection();
  }

  async getConnection() {
    this.moviesCollection = await getMoviesCollection();
  }

  async getMovies() {
    const data = await this.moviesCollection.find().toArray();

    return data;
  }

  async getMovieById(id) {
    const movie = await this.moviesCollection.findOne({
      _id: new ObjectId(id),
    });
    return movie;
  }

  async addMovie(movie) {
    const movieKeys = Object.keys(movie);
    const validKeys = [
      "title",
      "year",
      "cover",
      "description",
      "duration",
      "contentRating",
      "source",
      "tags",
    ];
    if (validKeys.every((k) => movieKeys.find((mk) => k === mk))) {
      const response = await this.moviesCollection.insertOne(movie);

      return response;
    } else {
      throw new Error("Invalid movie keys");
    }
  }

  async deleteMovie(id) {
    const response = await this.moviesCollection.deleteOne({
      _id: new ObjectId(id),
    });
    return response;
  }

  async updateMovie(id, movie) {
    const response = await this.moviesCollection.findOneAndReplace(
      { _id: new ObjectId(id) },
      movie
    );

    return response;
  }
}

export default MoviesService;
