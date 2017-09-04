var fs = require('fs');
var output = fs.readFile(process.argv[2], (err, data) => {
  if (err) throw err;
  
  var lines = data.toString().split('\n').length - 1
  console.log(lines);
});

/***********************************************************
var fs = require('fs')
var file = process.argv[2]

fs.readFile(file, function (err, contents) {
  if (err) {
    return console.log(err)
  }
  // fs.readFile(file, 'utf8', callback) can also be used
  var lines = contents.toString().split('\n').length - 1
  console.log(lines)
})
************************************************************/