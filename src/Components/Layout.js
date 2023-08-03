import React from 'react'
import './Home.css';
import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
    return (
        <div>
            <div className="home-page">

                <Link to={'home'}><i class="bi bi-house-door-fill">Home</i></Link>
                <Link to={'restaurents'}><i class="bi bi-h-square">Restaurents</i></Link>
                <Link to={'details'}></Link>
                <Link to={'/cart'}><i class="bi bi-cart">Cart</i></Link>
                <Outlet />


            </div>
        </div>
    )
}
