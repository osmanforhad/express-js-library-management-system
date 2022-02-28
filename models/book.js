var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var BookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: "Author", required: true },
  // summery: { type: String, required: true },
  isbn: { type: String, required: true },
  genre: { type: Schema.Types.ObjectId, ref: "Genre" },
});

//__Virtual for book's URL__//
BookSchema.virtual("url").get(function () {
  return "/catalog/book/" + this._id;
});

//__Export Model__//
module.exports = mongoose.model("Book", BookSchema);
