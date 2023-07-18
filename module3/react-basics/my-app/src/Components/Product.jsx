export default function Product(){
    // let products = ["Laptop","Headphones","Keyboard","Mobile","Mouse","Laptop"];

    let productsList = [
        { id: 1, name: "Laptop", price: 35000 },
        { id: 2, name: "Headphones", price: 3500 },
        { id: 3, name: "Mouse", price: 1000 },
        { id: 4, name: "Keyboard", price: 4000 },
      ];

    return(
        <ul>
            {/* {products.map(function(product,index){
                return <li key={index}>{product}</li>
            })} */}

            {productsList.map((product)=>{
                return <div key={product.id}>Name : {product.name},and Price : {product.price}</div>
            })}

        </ul>
    )
}