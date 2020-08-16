const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');

app.get("", function(req, res){
    
    var today = new Date();

    if (today.getDay() == 6 || today.getDay() == 0) {
        res.sendFile(__dirname + "/index.html");
    } else {
        res.send("Boo! I have to work!");
    }    

});

app.listen(3000, function(){
    console.log("Gotchu on port 3000, gurl");
});