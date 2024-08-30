const mongoose = require('mongoose')

const connectDB = async () => {
  mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connetion Successfull");
  }) 
  .catch((err) => {
    console.log(err.message,"ERROR");
  });
}

module.exports = connectDB