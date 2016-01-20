var fs = require('fs');
var path = require('path');

module.exports = function(dirname, filter, callback) {
    var fileArr = [];
    fs.readdir(dirname, function(err,list) {
        if (err) {
         return callback(err);
        }
        for(var i = 0; i < list.length; i++){
            if(path.extname(list[i])==='.'+filter){
                fileArr.push(list[i]);
            }
        }
        return callback(null, fileArr);
    });
};
