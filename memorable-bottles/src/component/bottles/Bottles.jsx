import { useState } from "react";
import "./Bottles.css"
import { useEffect } from "react";
import Bottle from "../bottle/Bottle";
import { addToLS, getStoredCart, removeFromLS } from "../utility/LocalStorage";
import Cart from "../Cart/Cart";

const Bottles = () => {

    const [bottles, setBottles] = useState([]);

    const [cart, setCart] = useState([]);

    const purchaseBottle = bottle => {
        const newCart = [...cart, bottle];
        setCart(newCart);
        addToLS(bottle.id);
    }

    const handleRemoveFromCart = id =>{
        // visual cart remove
        const remainingCart = cart.filter(bottle => bottle.id !== id);
        setCart(remainingCart);
        // remove from store ls
        removeFromLS(id);
    }

    useEffect(() => {
        fetch('../../../public/bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])

    useEffect(() => {
        if (bottles.length > 0) {
            const storedCart = getStoredCart();
            const savedCart = [];
            for (const id of storedCart) {
                const bottle = bottles.find(bottle => bottle.id === id);
                if (bottle) {
                    savedCart.push(bottle);
                }
            }
            setCart(savedCart);
        }
    }, [bottles])

    return (
        <div>
            <h1>Welcome to Bottle community!</h1>
            <h4>Total Bootle: {bottles.length}</h4>
            <Cart key={cart.id} cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
            <div className="bottle-container">
                {
                    bottles.map(bottle => <Bottle
                        purchaseBottle={() => purchaseBottle(bottle)}
                        key={bottle.id}
                        bottle={bottle}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;