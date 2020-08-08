const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const campsiteRouter = require("./routes/campsiteRouter");

const hostname = "localhost";
const port = 3000;
const app = express();

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use("/campsites", campsiteRouter);

//allows us to store whatever the client sends as part of the path after the '/'
// as a route parameter named :campsiteId
// app.get("/campsites/:campsiteId", (req, res) => {
//     //here we're just echoing back the request to make sure we're receiving it correctly
//     res.end(
//         `Will send details of the campsite: ${req.params.campsiteId} to you`
//     );
// });

//we won't support a post request for campsites
// app.post("/campsites/:campsiteId", (req, res) => {
//     res.statusCode = 403;
//     res.end(
//         `POST operation not supported on /campsites/${req.params.campsiteId}`
//     );
// });

// app.put("/campsites/:campsiteId", (req, res) => {
//     // here we echo back from the JSON formatted body of the request message
//     // instead of the reouter parameters
//     res.write(`Updating the campsite: ${req.params.campsiteId}\n`);
//     res.end(`Will update the campsite: ${req.body.name}
//         with description: ${req.body.description}`);
// });

// app.delete("/campsites/:campsiteId", (req, res) => {
//     //endpoint for deleting a specific campsite
//     res.end(`Deleting campsite: ${req.params.campsiteId}`);
// });

app.use(express.static(__dirname + "/public"));
app.use((req, res) => {
    // console.log(req.headers);
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end("<html><body><h1>This is an Express Server</h1></body></html>");
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
