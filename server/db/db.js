import mongoose from "mongoose";

export default function dbConnect() {
  const connectionString = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@cluster0.n0piyuc.mongodb.net/?retryWrites=true&w=majority`;

  mongoose.set("strictQuery", false);
  mongoose
    .connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Mangodb connected");
    })
    .catch((err) => {
      console.error(err);
    });
}