import { useState } from "react";
import "./Bottles.css"
import { useEffect } from "react";
import Bottle from "../bottle/Bottle";

const Bottles = () => {

    const [bottles, setBottles] = useState([]);
    console.log(bottles);

    const [cart, setCart] = useState([]);

    const purchaseBottle = bottle => {
        const newCart = [...cart, bottle];
        setCart(newCart);
    }

    useEffect(() => {
        fetch('../../../public/bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])

    return (
        <div>
            <h1>Welcome to Bottle community!</h1>
            <h4>Total Bootle: {bottles.length}</h4>
            <div>
                <h3>Cart list: {cart.length}</h3>
            </div>
            <div className="bottle-container">
                {
                    bottles.map(bottle => <Bottle 
                        purchaseBottle={ () => purchaseBottle(bottle) } 
                        key={bottle.id} 
                        bottle={bottle}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;