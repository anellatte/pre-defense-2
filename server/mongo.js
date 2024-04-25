const mongoose = require("mongoose");

mongoose
    .connect("mongodb+srv://soilsesay:soilsay123@soilesay.qtvrxci.mongodb.net/SoileSay")
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch((error) => {
        console.error("MongoDB connection error:", error);
    });

const newSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
});

const collection = mongoose.model("collection", newSchema);

module.exports = collection;
