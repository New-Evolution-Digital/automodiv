"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const runServer = async () => {
    const app = await (0, app_1.createServer)();
    app.listen(4000);
    console.log(`Listening on http://localhost:${4000}`);
    console.log(`🚀 Graphql on http://localhost:${4000}/graphql`);
};
runServer();
//# sourceMappingURL=index.js.map