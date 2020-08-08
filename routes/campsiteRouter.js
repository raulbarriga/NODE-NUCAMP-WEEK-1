<<<<<<< Updated upstream
const express = require("express");
const bodyParser = require("body-parser");
=======
const express = require('express');
const bodyParser = require('body-parser');
>>>>>>> Stashed changes

const campsiteRouter = express.Router();

campsiteRouter.use(bodyParser.json());

<<<<<<< Updated upstream
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
=======
campsiteRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the campsites to you');
})
.post((req, res) => {
    res.end(`Will add the campsite: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;  //operation not supported
    res.end('PUT operation not supported on /campsites');
})
.delete((req, res) => {
    res.end('Deleting all campsites');
});

campsiteRouter.route('/:campsiteId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end(`Will send details of the campsite: ${req.params.campsiteId} to you`);
})
.post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /campsites/${req.params.campsiteId}`);
})
.put((req, res) => {
    res.write(`Updating the campsite: ${req.params.campsiteId}\n`);
    res.end(`Will update the campsite: ${req.body.name} with description: ${req.body.description}`);
})
.delete((req, res) => {
    res.end(`Deleting campsite: ${req.params.campsiteId}`);
});

module.exports = campsiteRouter;
>>>>>>> Stashed changes
