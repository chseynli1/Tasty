import React, { useContext } from 'react'
import MainContext from '../../context/Context'
import { Helmet } from "react-helmet"
const Wishlist = () => {
    const { wishlistItems, removeFromWishlistItem } = useContext(MainContext)
    return (
        <div style={{minHeight:"600px"}}> 
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Composition</th>
                        <th scope="col">Price</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        wishlistItems?.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{item._id}</th>
                                    <td><img style={{width:"70px", height:"50px"}} src={item.image} /></td>
                                    <td>{item.name}</td>
                                    <td>{item.composition}</td>
                                    <td>{item.price}$</td>
                                    <td><button className='btn btn-danger' onClick={() => {
                                        removeFromWishlistItem(item._id)
                                    }}>Delete</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <Helmet>
                <title>Wishlist</title>
            </Helmet>
        </div>
    )
}

export default Wishlist