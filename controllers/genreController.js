var Genre = require("../models/genre");

//__Display list of all Genres__//
exports.genre_list = function (request, response) {
  response.send("Not Implemented: Genre List");
};

//__Display Details of an specific Genre//
exports.genre_detail = function (request, response) {
  response.send("Not Implemented: Genre Details: " + request.params.id);
};

//__Display Genre create From on GET__//
exports.genre_create_get = function (request, response) {
  response.send("Not Implemented: Genre Create GET");
};

//__Handle Genre create on POST__//
exports.genre_create_post = function (request, response) {
  response.send("Not Implemented: Genre Create POST");
};

//__Display Genre Delete From on GET__//
exports.genre_delete_get = function (request, response) {
  response.send("Not Implemented: Genre Delete GET");
};

//__Handle Genre Delete on POST__//
exports.genre_delete_post = function (request, response) {
  response.send("Not Implemented: Genre Delete POST");
};

//__Display Genre Update From on GET__//
exports.genre_update_get = function (request, response) {
  response.send("Not Implemented: Genre Update GET");
};

//__Handle Genre Update on POST__//
exports.genre_update_post = function (request, response) {
  response.send("Not Implemented: Genre Update POST");
};
