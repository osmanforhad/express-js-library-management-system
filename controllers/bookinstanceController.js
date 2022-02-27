var BookInstance = require("../models/bookinstance");

//__Display list of all BookInstances__//
exports.bookinstance_list = function (req, res, next) {
  BookInstance.find()
    .populate("book")
    .exec(function (err, list_bookinstances) {
      if (err) {
        return next(err);
      }
      // Successful, so render
      res.render("bookinstance_list", {
        title: "Book Instance List",
        bookinstance_list: list_bookinstances,
      });
    });
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
