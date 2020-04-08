const passport = require("passport");
const googleStatage = require("passport-google-oauth20");
const bodyparsar = require("../common/imports").bodyParser;
const key = require("./keys");
passport.use(
    new googleStatage(
        {
            callbackURL:"/google/redirect",
            clientID:key.google.clientID,
            clientSecret:key.google.clientSecret
        }
    ,(accessToken, refreshToken, profile, done)=>{
        console.log("Inside Call back function");
        console.log(profile);

    })
)