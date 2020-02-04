const mongoose = require("mongoose");
const db = "mongodb+srv://ocansiz:osman123@cluster0-tsiwk.mongodb.net/poilabs-db";

module.exports = () => {
  mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  });
  mongoose.connection.on("open", () => {
    console.log("MongoDB Connected");
  });
  mongoose.connection.on("error", err => {
    console.log("MongoDB Error", err);
  });
  mongoose.Promise = global.Promise;
};
