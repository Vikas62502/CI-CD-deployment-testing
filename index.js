import express from "express";
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.post("/working-fine", (req, res) => {
    res.send("Working Fine");
});



app.listen(3000, () => {
    console.log("Server is running on port 3000");
}
);