import mongoose from "mongoose";

const Connection = async (db_username, db_password) => {
  const URL = `mongodb+srv://${db_username}:${db_password}@ecommerce.r0gtz.mongodb.net/Ecommerce?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error: ", error.message);
  }
};

export default Connection;
