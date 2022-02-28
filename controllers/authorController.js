var Author = require("../models/author");
var async = require("async");
var Book = require("../models/book");

//__Display list of all Authors__//
exports.author_list = function (req, res, next) {
  Author.find()
    .sort([["family_name", "ascending"]])
    .exec(function (err, list_authors) {
      if (err) {
        return next(err);
      }
      //Successful, so render
      res.render("author_list", {
        title: "Author List",
        author_list: list_authors,
      });
    });
};

//__Display detail page for a specific Author__//
exports.author_detail = function (req, res, next) {
  async.parallel(
    {
      author: function (callback) {
        Author.findById(req.params.id).exec(callback);
      },
      authors_books: function (callback) {
        Book.find({ author: req.params.id }, "title summary").exec(callback);
      },
    },
    function (err, results) {
      if (err) {
        return next(err);
      } // Error in API usage.
      if (results.author == null) {
        // No results.
        var err = new Error("Author not found");
        err.status = 404;
        return next(err);
      }
      // Successful, so render.
      res.render("author_detail", {
        title: "Author Detail",
        author: results.author,
        author_books: results.authors_books,
      });
    }
  );
};

//__Display Author create From on GET__//
exports.author_create_get = function (request, response) {
  response.send("Not Implemented: Author Create GET");
};

//__Handle Author create on POST__//
exports.author_create_post = function (request, response) {
  response.send("Not Implemented: Author Create POST");
};

//__Display Author Delete From on GET__//
exports.author_delete_get = function (request, response) {
  response.send("Not Implemented: Author Delete GET");
};

//__Handle Author Delete on POST__//
exports.author_delete_post = function (request, response) {
  response.send("Not Implemented: Author Delete POST");
};

//__Display Author Update From on GET__//
exports.author_update_get = function (request, response) {
  response.send("Not Implemented: Author Update GET");
};

//__Handle Author Update on POST__//
exports.author_update_post = function (request, response) {
  response.send("Not Implemented: Author Update POST");
};
