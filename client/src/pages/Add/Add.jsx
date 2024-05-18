import React, { useContext } from 'react'
import { useFormik } from 'formik'
import toast from 'react-hot-toast';
import axios from 'axios';
import MainContext from '../../context/Context';
import Header from '../../layout/Header/Header';
import "./Add.scss"
const Add = () => {
    const { data, deleteHandle, handleSort, searchByName } = useContext(MainContext)
    const formik = useFormik({
        initialValues: {
            image: '',
            name: '',
            composition: '',
            price: ''
        },
        onSubmit: (values, { resetForm }) => {
            if (!values.image || !values.name || !values.composition || !values.price) {
                toast.error("Fiedler bos qalmamalidir!!")
            }
            axios.post("http://localhost:8080/tasty", { ...values }).then(() => {
                resetForm()
                toast.success("Elave olundu")
            })
        },
    }); 
    return (
        <div className='add'>
            <Header />
            <form className='form' onSubmit={formik.handleSubmit}>
                <h1>Add Form</h1>
                <div className='form__input'>
                    <label htmlFor="image"></label>
                    <input
                        id="image"
                        name="image"
                        placeholder='Image'
                        className='form__inp'
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.image}
                    />

                    <label htmlFor="name"></label>
                    <input
                        id="name"
                        name="name"
                        placeholder='Name'
                        className='form__inp'
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                    />

                    <label htmlFor="composition"></label>
                    <input
                        id="composition"
                        name="composition"
                        placeholder='Composition'
                        className='form__inp'
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.composition}
                    />

                    <label htmlFor="price"></label>
                    <input
                        id="price"
                        name="price"
                        placeholder='Price'
                        className='form__inp'
                        type="number"
                        onChange={formik.handleChange}
                        value={formik.values.price}
                    />
                </div>

                <button className='btn btn-dark' type="submit">Add</button>
            </form>
            <div className='select'>
                <input type="text" placeholder='Search' onChange={searchByName} />
                <select name="" id="" onChange={handleSort}>
                    <option value="Default">Default</option>
                    <option value="az">AZ</option>
                    <option value="za">ZA</option>
                    <option value="09">09</option>
                    <option value="90">90</option>
                </select>
            </div>
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
                        data.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{item._id}</th>
                                    <td><img style={{ width: "70px", height: "50px" }} src={item.image} /></td>
                                    <td>{item.name}</td>
                                    <td>{item.composition}</td>
                                    <td>{item.price}</td>
                                    <td><button className='btn btn-dark' onClick={() => {
                                        deleteHandle(item._id)
                                    }}>Delete</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Add