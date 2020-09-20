import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-e6ba5.cloudfunctions.net/api", // THE API (Cloud Function) URL
  // "http://localhost:5001/clone-e6ba5/us-central1/api",
});

export default instance;