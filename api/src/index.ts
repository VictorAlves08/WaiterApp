import express from "express";

const app = express();

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is Running on: http://localhost:${PORT}`);
});
