var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var GenreSchema = new Schema({
  name: { type: String, minLength: 3, maxLength: 100, required: true },
});

//__Virtual for Genre's instance URL__//
GenreSchema.virtual("url").get(function () {
  return "/catalog/genre/" + this._id;
});

//__Export Model__//
module.exports = mongoose.model("Genre", GenreSchema);
