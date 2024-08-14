const mongoose = require('mongoose');
mongoose.set('strictQuery', false); // or true, depending on your preference

const DB = "mongodb://localhost:27017";

mongoose.connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
.then(() => {
    console.log("Database Connected");
})
.catch((error) => {
    console.error("Database connection error:", error);
});