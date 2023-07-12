const Author = require("../models/author.model");

module.exports.getAllAuthors = (req, res) => {
  Author.find()
    .then((allAuthors) => {
      res.json(allAuthors);
    })
    .catch((err) => res.json({ message: "Something went wrong!", error: err }));
};

module.exports.createAuthor = (req, res) => {
  Author.create(req.body)
    .then((newAuthor) => {
      res.json(newAuthor);
    })
    .catch((err) => res.status(400).json(err));
};

module.exports.getOneAuthor = (req, res) => {
  Author.findById(req.params.id)
    .then((author) => res.json(author))
    .catch((err) => res.json({ message: "Something went wrong!", error: err }));
};

module.exports.deleteAuthor = (req, res) => {
  Author.findByIdAndDelete(req.params.id)
    .then((res) => res.json(res))
    .catch((err) => res.json({ message: "Something went wrong!", error: err }));
};

module.exports.updateAuthor = (req, res) => {
  Author.findByIdAndUpdate(req.params.id)
    .then((author) => {
      author.firstName = req.body.firstName;
      author.lastName = req.body.lastName;
      return author.save();
    })
    .then((updatedAuthor) => {
      res.json(updatedAuthor);
    })
    .catch((err) => res.status(400).json(err));
};
