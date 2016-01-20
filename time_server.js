var net = require("net");
var server = net.createServer(function (socket) {  
       // socket handling logic  
       var date = new  Date();
       var hour = '';
       var month = '';
       var minute = '';
       if(+date.getHours()<10){
         hour = '0'+date.getHours();
       }else{
         hour = date.getHours();
       }
       
       if(+date.getMonth()<10){
        month = '0'+String(+date.getMonth()+1);
       }else{
        month = date.getMonth();
       }
       
      if(+date.getMinutes()<10){
        minute = '0'+date.getMinutes();
       }else{
        minute = date.getMinutes();
       }
       var time = date.getFullYear()+'-'+month+'-'+date.getDate()+' '+hour+':'+minute;

       socket.end(time);
     })  
server.listen(process.argv[2]);
