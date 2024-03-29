const express = require("express");
const productModel = require("./product.model");
const app = express.Router();
const jwt = require("jsonwebtoken");
const { upload } = require("../coach/coach.router");

// app.post("/", async (req, res) => {
//   //check if admin is adding to products [ROLE BASED ACEESS]
//  // const token = req.headers["authorization"];
//   let s = req.body.data.data.split(",");
//   console.log(s)

//   if (!s) {
//     return res.status(403).send("Missing Entities");
//   }
//   try {
//     let singleProduct = await productModel.create({
//       productName: s[0],
//       image: s[1],
//       price: s[2],
//       qty: 1
//     });

//     return res.status(200).send({ message: "ADDED", singleProduct });
//   } catch (er) {
//     return res.status(404).send(er.message);
//   }
// });

app.post("/", upload.single('image') , async (req, res) => {
  try {
    const { pname, desc, price, qty } = req.body;
    // console.log(req.body);
    if (pname && desc && price && qty) {
      if (!req.file) {
        return res.status(400).json({ message: "Please Upload Image" });
      }
      if(price == 0){
        return res.status(400).json({ message: "Price can't be 0" });
      }
      if(qty == 0){
        return res.status(400).json({ message: "Quantity can't be 0" });
      }
      const prod = await productModel.findOne({ productName: pname })
      if (prod) {
       return res.status(400).json("Product Already Exist ")
      }
      else {
        const doc = new productModel({ productName: pname, desc: desc, price: price, qty: qty , image:req.file.fieldname })
        doc.save()
       return res.status(200).json({message:"Product Added SuccessFully.....",data: doc});
      }  
    }
    else {
     return res.status(400).json({ message: "All Fields are required" });
    }
  } catch (error) {
    return res.status(500).json({message:"Server Failed!"});
  }
})

app.get("/", async (req, res) => {
  try {
    let data = await productModel.find();
    return res.status(200).send(data);
  } catch (er) {
    return res.status(404).send(er.message);
  }
});

app.get('/:id', async (req, res) => {

  try {
    let data = await productModel.findById(req.params.id);
    console.log(data);
    return res.status(200).json({ success: true, data: data });
  } catch (er) {
    return res.status(404).send(er.message);
  }
});

app.put('/:id', async (req, res) => {
  const { productName, desc, price, qty } = req.body;
  const id = req.params.id;
  await productModel.findByIdAndUpdate(id, { productName, desc, price, qty });

  return res.status(200).json({ message: "Product Updated SuccessFully.....", success: true });

});

app.delete("/:id", async (req, res) => {
  console.log("delete tun")
  const id = req.params.id
  console.log(id)
  await productModel.findByIdAndDelete({ _id: id })

  res.status(200).send("Deleted succesfully")
  // try {
  //   let exists = await productModel.findOneAndDelete({
  //     _id: req.params.id,
  //   });

  //   console.log(exists, req.params.id);

  //   res.status(200).send("Product deleted successfully");
  // } catch (e) {
  //   res.send(e.massage);
  // }
});

app.get("/:id", async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(403).send("MISSING ENTITES");
  }
  try {
    let singlData = await productModel.findOne({ _id: id });
    if (!singlData) {
      return res.status(403).send("data not found");
    }
    return res.status(200).send(singlData);
  } catch (er) {
    return res.status(404).send(er.message);
  }
});

module.exports = app;
