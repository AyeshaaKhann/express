const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express()
app.use(express.json())
app.use(cors())

mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://admin:admin@cluster0.uvfwj5u.mongodb.net/test", {
    useNewurlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB Connected....")
})

const userInfo = new mongoose.Schema({
    id: Number,
    name: String,
    age: Number,
    gender: String
})

const user = new mongoose.model("user", userInfo);

app.get('/', (req, res) => {
    res.send("Hello World....");
});

// app.post("/addUser", (req, res) => {
//     const { } = req.body
//     CreateNFT.findOne({ id: id }, (err, createNFT) => {
//         if (createNFT) {
//             res.send({ message: "NFT already saved.." })
//         }
//         else {
//             const createNFT = new CreateNFT({
//                 id,
//                 title,
//                 description,
//                 url
//             })
//             createNFT.save(err => {
//                 if (err) {
//                     res.send(err)
//                 }
//                 else {
//                     res.send({ message: "NFT Added To DB..." })
//                 }
//             })
//         }
//     })

//     console.log(req.body)
// })

app.listen(process.env.port || 4000);
console.log('Web Server is listening at port ' + (process.env.port || 4000));

