var Genre = require("../models/genre");
var Book = require("../models/book");
var async = require("async");

//__Display list of all Genres__//
exports.genre_list = function (req, res, next) {
  Genre.find()
    .sort([["name", "ascending"]])
    .exec(function (err, list_genres) {
      if (err) {
        return next(err);
      }
      //Successful, so render
      res.render("genre_list", {
        title: "Genre List",
        genre_list: list_genres,
      });
    });
};

//__Display detail page for a specific Genre__//
exports.genre_detail = function (req, res, next) {
  async.parallel(
    {
      genre: function (callback) {
        Genre.findById(req.params.id).exec(callback);
      },

      genre_books: function (callback) {
        Book.find({ genre: req.params.id }).exec(callback);
      },
    },
    function (err, results) {
      if (err) {
        return next(err);
      }
      if (results.genre == null) {
        // No results.
        var err = new Error("Genre not found");
        err.status = 404;
        return next(err);
      }
      // Successful, so render
      res.render("genre_detail", {
        title: "Genre Detail",
        genre: results.genre,
        genre_books: results.genre_books,
      });
    }
  );
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
