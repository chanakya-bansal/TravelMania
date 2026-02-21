require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected Successfully 🚀"))
.catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("Server Running");
});

app.listen(5000, () => console.log("Server running on port 5000"));






// const express = require("express");

// const app = express();
// const PORT = 5000;
// //CRUD : Create Read Update(patch) Delete
// app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("TravelMania Backend Running ");
// });

// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });

// app.get("/addUser",(req,res) => {
//   res.send("TravelMania BAckend is here");
// });
