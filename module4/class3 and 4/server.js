const express = require("express");
const productController = require("./controllers/product");


const app = express();
const PORT = 8080;

app.use(express.json()) //parses incoming requests with JSON payloads

app.get("/products",productController.getAllProduct)
app.get("/products/:id",productController.getProduct)
app.post("/products",productController.createProduct)
app.put('/products/:id',productController.replaceProduct)
app.patch('/products/:id',productController.updateProduct)
app.delete("/products/:id",productController.deleteProduct)

app.listen(PORT,()=>{
    console.log(`Server is listening at ${PORT}`);
})