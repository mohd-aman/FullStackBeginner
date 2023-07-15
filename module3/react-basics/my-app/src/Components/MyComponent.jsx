

export default function MyComponent(){

    function handleClick(){
        console.log("Button has been clicked");
    }

    return(
        <button onClick={handleClick}>Click Me</button>
    )
}