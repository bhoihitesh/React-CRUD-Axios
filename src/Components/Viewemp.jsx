import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Viewemp = () => {
    let [view, setView] = useState([])
    const [loading, setLoading] = useState(true)
    const { id } = useParams()
    const viewemp = async () => {
        try {
            let res = await axios.get(`https://6405e457eed195a99f8fdd19.mockapi.io/users/${id}`)
            if (res.status == 200) {
                setLoading(false)
            }
            const data = await res.data
            setView([data])
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        viewemp()
    }, [])

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <table className="table">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">User</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Phone</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    loading
                                        ?
                                        <div className='text-center'>

                                            <h1 className='text-primary'>Loading...</h1>

                                        </div>
                                        :
                                        <>
                                            {view.map((e, i) => {
                                                return (
                                                    <>
                                                        <tr key={i}>
                                                            <th scope="row">{e.id}</th>
                                                            <td>{e.user}</td>
                                                            <td>{e.category}</td>
                                                            <td>{e.brand}</td>
                                                        </tr>
                                                    </>
                                                )
                                            })}
                                        </>
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Viewemp
