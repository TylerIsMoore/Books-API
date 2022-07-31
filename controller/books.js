const router = require("express").Router();
const db = require('../models/books')


router.get("/seed", (req, res) => {
    db.insertMany([
      {
        title: "The Shinobi Initiative",
        description:
          "The reality-bending adventures of a clandestine service agency in the year 2166",
        year: 2014,
        quantity: 10,
        imageURL: "https://imgur.com/LEqsHy5.jpeg",
      },
      {
        title: "Tess the Wonder Dog",
        description: "The tale of a dog who gets super powers",
        year: 2007,
        quantity: 3,
        imageURL: "https://imgur.com/cEJmGKV.jpg",
      },
      {
        title: "The Annals of Arathrae",
        description:
          "This anthology tells the intertwined narratives of six fairy tales.",
        year: 2016,
        quantity: 8,
        imageURL: "https://imgur.com/VGyUtrr.jpeg",
      },
      {
        title: "W∀RP",
        description:
          "A time-space anomaly folds matter from different points in earth's history in on itself, sending six unlikely heroes on a race against time as worlds literally collide.",
        year: 2010,
        quantity: 4,
        imageURL: "https://imgur.com/qYLKtPH.jpeg",
      },
    ])
      .then(
        res.status(200).json({
          message: "status ok",
        })
      )
      .catch(
        res.status(404).json({
          message: "page not found",
        })
      );
     });

router.get("/books", (req, res) => {
  db.find()
    .then((foundBooks) => {
      res.status(200).json(foundBooks);
    })
    .catch((err) => {
      console.log("err", err);
    });
});

router.get("/books/:id", (req, res) => {
  db.findById(req.params.id)
    .then((foundBook) => {
      res.status(200).json(foundBook);
    })
    .catch((err) => {
      console.log("err", err);
    });
});

router.delete("/books/:id", (req, res) => {
  db.Place.findByIdAndDelete(req.params.id)
    .then((deletedBook) => {
      res.status(200).json(deletedBook)
    })
    .catch((err) => {
      console.log("err", err);
    });
});
module.exports = router;
