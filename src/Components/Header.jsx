import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
const Header = () => {
    let [api, setApi] = useState([])

    let apiCall = async () => {
        try {
            let res = await axios.get("https://6405e457eed195a99f8fdd19.mockapi.io/users")
            const data = res.data
            setApi(data)
        } catch (error) {
            console.log("apierror", error);
        }
    }



    const del = async (e) => {
        console.log(e)
        try {
            axios.delete(`https://6405e457eed195a99f8fdd19.mockapi.io/users/${e}`)
                .then(() => { apiCall() })
        } catch (error) {
            console.log("apierror", error);
        }
    }

    useEffect(() => {
        apiCall()
    }, [])
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">

                        <div className="emp_header text-center">
                            <h1 style={{ color: 'gray' }}>Employee Table</h1>
                        </div>

                        <div className="emp_body">
                            <div className="d-flex justify-content-between">
                                <h4 style={{ color: 'gray' }}>
                                    List Of Employees
                                </h4>
                                <Link to={"addemployee"}>
                                    <button className='btn btn-primary'>
                                        Add EMP
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <hr />


                        <table className="table table-striped">
                            <thead>
                                <tr className='text-center'>
                                    <th scope="col">No</th>
                                    <th scope="col">Employee</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">CRUD</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    api.map((e, i) => {
                                        return (
                                            <>
                                                <tr className='text-center' key={i}>
                                                    <th scope="row">{e.id}</th>
                                                    <td>{e.user}</td>
                                                    <td>{e.category}</td>
                                                    <td>{e.brand}</td>
                                                    <td>
                                                        <Link to={`view/${e.id}`}>
                                                            <button className='btn btn-primary me-1'>
                                                                View
                                                            </button>
                                                        </Link>
                                                        <Link to={`edit/${e.id}`}>
                                                            <button className='btn btn-success me-1'>
                                                                Edit
                                                            </button>
                                                        </Link>
                                                        <button className='btn btn-danger' onClick={() => { if (window.confirm("Are you Sure?")) { del(e.id) } }}>
                                                            Delete
                                                        </button>
                                                    </td>
                                                </tr>
                                            </>
                                        )
                                    })
                                }

                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
