
/*
export default function State(){
    const [count,setCount]=useState()
    function lightTheme(){
        setTheme("light")
        
    }
    function darkTheme(){
        setTheme("dark")
    }
    return(
        <>
        style={{
            backgroundColor </ theme=="light"?"white":"black",
            color:theme=="light"?"black":"white",
            height:"100vh"/>
         }}
        
        <button onClick={lightTheme}>Light Theme</button>
        <button onClick={darkTheme}>Dark Theme</button>
        </>
    )
}

*/
/*
"use client"
import React, {useState} from "react";

function App() {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const product = {
    name: "Wireless Headphones",
    details: "Bluetooth 5.3, Noise Cancellation, 30-hour battery life",
    price: 2499
  };

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  return (
    <div>
      <h1>Product Wishlist</h1>

      <div>
        <h2>{product.name}</h2>
        <p>{product.details}</p>
        <p>Price: ₹{product.price}</p>

        <button onClick={toggleWishlist}>
          {isWishlisted ? "Added to Wishlist" : "Add to Wishlist"}
        </button>

        <p>
          Wishlist Status:{" "}
          <strong>
            {isWishlisted ? "Added to Wishlist ❤️" : "Not in Wishlist"}
          </strong>
        </p>
      </div>
    </div>
  );
}

export default App;


*/

























