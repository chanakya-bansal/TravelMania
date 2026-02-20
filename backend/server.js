const express = require("express");

const app = express();
const PORT = 5000;
//CRUD : Create Read Update(patch) Delete
app.use(express.json());

app.get("/", (req, res) => {
  res.send("TravelMania Backend Running ");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

app.get("/addUser",(req,res) => {
  res.send("TravelMania BAckend is here");
});
