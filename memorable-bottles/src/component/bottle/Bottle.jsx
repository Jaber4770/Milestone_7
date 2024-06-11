import PropTypes from 'prop-types';
import './Bottle.css';

const Bottle = ({bottle, purchaseBottle}) => {

    const {img, name, price, ratings, ratingsCount, seller, shipping, stock} = bottle;

    return (
        <div className='bottle'>
            <h3>{name}</h3>
            <img className='bottle-img' src={img} alt="" />
            <p>Price: ${price}</p>
            <p>Rating: {ratings}</p>
            <p>Rating Count: {ratingsCount}</p>
            <p>Seller: {seller}</p>
            <p>Shipping time: {shipping}</p>
            <p>Available: {stock}</p>
            <button onClick={purchaseBottle}>Purchase</button>
        </div>
    );
};

Bottle.propTypes = {
    bottle: PropTypes.object.isRequired,
    purchaseBottle: PropTypes.func.isRequired
}


export default Bottle;