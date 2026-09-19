const express = require('express');
const app = express();
const logger = require("./middleware/logger");


app.use(express.json());

app.use(logger);


const studentRoutes = require("./routes/studentRoutes");

app.use("/students", studentRoutes);


console.log("Express application created");
app.use((req,res) => {
    res.status(404).json({message: "Route not found"});
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});