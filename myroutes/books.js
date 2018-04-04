var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Book = require('mymodels');

/* GET ALL BOOKS */
router.get('/', function getAllBooks(req, res, next) {
	console.log("route GETALLBOOKS");
Book.find(function (err, products) {
    if (err) return next(err);
//		  res.send('Express RESTful API');
    res.json(products);
  });
});

/* GET SINGLE BOOK BY ID */
router.get('/:id', function getSingleBookById(req, res, next) {
	console.log("route GETSINGLEBOOKBYID");
	Book.find({'title': id}, (err, bks) =>{
	    if (err) return res.status(500).json(err)//send
    	return res.status(200).json(bks);//send
	});
/*  Book.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
  */
});

/* SAVE BOOK */
router.post('/', function saveBook(req, res, next) {
	console.log("route POSTBOOK");
  Book.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE BOOK */
router.put('/:id', function updateBook(req, res, next) {
	console.log("route PUTBOOKBYID");
  Book.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE BOOK */
router.delete('/:id', function deleteBook(req, res, next) {
	console.log("route DELETEBOOKBYID");
  Book.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
