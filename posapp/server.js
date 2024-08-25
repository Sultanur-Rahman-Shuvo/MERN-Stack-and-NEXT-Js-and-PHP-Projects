const express = require("express");
const connectToDB = require("./dbConnect");

const app = express();
app.use(express.json());

// Routes
const itemsRoute = require("./routes/itemsRoute");
const usersRoute = require("./routes/userRoute");
const billsRoute = require("./routes/billsRoute");

app.use("/api/items/", itemsRoute);
app.use("/api/users/", usersRoute);
app.use("/api/bills/", billsRoute);

// Porting configuration
const port = process.env.PORT || 5000;

// Connecting to the database and start the server
(async () => {
    try {
        await connectToDB();
        app.listen(port, () => {
            console.log(`Node JS Server Running at port ${port}`);
        });
    } catch (error) {
        console.error("Failed to start server due to DB connection error:", error);
        process.exit(1);
    }
})();
