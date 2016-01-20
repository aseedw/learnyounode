var http = require('http');
var urls = process.argv.slice(2,process.argv.length);
var pages = [];
var waiting = 0;

urls.map(function(url,idx){
    http.get(url,function(res){
        waiting++;
        var alldata = "";
        res.setEncoding('utf8');
        res.on('data',function(data){alldata += data});
        res.on('end', function(){
            pages[idx] = alldata;
            waiting--;
            if (!waiting) {
                pages.map(function(page){console.log(page)});
            }
        });
    });
});
