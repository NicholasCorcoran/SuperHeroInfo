import axios from "axios";

export const searchTitle = () =>
  axios.get("/api/characters").then((x) => x.data);
