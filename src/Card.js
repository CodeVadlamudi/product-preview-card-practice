import React from 'react'
import './Card.css'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

function Card() {
  return (
    <div className='card'>
        <div className='card__content'>
            <div className="card__box">
                <div className="card__left">
                    <img src="./images/desktop.jpg" alt="desktop-img" />
                    <div className="card__mobile">
                        <img src="./images/mobile.jpg" alt="mobile-img" />
                    </div>
                </div>
                <div className="card__right">
                    <h3>PERFUME</h3>
                    <h1>Gabrielle Essence Eau De Parfum</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, officiis consequatur nam sint cum debitis.</p>
                    <div className="card__dollar">
                        <h2>$149.33</h2>
                        <del>$169.99</del>
                    </div>
                    <div className="card__input">
                        <ShoppingCartOutlinedIcon />
                        <input type="button" value="Add to Cart" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card