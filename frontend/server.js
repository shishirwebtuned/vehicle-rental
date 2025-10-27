import { createServer } from "http";
import next from "next";

const port = process.env.PORT || 3000;
const dev = false; // set to true only for local development
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    handle(req, res);
  }).listen(port, () => {
    console.log(`🚀 Frontend running on port ${port}`);
  });
});
