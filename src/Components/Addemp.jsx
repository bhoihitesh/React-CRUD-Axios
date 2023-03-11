import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Addemp = () => {
    let [emp, setEmp] = useState({
        user: '',
        category: '',
        brand: ''
    })

    const { user, category, brand } = emp
    let navigate = useNavigate()
    let userApi = async () => {
        try {
            await axios.post("https://6405e457eed195a99f8fdd19.mockapi.io/users", emp)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {

    }, [])

    let adduser = () => {
        userApi()
        navigate('/')
    }
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12 d-flex flex-column justify-content-center">
                        <h1>Add Employee</h1>

                        <div className='d-flex flex-column'>
                            <label htmlFor='username'>User</label>
                            <input type="text" className='form-control' value={user} name="user" id='username' onChange={(e) => setEmp({ ...emp, [e.target.name]: e.target.value })} />
                            <label htmlFor='email'>Email</label>
                            <input type="text" className='form-control' value={category} name="category" id='email' onChange={(e) => setEmp({ ...emp, [e.target.name]: e.target.value })} />
                            <label htmlFor='phone'>Phone</label>
                            <input type="text" className='form-control' value={brand} name="brand" id='phone' onChange={(e) => setEmp({ ...emp, [e.target.name]: e.target.value })} />

                            <button className='btn btn-primary my-2' onClick={adduser}>
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Addemp
