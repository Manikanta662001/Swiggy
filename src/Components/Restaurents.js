import React, { useState } from 'react';
import './Home.css';
import data from './data.json';
import { useNavigate } from 'react-router-dom';

export default function Restaurents() {
  const navigate = useNavigate();
  const [searched, setsearched] = useState('');


  console.log(data, 'DATA.JSON')
  const details = (item) => {
    navigate('../details', { state: item });
  };

  const handleChange = (e) => {
    setsearched(e.target.value);
  };
  const searcheddata = data.filter(
    (item) =>
      item.name.toLowerCase().includes(searched.toLowerCase()) ||
      item.description.toLowerCase().includes(searched.toLowerCase())
  );
  console.log(searcheddata, 'SEARCHED-ARRAY')
  return (
    <div>
      <div className="productheader">
        <div className="navheader">
          <div className="logo">
            <img
              style={{ width: '60px' }}
              src={
                'https://images.yourstory.com/cs/images/companies/logosC141575978425306png'
              }
              alt="flipkartimage"
              id="swiggy"
            />
          </div>
          <div>


            <input
              type="search"
              style={{ marginLeft: '100px' }}
              placeholder="Search for restaurents"
              onChange={handleChange}
            />
            <h2 style={{ marginLeft: '41%', marginTop: '-30px', color: 'mediumblue' }}>SWIGGY</h2>
          </div>
        </div>
      </div>

      <hr />
      <h1 style={{ textAlign: 'center', backgroundColor: 'cyan', color: 'fuchsia' }}>Top restaurant chains in Hyderabad</h1>
      <div className="flexdisplay">
        {searcheddata.map((item) => {
          return (
            <div
              className={'card'}
              style={{ width: '20rem' }}
              onClick={() => details(item)}
            >
              <img class="card-img-top" src={item.image} alt="..." />
              <div className={'card-body'}>
                <h4>{item.name}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
