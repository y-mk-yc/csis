const express = require("express")
var app = express()
app.get("/",function(request,response){
response.send("Hello World!")
})
app.listen(8000, function () {
console.log("Started application on port %d", 8000)
});