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

app.post('/check-post', (req, res) => {
    res.send("Post request");
})

app.post("/add-data-to-main", (req, res) => {
    res.send("Data added to main");
});
// comment added for testeng

// commit test
// check check check
app.listen(3000, () => {
    console.log("Server is running on port 3000");
}
);