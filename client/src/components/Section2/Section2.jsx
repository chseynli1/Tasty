import React from 'react'
import "./Section2.scss"
const Section2 = () => {
  return (
    <div className='section2'>
        <div className='section2__image'>
            <img style={{width:"500px"}} src="https://preview.colorlib.com/theme/tasty/images/chef-1.jpg.webp" alt="" />
        </div>
        <div className='section2__text'>
            <div className='section2__text__top'>
                <p style={{color:"rgb(148, 147, 147)"}}>ABOUT TASTY</p>
                <h3>Our chef cooks the most <br/> delicious food for you</h3>
            </div>
            <div className='section2__text__bottom'>
                <p style={{color:"rgb(138, 135, 135)"}}>Far far away, behind the word mountains, far from the <br/> countries Vokalia and Consonantia, there live the blind <br/> texts. Separated they live in Bookmarksgrove right at the <br/> coast of the Semantics, a large language ocean.</p>
                <p style={{color:"rgb(138, 135, 135)"}}>A small river named Duden flows by their place and <br/> supplies it with the necessary regelialia. It is a <br/> paradisematic country, in which roasted parts of <br/> sentences fly into your mouth.</p>

            </div>
        </div>
    </div>
  )
}

export default Section2