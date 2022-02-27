var Book = require("../models/book");
var Author = require("../models/author");
var Genre = require("../models/genre");
var BookInstance = require("../models/bookinstance");

var async = require("async");

//__Home__//
exports.index = function (request, response) {
  async.parallel(
    {
      book_count: function (callback) {
        Book.countDocuments({}, callback); // Pass an empty object as match condition to find all documents of this collection
      },
      book_instance_count: function (callback) {
        BookInstance.countDocuments({}, callback);
      },
      book_instance_available_count: function (callback) {
        BookInstance.countDocuments({ status: "Available" }, callback);
      },
      author_count: function (callback) {
        Author.countDocuments({}, callback);
      },
      genre_count: function (callback) {
        Genre.countDocuments({}, callback);
      },
    },
    function (error, results) {
      response.render("index", {
        title: "Local Library Home",
        error: error,
        data: results,
      });
    }
  );
};

// Display list of all Books.
exports.book_list = function (req, res, next) {
  Book.find({}, "title author")
    .sort({ title: 1 })
    .populate("author")
    .exec(function (err, list_books) {
      if (err) {
        return next(err);
      }
      //Successful, so render
      res.render("book_list", { title: "Book List", book_list: list_books });
    });
};

//__Display detail page for a specific book__//
exports.book_detail = function (req, res, next) {
  async.parallel(
    {
      book: function (callback) {
        Book.findById(req.params.id)
          .populate("author")
          .populate("genre")
          .exec(callback);
      },
      book_instance: function (callback) {
        BookInstance.find({ book: req.params.id }).exec(callback);
      },
    },
    function (err, results) {
      if (err) {
        return next(err);
      }
      if (results.book == null) {
        // No results.
        var err = new Error("Book not found");
        err.status = 404;
        return next(err);
      }
      // Successful, so render.
      res.render("book_detail", {
        title: results.book.title,
        book: results.book,
        book_instances: results.book_instance,
      });
    }
  );
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
