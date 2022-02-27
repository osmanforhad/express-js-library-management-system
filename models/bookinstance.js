const { DateTime } = require("luxon");
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var BookInstanceSchema = new Schema({
  book: { type: Schema.Types.ObjectId, ref: "Book", required: true },
  imprint: { type: String, required: true },
  status: {
    type: String,
    required: true,
    enum: ["Available", "Maintenance", "Loaned", "Reserved"],
    default: "Maintenance",
  },
  due_back: { type: Date, default: Date.now },
});

//__Virtual for bookinstance's URL__//
BookInstanceSchema.virtual("url").get(function () {
  return "/catalog/bookinstance/" + this._id;
});

//__Date time Format__//
BookInstanceSchema.virtual("due_back_formatted").get(function () {
  return DateTime.fromJSDate(this.due_back).toLocaleString(DateTime.DATE_MED);
});

//__Export Model__//
module.exports = mongoose.model("Bookinstance", BookInstanceSchema);
