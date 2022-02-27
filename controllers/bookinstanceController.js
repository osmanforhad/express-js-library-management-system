var BookInstance = require("../models/bookinstance");

//__Display All BookInstance__//
exports.bookinstance_list = function (request, response) {
  response.send("Not Implemented: BookInstance List");
};

//__Display Details of an specific BookInstance__//
exports.bookinstance_detail = function (request, response) {
  response.send("Not Implemented: BookInstance Details: " + request.params.id);
};

//__Display BookInstance create From on GET__//
exports.bookinstance_create_get = function (request, response) {
  response.send("Not Implemented: BookInstance Create GET");
};

//__Handle BookInstance create on POST__//
exports.bookinstance_create_post = function (request, response) {
  response.send("Not Implemented: BookInstance Create POST");
};

//__Display BookInstance Delete From on GET__//
exports.bookinstance_delete_get = function (request, response) {
  response.send("Not Implemented: BookInstance Delete GET");
};

//__Handle BookInstance Delete on POST__//
exports.bookinstance_delete_post = function (request, response) {
  response.send("Not Implemented: BookInstance Delete POST");
};

//__Display BookInstance Update From on GET__//
exports.bookinstance_update_get = function (request, response) {
  response.send("Not Implemented: BookInstance Update GET");
};

//__Handle BookInstance Update on POST__//
exports.bookinstance_update_post = function (request, response) {
  response.send("Not Implemented: BookInstance Update POST");
};
