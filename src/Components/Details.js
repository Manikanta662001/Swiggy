import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Home.css';
export default function Details() {
  const x = useLocation();
  let datadish = x.state.dishes;
  const navigate = useNavigate();
  //console.log(x.state,'STATE')
  const [searcheddd, setsearcheddd] = useState('')
  const [btn, setbtn] = useState(true)
  const [isChecked, setIsChecked] = useState(false);
  const [data1, setdata1] = useState(datadish);


  console.log(data1, 'DATA1');



  const handleclick = (item) => {
    setdata1(
      data1.map((it) => {

        if (it.iname === item.iname) {
          return { ...it, count: it.count + 1 };
        } else {
          return it;
        }
      })
    );
    //alert('item added to cart');
  };

  const handleclickdec = (item) => {
    setdata1(
      data1.map((it) => {
        if (it.count <= 0) {

          return it;
        } else if (it.iname === item.iname) {
          return { ...it, count: it.count - 1 };
        } else {
          return it;
        }
      })
    );
    //alert('item removed from cart');
  };
  const handleCart = () => {
    const selected = data1.filter((item) => item.count > 0)
    console.log(selected, 'SELECTED')
    navigate('../cart', { state: selected });
  };

  // const handleveg = (x) => {
  //   if (x == 'veg') {
  //     let da = datadish.filter((item) => item.veg == 'true');
  //     console.log(da, 'DA');
  //     setdata1(da);
  //   } else if (x == 'nonveg') {
  //     let da = datadish.filter((item) => item.veg == 'false');
  //     console.log(da, 'DA');
  //     setdata1(da);
  //   } else {
  //     setdata1(datadish);
  //   }
  // };
  const handleveg = (e) => {
    console.log('CHECKED', e.target.checked);
    const val = e.target.checked;
    if (val) {
      let da = datadish.filter((item) => item.veg === 'true');
      console.log(da, 'DA');
      setdata1(da);
    } else {
      setdata1(datadish);
    }
  };

  const handlesearch = (e) => {
    setsearcheddd(e.target.value)

  }
  const mappingdata = data1.filter((item) => item.iname.toLowerCase().includes(searcheddd.toLowerCase())

  )
  console.log(mappingdata, "JJJJJ")

  const handleadd = () => {
    setbtn(!btn)
  }
  return (
    <div>
      <hr />
      {/* <div className="yy">
        <input type="checkbox" />
        NonVeg only
        <button onClick={() => handleveg('veg')}>vegonly</button>
        <button onClick={() => handleveg('nonveg')}>Nonvegonly</button>
        <button onClick={() => handleveg('all')}>All</button>
      </div> */}
      <div className='head'>
        <h2>{x.state.name}</h2>
        <label style={{ backgroundColor: 'aquamarine' }}>
          <input type="checkbox" onChange={handleveg} />
          Veg only
        </label><br />
        <input type='search' placeholder={`Search in ${x.state.name}`} onChange={handlesearch} />
      </div>
      {mappingdata.map((item) => {
        return (

          <div className="dd">
            <div>
              <h3>
                {item.iname}-{item.Quantity}
              </h3>
              <h3>₹{item.Price}</h3>
              <p>Try this</p>
            </div>
            <div className="hh">
              <img
                src={item.im}
                alt="image"
                style={{ width: '113px', height: '100px' }}
              />
              <br />
              {btn ? <button onClick={handleadd} className="btn btn-outline-success" style={{ marginLeft: '36px' }}>Add</button>
                :
                <><button onClick={() => handleclick(item)} className='btn btn-success'>+</button>
                  <span style={{ margin: '8px' }}>{item.count}</span>
                  <button onClick={() => handleclickdec(item)} className='btn btn-danger'>-</button></>}
            </div>

            <br />
          </div>
        );
      })}


      <button onClick={handleCart} style={{ marginLeft: '41%' }} className='btn btn-primary'>
        Click here to go to Cart
      </button>

    </div>
  );
}
