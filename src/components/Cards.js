import React from 'react'
import {Card} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

export default function Cards() {
    return (
        <div className='cards-container'>
            <div>
                <img src="https://img.icons8.com/external-colours-bomsymbols-/344/external-food-and-drink-sign-symbols-colors-colours-bomsymbols-.png" alt="food&drink"/>
                <h4>Food & Drink</h4>
                <p><span Style="color:red">103</span> Listings</p>
            </div>
            <div>
                <img src="https://img.icons8.com/ultraviolet/344/5-star-hotel.png" alt="Hotels"/>
                <h4>Hotels</h4>
                <p><span Style="color:red">40</span> Listings</p>
            </div>
            <div>
                <img src="https://img.icons8.com/office/344/shopping-cart-loaded--v2.png" alt="Shopping"/>
                <h4>Shopping</h4>
                <p><span Style="color:red">103</span> Listings</p>
            </div>
            <div>
                <img src="https://img.icons8.com/office/344/face-powder.png" alt="Beauty"/>
                <h4>Beauty</h4>
                <p><span Style="color:red">36</span> Listings</p>
            </div>
            <div>
                <img src="https://img.icons8.com/office/344/bench-press.png" alt="Fitness"/>
                <h4>Fitness</h4>
                <p><span Style="color:red">30</span> Listings</p>
            </div>
            <div>
                <img src="https://img.icons8.com/office/344/controller.png" alt="Games"/>
                <h4>Games</h4>
                <p><span Style="color:red">103</span> Listings</p>
            </div>
        </div>
    )
}
