const router = require("express").Router();
const booksController = require("../../controllers/booksController");
const { default: axios } = require("axios");

// Matches with "/api/books"
router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;

router.post("/", (req,res) => {
axios.get('https://www.googleapis.com/books/v1/volumes?q=' + req.body.name)
.then((response => response.json(response.data)) 
.then(result => {
  this.setState({ books: result.items})
  // console.log(response.data);
}));

});