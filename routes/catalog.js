var express = require("express");
var router = express.Router();

//__Require Controllers__//
var book_controller = require("../controllers/bookController");
var author_controller = require("../controllers/authorController");
var genre_controller = require("../controllers/genreController");
var book_instance_controller = require("../controllers/bookinstanceController");

/**
 * Start
 * Book Routes
 *
 */
//__Get Catalog Home Page__//
router.get("/", book_controller.index);

//__Get Request for creating a book__//
router.get("/book/create", book_controller.book_create_get);

//__Post Request for creating a book__//
router.post("/book/create", book_controller.book_create_post);

//__Get request to delete book__//
router.get("/book/:id/delete", book_controller.book_delete_get);

//__Post request to delete book__//
router.post("/book/:id/delete", book_controller.book_delete_post);

//__Get request to Update book__//
router.get("/book/:id/update", book_controller.book_update_get);

//__Post request to Update book__//
router.post("/book/:id/update", book_controller.book_update_post);

//__Get request for one book__//
router.get("/book/:id", book_controller.book_detail);

//__Get request for list all of books__//
router.get("/books", book_controller.book_list);

/**
 * Start
 * Author Routes
 *
 */
//__Get Request for creating a Author__//
router.get("/author/create", author_controller.author_create_get);

//__Post Request for creating a Author__//
router.post("/author/create", author_controller.author_create_post);

//__Get request to delete Author__//
router.get("/author/:id/delete", author_controller.author_delete_get);

//__Post request to delete Author__//
router.post("/author/:id/delete", author_controller.author_delete_post);

//__Get request to Update Author__//
router.get("/author/:id/update", author_controller.author_update_get);

//__Post request to Update Author__//
router.post("/author/:id/update", author_controller.author_update_post);

//__Get request for one Author__//
router.get("/author/:id", author_controller.author_detail);

//__Get request for list all of Author__//
router.get("/author", author_controller.author_list);

/**
 * Start
 * Genre Routes
 *
 */
//__Get Request for creating a Genre__//
router.get("/genre/create", genre_controller.genre_create_get);

//__Post Request for creating a Genre__//
router.post("/genre/create", genre_controller.genre_create_post);

//__Get request to delete Genre__//
router.get("/genre/:id/delete", genre_controller.genre_delete_get);

//__Post request to delete Genre__//
router.post("/genre/:id/delete", genre_controller.genre_delete_post);

//__Get request to Update Genre__//
router.get("/genre/:id/update", genre_controller.genre_update_get);

//__Post request to Update Genre__//
router.post("/genre/:id/update", genre_controller.genre_update_post);

//__Get request for one Genre__//
router.get("/genre/:id", genre_controller.genre_detail);

//__Get request for list all of Genre__//
router.get("/genre", genre_controller.genre_list);

/**
 * Start
 * BookInstance Routes
 *
 */
//__Get Request for creating a BookInstance__//
router.get(
  "/bookinstance/create",
  book_instance_controller.bookinstance_create_get
);

//__Post Request for creating a BookInstance//
router.post(
  "/bookinstance/create",
  book_instance_controller.bookinstance_create_post
);

//__Get request to delete BookInstance__//
router.get(
  "/bookinstance/:id/delete",
  book_instance_controller.bookinstance_delete_get
);

//__Post request to delete BookInstance__//
router.post(
  "/bookinstance/:id/delete",
  book_instance_controller.bookinstance_delete_post
);

//__Get request to Update BookInstance__//
router.get(
  "/bookinstance/:id/update",
  book_instance_controller.bookinstance_update_get
);

//__Post request to Update BookInstance__//
router.post(
  "/bookinstance/:id/update",
  book_instance_controller.bookinstance_update_post
);

//__Get request for one BookInstance__//
router.get("/bookinstance/:id", book_instance_controller.bookinstance_detail);

//__Get request for list all of BookInstance__//
router.get("/bookinstance", book_instance_controller.bookinstance_list);

module.exports = router;
