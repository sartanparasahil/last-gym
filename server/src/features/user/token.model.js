import { modelName } from "./user.model";

const mongoose = req("mongoose");
const file = {
  token: { type: String },
};
const BlackListSchema = new mongoose.Schema(file , { timestamps:true });
const BlackListModel = mongoose.model("blackList", BlackListSchema);
module.exports = BlackListModel;
