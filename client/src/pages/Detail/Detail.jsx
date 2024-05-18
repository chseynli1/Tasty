import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./Detail.scss"
import Header from '../../layout/Header/Header'
const Detail = () => {
    const [item, setItem] = useState({})
    const { id } = useParams()
    useEffect(() => {
        axios.get(`http://localhost:8080/tasty/${id}`).then(res => {
            console.log(res.data)
            setItem(res.data)
        })
    }, [id])
    return (
        <>
            <Header />
            <div className='detail'>
                <img style={{width:"550px"}} src={`${item?.image}`} alt="" />
                <div className='detail__text'>
                    <div>
                        <h2>Detail</h2>
                    </div>
                    <p><b>Name: </b>{item?.name}</p>
                    <p><b>Composition: </b>{item?.composition}</p>
                    <p><b>Price: </b>{item?.price}$</p>
                </div>
            </div>
        </>
    )
}

export default Detail