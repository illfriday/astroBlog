// const path = require("path");

// module.exports = () => ({
//   connection: {
//     client: "sqlite",
//     connection: {
//       filename: path.join(__dirname, "..", ".tmp/data.db"),
//     },
//     useNullAsDefault: true,
//   },
// });
const dotenv = require("dotenv");
dotenv.config();
module.exports = {
  endpoint: process.env.API_URL,
  masterKey: process.env.APP_KEYS,
  port: process.env.PORT,
};
