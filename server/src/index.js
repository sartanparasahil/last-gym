require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connect = require("./config/db");
const multer = require("multer");
const contactrouter = require("./features/contact/contact.router");
const productRouter = require("./features/products/product.router");
const cartRouter = require("./features/cart/cart.router");
const userRouter = require("./features/user/user.router");
const planRouter = require("./features/Plans/plans.router");
const paymentRouter = require("./features/payment/payment.router");
const {trainerrouter} = require("./features/coach/coach.router");
const adminrouter = require("./features/Admin/admin.router");
const orderModel = require("./features/payment/payment.model");

const PORT = 8080;

// Deafult Midllewares
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))



// Routes
app.use("/products", productRouter);
app.use("/cart", cartRouter);
app.use("/user", userRouter);
app.use("/plan", planRouter);
app.use("/payment", paymentRouter);
app.use("/admin",adminrouter);
app.use(contactrouter);
app.use(trainerrouter);

app.get('/orders',async(req,res)=>{

try {
    const order = await orderModel.find()
    return res.status(200).json({success:true,data:order})
} catch (error) {
  console.log(error.message)
}
})


app.get("/", async (req, res) => {
  res.status(200).send("WelCome To My DataBase.....");
});

app.listen(PORT, async () => {
  await connect();
  console.log("DataBase Connected.....");
  console.log("You Are Running On Port No:8080 ");
});
