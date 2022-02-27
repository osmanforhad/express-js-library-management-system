var Book = require("../models/book");

exports.index = function (request, response) {
  response.send("Not Implemented: Site Home Page");
};

//__Display list of all Books__//
exports.book_list = function (request, response) {
  response.send("Not Implemented: Book List");
};

//__Display Details of an specific Book//
exports.book_detail = function (request, response) {
  response.send("Not Implemented: Book Details: " + request.params.id);
};

//__Display Book create From on GET__//
exports.book_create_get = function (request, response) {
  response.send("Not Implemented: Book Create GET");
};

//__Handle Book create on POST__//
exports.book_create_post = function (request, response) {
  response.send("Not Implemented: Book Create POST");
};

//__Display Book Delete From on GET__//
exports.book_delete_get = function (request, response) {
  response.send("Not Implemented: Book Delete GET");
};

//__Handle Book Delete on POST__//
exports.book_delete_post = function (request, response) {
  response.send("Not Implemented: Book Delete POST");
};

//__Display Book Update From on GET__//
exports.book_update_get = function (request, response) {
  response.send("Not Implemented: Book Update GET");
};

//__Handle Book Update on POST__//
exports.book_update_post = function (request, response) {
  response.send("Not Implemented: Book Update POST");
};
