import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Editemp = () => {
    let [edit, setEdit] = useState({
        user: '',
        category: '',
        brand: ''
    })
    const [loading, setLoading] = useState(true)

    let { user, category, brand } = edit

    const navigate = useNavigate()
    const { id } = useParams()

    const editemp = async () => {
        try {
            let res = await axios.get(`https://6405e457eed195a99f8fdd19.mockapi.io/users/${id}`)
            if (res.status == 200) {
                setLoading(false)
            }
            const data = await res.data
            setEdit(data)
        } catch (error) {
            console.log(error)
        }
    }




    useEffect(() => {
        editemp()

    }, [])

    const editdata = async () => {
        try {
            let res = await axios.put(`https://6405e457eed195a99f8fdd19.mockapi.io/users/${id}`, { ...edit })
        } catch (error) {
            console.log(error)
        }
        navigate("/")
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="edit_head">
                            <h1>Edit Employee</h1>
                        </div>

                        {
                            loading
                                ?
                                <div className='text-center'>

                                    <h1 className='text-primary'>Loading...</h1>

                                </div> :
                                <div className="edit_body d-flex flex-column">
                                    <label htmlFor="user">
                                        Employee
                                        <input type="text" className='form-control' value={user} name="user" onChange={(e) => setEdit({ ...editemp, [e.target.name]: e.target.value })
                                        } id="user" />
                                    </label>
                                    <label htmlFor="category">
                                        Email
                                        <input type="text" className='form-control' value={category} name="category" onChange={(e) => setEdit({ ...editemp, [e.target.name]: e.target.value })
                                        } id="category" />
                                    </label>
                                    <label htmlFor="user">
                                        Phone
                                        <input type="text" className='form-control' value={brand} name="brand" onChange={(e) => setEdit({ ...editemp, [e.target.name]: e.target.value })
                                        } id="brand" />
                                    </label>

                                    <button className='btn btn-success m-2' onClick={editdata}>Edit</button>
                                </div>
                        }


                    </div>
                </div>
            </div>
        </>
    )
}

export default Editemp
