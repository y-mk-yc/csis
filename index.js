import express from "express";
import cookieRouter from "./cookie_route.js"; 

const app = express();

app.get("/", function (request, response) {
    response.send("Hello World!");
});

app.use("/api", cookieRouter);

app.listen(8000, function () {
    console.log("Started application on port %d", 8000);
});
