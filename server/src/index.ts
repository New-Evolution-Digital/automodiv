import { createServer } from "./app";

const runServer = async () => {
  const app = await createServer();
  app.listen(4000);
  console.log(`Listening on http://localhost:${4000}`);
  console.log(`🚀 Graphql on http://localhost:${4000}/graphql`);
};

runServer();
