import express from "express";
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/testing", (req, res) => {
    res.send("Hello World");
});

app.get("/health", (req, res) => {
    res.send("I am healthy");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
}
);