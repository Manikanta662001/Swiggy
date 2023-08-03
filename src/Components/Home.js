import React from 'react';

//import './Home.css';

export default function Home() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Welcome to <b style={{ color: 'crimson' }}>SWIGGY</b> Page</h1>


      <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src='https://entrackr.com/wp-content/uploads/2019/12/Swiggy.jpg' class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRalTzuBq0zDVa1V4ucwZ58cRPiUArUm7iTow&usqp=CAU' class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src='https://c8.alamy.com/zooms/9/6bc039a4f1bb4b8a80148115238519a5/2kb9nc5.jpg' class="d-block w-100" alt="..." />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
