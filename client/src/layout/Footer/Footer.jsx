import React from 'react'
import "./Footer.scss"
const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer__top'>
                <div className='footer__top__div'>
                    <h3>Tasty</h3>
                    <p style={{ color: "grey" }}>Far far away, behind the word <br /> mountains, far from the countries <br /> Vokalia and Consonantia, there <br /> live the blind texts.</p>
                </div>
                <div className='footer__top__div'>
                    <h3>Opening Hours</h3>
                    <ul style={{ color: "grey" }}>
                        <li>Monday: 08: - 22:00</li>
                        <li>Tuesday: 08: - 22:00</li>
                        <li>Wednesday: 08: - 22:00</li>
                        <li>Thursday: 08: - 22:00</li>
                        <li>Friday: 08: - 22:00</li>
                        <li>Saturday: 08: - 22:00</li>
                        <li>Sunday: 08: - 22:00</li>
                    </ul>
                </div>
                <div className='footer__top__div'>
                    <h3>Contact Information</h3>
                    <div style={{ color: "grey" }}>
                        <p>198 West 21th Street, Suite 721 New York NY 10016</p>
                        <p>+ 1235 2355 98</p>
                        <p>info@yoursite.com</p>
                        <p>email@email.com</p>
                    </div>
                </div>
            </div>
            <div className='footer__bottom'>
                <p style={{ color: "grey" }}>Copyright ©2024 All rights reserved | This template is made with <i class="fa-solid fa-heart"></i> by Colorlib</p>
            </div>
        </div>
    )
}

export default Footer