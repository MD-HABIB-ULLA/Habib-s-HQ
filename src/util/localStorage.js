const getStoredCart = () => {
    const storedCartString = localStorage.getItem('cart');
    if (storedCartString) {
        return JSON.parse(storedCartString)
    }
    return []
}
const saveCartToLS = cart =>{
    const cartStingified = JSON.stringify(cart);
    localStorage.setItem('cart',cartStingified)
}
const addToCart = id => {
    const cart = getStoredCart();
    const updatedCart = [...cart, id];
    saveCartToLS(updatedCart);
};
export {addToCart, getStoredCart};