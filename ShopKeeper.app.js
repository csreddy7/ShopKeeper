var express = require("express");
var path = require("path");
var app = express();

app.use(express.static(__dirname + '/'));

app.get("*", function(req, res) {
    res.sendFile(path.resolve("main/ShopKeeper.html"));
});

app.listen(7697);
console.log("server listening at 7697");


/*var sass = require("node-sass");
sass.render({
    file: path.resolve("resources/ShopKeeper.scss")
}, function(error, result) {
    console.log("error" + error);
    console.log("result" + result.map);
})*/