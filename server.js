var express = require('./common/imports').express;
var app = express();
var bodyparser = require("./common/imports").bodyParser;
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
var password = require("passport");
const passwordSetup = require("./config/passport-setup");
const path = require("path");
app.use(require("./common/imports").cors({
    origin:['http://localhost:4200','https://www.google.com'],
    credentials :true
}));

// app.use(require("./common/imports").cors({
//     origin: 'http://localhost:8080',
//     allowedHeaders: ["Content-Type", "Authorization"],
//     credentials :true
// }));
const auth = require('./route/route');
app.use('/routePage',auth);
app.use(express.static(path.join(__dirname,'dist/angularnode')));

//Registration page redirect
app.use('/registerPage',require('./register/register'));

//Login redirection page
app.use('/loginPage',require('./login/login'));

//passport google+ singup

app.get("/googlePage",password.authenticate('google',{scope:['profile']}),(req,res)=>{console.log("Befor Call Back")});
app.get("/google/redirect",password.authenticate('google'),(req,res)=>{console.log("After Call Back");return res.status(201).json({"shaik":"alla"})});

app.get('/home',(req,res)=>{console.log("Inside home route");res.send('{"feroz":"shaik"}')});
app.use('/node',(req,res)=>{console.log("Inside node route");res.sendFile(path.join(__dirname,'dist/angularnode/index.html'))})
const port = process.env.PORT || 8080;
app.listen(port,(req,res)=>{console.log(`Server listening the port ${port}`)});