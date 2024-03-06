const mongoose = require("mongoose");
const connect = async () => {
  mongoose.set("strictQuery", false);
  return mongoose.connect("mongodb+srv://meetshiyaniya011:meetpatel@cluster0.hakprwx.mongodb.net/gymcom");
};
module.exports = connect;
