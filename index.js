const express = require("express");

const app = express();

app.get("/", (req, res) => {
    console.log("Listening to server");
    res.send("Server is running!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
