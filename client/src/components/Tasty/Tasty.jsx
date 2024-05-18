import React, { useContext } from 'react'
import "./Tasty.scss"
import MainContext from '../../context/Context'
import { Link } from 'react-router-dom'
const Tasty = () => {
    const { data, addToWishlist } = useContext(MainContext)
    return (
        <div className='tasty'>
            <div className='tasty__header'>
                <p style={{color:"rgb(148, 147, 147)"}}>OUR MENU</p>
                <h1>Discover Our Exclusive Menu</h1>
            </div>
            <div className='tasty__cards'>
                {
                    data?.map((item, index) => {
                        return (
                            <div className='tasty__cards__card' key={index}>
                                <div className='tasty__cards__card__image'>
                                    <img style={{width:"80px", height:"80px", borderRadius:"50%"}} src={item.image} alt="" />
                                    <div>
                                        <p>{item.name}</p>
                                        <p>{item.composition}</p>
                                    </div>
                                </div>
                                <div>
                                    <p>{item.price}$</p>
                                </div>
                                <div className='tasty__cards__card__buttons'>
                                    <Link style={{textDecoration:"none", color:"black"}} to={`/${item._id}`}>Go Detail</Link>
                                    <button className='btn btn-dark' onClick={()=>{
                                        addToWishlist(item)
                                    }} >Add to Wishlist</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Tasty