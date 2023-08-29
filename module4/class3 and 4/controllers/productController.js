const fs = require("fs");


const data = JSON.parse(fs.readFileSync("./data.json","utf-8"));
// console.log(data);
let products = data.products
// console.log(products);

const getAllProduct = (req,res)=>{
    res.send(products);
}

const getProduct = (req,res)=>{
    // console.log(req.params.id);
    let id = req.params.id;
    // console.log(id);
    const product = products.find(obj => obj.id == id);
    // [{id:1,"title":"phone"},{id:2,title:"laptop"},{id:3,title:"mouse"}]
    console.log(product);
    res.send(product)
}

const createProduct = (req,res)=>{
    console.log(req.body);
    // console.log(req.body);
    let product = req.body;
    products.push(product);
    res.send("data added");
}

const replaceProduct = (req,res)=>{
    const id = req.params.id;
    // [{id:1,"title":"phone"},{id:2,title:"laptop"},{id:3,title:"mouse"}]
    const productIndex = products.findIndex(obj => obj.id == id);
    products.splice(productIndex,1,{id:id, ...req.body})
    res.send("data updated with PUT")
}

const updateProduct = (req,res)=>{
    const id = req.params.id;
    const productIndex = products.findIndex(obj => obj.id == id);
    const product = products[productIndex];
    products.splice(productIndex,1, {...product,...req.body});
    res.send("data updated with PATCH")
}

const deleteProduct = (req,res)=>{
    const id = req.params.id;
    // [{id:1,"title":"phone"},{id:2,title:"laptop"},{id:3,title:"mouse"}]
    const productIndex = products.findIndex(obj => obj.id == id);
    // console.log(productIndex);
    products.splice(productIndex,1); // it removes the element and it make changes in original array
    // ["34",353,54,6,46,757];
    // [ 0,   1,  2,3, 4,  5]
    // console.log(products);
    res.send("data deleted");
}

module.exports = {
    getAllProduct,
    getProduct,
    createProduct,
    replaceProduct,
    updateProduct,
    deleteProduct
}

// console.log(module);
