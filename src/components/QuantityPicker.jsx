//imports
import React, { useState } from 'react';

//logic
function QuantityPicker(){
    const [quantity, setQuantity] = useState(1);

    function handleDecrease() {
        console.log("Decreasing quantity");
        let val = quantity - 1;
        //if (quantity === 1) return;
        if (quantity < 1) {
            val = 1; // Prevent going below 1
        }
        setQuantity(val);
    }

    function handleIncrease() {
        console.log("Increasing quantity");
        let val = quantity + 1;
        setQuantity(val);
    }
    
    
    return (
        <div className="quantity-picker">
        <button className="btn btn-light" onClick={handleDecrease} disabled ={quantity === 1}>-</button>
        <span>{quantity}</span>
        <button className="btn btn-light" onClick={handleIncrease}>+</button>
        </div>
    );
}

//export
export default QuantityPicker; 