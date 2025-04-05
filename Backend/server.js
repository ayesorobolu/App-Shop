import express  from "express";
import dotenv from "dotenv";
import path from "path";

import { connectDB } from "./config/db.js";
import productRoute from "./routes/product.route.js"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000 

const __dirname = path.resolve();

app.use(express.json());  //middleware that allows us to accept the JSON data in the  req.body

app.use("/api/products", productRoute);

// if(process.env.NODE_ENV === "production") {
//     app.use(express.static(path.join(__dirname, "/Frontend/dist")));

//     app.get("*", (req,res) => {
//         res.sendFile(path.resolve(__dirname, "Frontend", "dist", "index.html"));
//     });
// }

app.listen(PORT, () => {
connectDB();
 console.log("server started at:" + PORT);   
});
  