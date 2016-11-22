var bucket_expand = require('../bucketdata.json');

exports.projectInfo = function(req, res) {
  res.json(bucket_expand); // send JSON back to browser
  console.log("IN PROJECT INFO");
}
