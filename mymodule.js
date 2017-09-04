var fs = require('fs');
var path = require('path');

module.exports = function (folder, ext, callback) {
  fs.readdir(folder, function (err, files) {
    if (err) return callback(err);
    
    files = files.forEach(function (file) {
      if (path.extname(file) === "." + ext) {
        console.log(file);
      }
      
    })
    
    
    callback(null, files);
  })
};

/*******************************************************
var fs = require('fs')
var path = require('path')

module.exports = function(dir, filterStr, callback) {

  fs.readdir(dir, function(err, list) {
    if (err)
      return callback(err)

    list = list.filter(function(file) {
      return path.extname(file) === '.' + filterStr
    })

    callback(null, list)
  })
}
*******************************************************/
 


