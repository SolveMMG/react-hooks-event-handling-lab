// Code Keypad Component Here
import React from "react";

function Keypad (){
    function Consoling(){
        console.log("Entering password...");
    }

    return (
        <div>
            <input 
            type="password"
            name="password"
            onChange={Consoling}
            />
        </div>
    )
}

export default Keypad;