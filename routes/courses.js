var express = require('express');
const mongodb = require('../mongodb');
var router = express.Router();

/* GET home page. */
router.get('/', async(req, res, next) => {
  // res.json([{'key1': 'value1', 'key2': 'value2'}, {'key1': 'value1', 'key2': 'value2'}]);
  const db = mongodb.db('Homepage');
  const collection = db.collection('Courses');
  const courses = await collection.find().toArray();
  res.json(courses);
});

module.exports = router;
