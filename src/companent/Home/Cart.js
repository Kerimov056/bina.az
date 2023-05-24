import React from 'react'
import './cart.scss'
import PropTypes from 'prop-types';


const Cart = ({imgurl,price,otaq,kvadrat,area}) => {
    return (
        <>
            <div className='cart'>
                <div className='img'>
                    <img src={imgurl}></img>
                </div>
                <div className='data'>
                    <div className='data_in'>
                        <h2>{price} ₼</h2>
                        <h3>{otaq} otaqli  * <span>{kvadrat} m^2</span></h3>
                        <h4>{area}</h4>
                    </div>
                </div>
            </div>
        </>
    )
}


Cart.propTypes = {
    imgurl: PropTypes.string,
    price: PropTypes.number,
    otaq: PropTypes.number,
    kvadrat: PropTypes.number,
    area: PropTypes.string
}

export default Cart