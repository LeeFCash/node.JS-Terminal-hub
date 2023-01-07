const express = require('express');
const  { dirname } = require('path');
const path = require('path');
const app = express();
/* this allows checks the views folder/dir using views engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
*/
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
//
app.use(express.static(path.join(__dirname, 'views')));
/* this get the terminal file from the views folder/dir then puts the output on localhost 3000
app.get('/', (req, res)=>{
    res.render('tarminal');
});
app.listen(3000);
*/
app.get('/', (req, res)=>{
    res.render('tarminal');
});
app.listen(3000);