const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useFindAndModify: false,
        });
        console.log("databse connected");
    } catch (error) {
        console.log("database is not connected", error);
    }
};

module.exports = connectDB;
