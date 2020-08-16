const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"));

var items = [];

app.get("", function(req, res){
    var today = new Date();
    
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    var day = today.toLocaleDateString("en-US", options);
 
    res.render("list", {
       day: day, 
       newListItems: items 
    });

});

app.post("/", function(req, res){
    var item = req.body.newItem;

    items.push(item);

    res.redirect("/");
});

app.listen(3000, function(){
    console.log("Gotchu on port 3000, gurl");
});