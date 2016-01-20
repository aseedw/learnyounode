var fs = require('fs');
var path = require('path');
var filePath = process.argv[2];
var fileArr = [];

fs.readdir(filePath, function(err,list) {
  for(var i = 0; i < list.length; i++){
    if(path.extname(list[i])==='.md'){
      fileArr.push(list[i]);
    }
  }
  console.log(fileArr.join('\n'));
});
