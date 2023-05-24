import React, { useState } from 'react';
import './navbar.scss';
import { AiTwotoneHeart } from 'react-icons/ai';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import { FaChevronDown } from 'react-icons/fa';
import Checkbox from '@material-ui/core/Checkbox';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [price, setPrice] = useState(1)

  const change = (e) => {
    setPrice(e.target.value);
  };


  const selectedFilters = [
    {
      "id": 1,
      "name": "1 otaqli"
    },
    {
      "id": 2,
      "name": "2 otaqli"
    },
    {
      "id": 3,
      "name": "3 otaqli"
    },
  ];


  const handleCheckboxChange = (filterValue) =>{
      if(selectedFilters.includes(filterValue)){

      }
      else{

      }
  }

  return (
    <>
      <div className='navbar'>
        <div className='navbar_in'>
          <div>
            <span className='gray'>Dəstək xidməti: (012) 599-08-02; (012) 505-08-02</span>
            <span className='white'>RU</span>
            <span className='white'><AiTwotoneHeart className='urek' />Secilmisler</span>
            <span className='white'><BsFillPersonFill className='person' />Giris</span>
          </div>
        </div>
      </div>

      <div className='navbar2'>
        <div className='navbar2_in'>
          <div className='left'>
            <h1>BİNA.AZ</h1>
            <span>Alqi-satqi</span>
            <span>Kiraye</span>
            <span>Agentlikler</span>
            <span>Yasayis komplekleri</span>
          </div>
          <div className='right'>
            <button>
              <span>
                <AiOutlinePlusCircle className='plus' />
              </span>
              Elan yerlesdir
            </button>
          </div>
        </div>
      </div>

      <div className='navbar3'>
        <div className='navbar3_in'>
          <div className='input'>
            <span>Price: {price}</span>
            <input type='range' min={1} max={1000000} onInput={change} />
          </div>
          <div>
            <button onClick={() => setOpen(!open)}>
              Otaq Sayi <FaChevronDown className='don' />
              <ul style={{ display: open ? 'block' : 'none' }}>
                {
                  selectedFilters.map((filter) => {
                    <li key={filter.id}>
                      <Checkbox
                        value={filter.name}
                        checked={selectedFilters.includes(filter.name)}
                        onChange={() => handleCheckboxChange(filter.id)}
                      />{' '}
                      {filter.name}
                    </li>
                  })
                }
              </ul>
            </button>
          </div>
          <div>
            <button onClick={() => setOpen1(!open1)}>
              Baki<FaChevronDown className='don' />
              <ul style={{ display: open1 ? 'block' : 'none' }}>
                <li>
                  <Checkbox defaultChecked /> Baki
                </li>
                <li>
                  <Checkbox /> Samaxi
                </li>
                <li>
                  <Checkbox /> Sumqayit
                </li>
                <li>
                  <Checkbox /> Agdam
                </li>
                <li>
                  <Checkbox /> Fizuli
                </li>
                <li>
                  <Checkbox /> Terter
                </li>
              </ul>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
