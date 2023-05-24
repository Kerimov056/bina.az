import React, { useEffect, useState } from 'react';
import './cart.scss';
import Cart from './Cart';
import axios from 'axios';

const Carts = () => {
  const [homes, setHomes] = useState([]);
  // const [filteredHomes, setFilteredHomes] = useState([]);

  useEffect(() => {
    try {
      const getAll = async () => {
        const response = await axios.get('http://localhost:3004/products');
        setHomes(response.data);
        console.log(response.data);
      };
      getAll();
    } catch (error) {
      console.log(error);
    }
  }, []);

  // useEffect(() => {
  //   const filteredData = homes.filter((ev) => ev.price > parseFloat(price));
  //   setFilteredHomes(filteredData);
  // }, [price, homes]);

  return (
    <>
      <div className='carts'>
        <div className='carts_in'>
          {homes.filter(sya => { return sya.price > parseInt(price, 0) }).map((sum) => {
            return (
              <Cart
                key={sum.id}
                imgurl={sum.img}
                price={sum.price}
                otaq={sum.otaq}
                kvadrat={sum.kvadrat}
                area={sum.area}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Carts;
