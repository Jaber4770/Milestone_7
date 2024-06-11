const getStoredCart = () => {
    const getStoredCartFromLS = localStorage.getItem('cart');
    if (getStoredCartFromLS) {
        return JSON.parse(getStoredCartFromLS);
    }
    return [];
}

const saveCartToLS = cart => {
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}

const addToLS = id => {
    const cart = getStoredCart();
    cart.push(id);
    saveCartToLS(cart);
}

const removeFromLS = id => {
    const cart = getStoredCart();
    // remove sameID every Element
    const remaining = cart.filter(idx => idx !== id);
    saveCartToLS(remaining);
}


export { addToLS, getStoredCart, removeFromLS };