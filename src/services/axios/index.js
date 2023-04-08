import axios from "axios";

const URL = "https://api.eresultats.bj/api/candidates/search/50/session/";

const instance = axios.create({
  baseURL: URL,
  headers: { "Content-Type": "application/json" },
});

export default instance;
