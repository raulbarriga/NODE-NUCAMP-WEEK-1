const express = require("express");
const bodyParser = require("body-parser");

const campsiteRouter = express.Router();

campsiteRouter.use(bodyParser.json());

campsiteRouter
    .route("/")

    //default for all routing methods for this path
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        next();
    })

    //this is just to show that it's working
    //won't use next() since we're not gonna use any more routing methods after this
    .get((req, res) => {
        res.end("Will send all the campsites to you");
    })

    //from the app.all method, once it hits next(), it'll go to the next relevant method
    //so it it was a post request, it'll skip the app.get request
    .post((req, res) => {
        res.end(
            `Will add the campsite: ${req.body.name} with description: ${req.body.description}`
        );
    })

    //here we're rejesting the request with this statusCode & res.end()
    .put((req, res) => {
        res.statusCode = 403;
        res.end("PUT operation not supported on /campsites");
    })

    //normally a dangerous operation, so you need to restrict it to only certain users!
    .delete((req, res) => {
        res.end("Deleting all campsites");
    });

module.exports = campsiteRouter;
