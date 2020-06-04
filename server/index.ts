import express from "express";
import bodyParser from "body-parser";
import axios, { AxiosError } from "axios";
import * as crypto from "crypto";

const PORT = process.env.PORT || 5001;
const app = express();

app.use(bodyParser.json());

const pubKey = "16a6b47628b562a9c4c463669e71377b";
const privKey = "bcc810ce890976beb4643e591b7907d73e8b85fb";
const hash = () => {
  const ts = Date.now().toString();

  const md5 = crypto
    .createHash("md5")
    .update(ts + privKey + pubKey)
    .digest("hex");

  return { ts, md5 };
};

console.log(hash());

app.get("/api/characters", async (_, res) => {
  const { ts, md5 } = hash();
  await axios
    .get(
      `https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=16a6b47628b562a9c4c463669e71377b&hash=${md5}`
    )
    .then((x) => res.json(x.data.data.results))
    .catch((e: AxiosError) =>
      res.status(e.response?.status || 400).json(e.response?.data)
    );
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
