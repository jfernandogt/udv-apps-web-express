import axios from "axios";
import { ObjectId } from "mongodb";

import getDogsCollection from "../db/dogs.js";

class DogsService {
  constructor() {
    this.dogsCollection = null;
    this.getCollection();
  }

  async getCollection() {
    this.dogsCollection = await getDogsCollection();
  }

  async getDogs() {
    const data = await this.dogsCollection.find().toArray();

    return data;
  }

  async getDogById(id) {
    const dog = await this.dogsCollection.findOne({
      _id: new ObjectId(id),
    });
    return dog;
  }

  async addDog(dog) {
    const dogKeys = Object.keys(dog);
    const validKeys = [
      "breed",
      "max_height",
      "mean_age_at_death",
      "origin_country",
    ];
    if (!validKeys.every((k) => dogKeys.find((mk) => k === mk))) {
      throw new Error("Invalid dog keys");
    }

    const { data, statusText } = await axios.get(
      "https://dog.ceo/api/breeds/image/random"
    );

    if (statusText !== "OK" || data.status !== "success") {
      throw new Error("Error getting dog image");
    }

    const response = await this.dogsCollection.insertOne({
      ...dog,
      image: data.message,
    });

    return response;
  }

  async deleteDog(id) {
    const response = await this.dogsCollection.deleteOne({
      _id: new ObjectId(id),
    });
    return response;
  }

  async updateDog(id, dog) {
    const response = await this.dogsCollection.findOneAndReplace(
      { _id: new ObjectId(id) },
      dog
    );

    return response;
  }
}

export default DogsService;
