import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://johlexy:xlJZqxZSGEa2mrmq@cluster0.km9ujw2.mongodb.net/path2tech_CAPSTONE_Assigment')
        .catch((error) => {
            process.exit(1); // Exit the process with failure
        });
};