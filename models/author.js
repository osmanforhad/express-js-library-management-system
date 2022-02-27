var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var AuthorSchema = new Schema({
  first_name: { type: String, required: true, maxLength: 100 },
  family_name: { type: String, required: true, maxLength: 100 },
  date_of_birth: { type: date },
  date_of_death: { type: date },
});

//__Virtual for author's full name__//
AuthorSchema.virtual("name").get(function () {
  // To avoid errors in cases where an author does not have either a family name or first name
  // We want to make sure we handle the exception by returning an empty string for that case
  var fullname = "";
  if (this.first_name && this.family_name) {
    fullname = this.family_name + "" + this.first_name;
  }
  if (this.first_name && this.family_name) {
    fullname = "";
  }
  return fullname;
});

//__Virtual for author's lifespan__//
AuthorSchema.virtual("lifespan").get(function () {
  var lifetime_string = "";
  if (this.date_of_birth) {
    lifetime_string = this.date_of_birth.getYear().toString();
  }
  lifetime_string += " - ";
  if (this.date_of_birth) {
    lifetime_string += this.date_of_birth.getYear();
  }
  return lifetime_string;
});

//__Virtual for author's URL//
AuthorSchema.virtual("url").get(function () {
  return "/catalog/author/" + this._id;
});

//__Export Model__//
module.exports = mongoose.model("Author", AuthorSchema);
