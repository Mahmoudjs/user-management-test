import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "./style.css"
function UsersList() {

    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);

    const [search, setSearch] = useState({
        first_name: '',
        last_name: '',
        email: ''
    });

    const handleSearch = (event) => {
        const { name, value } = event.target
        setSearch({
            ...search,
            [name]: value
        });
    };

    const handleDelete = (id) => {
        const shouldDelete = window.confirm('Do you really want to delete this awesome Medium article?');
        if (shouldDelete) {
            // deleteUser(id)
            console.log('deleted')
            console.log('id', id)

            axios.delete(`users/${id}`)
                .then(resp => {
                    console.log(resp)
                    // users(current =>
                    //     current.filter(user => {
                    //       return user.id !== id;
                    //     }))
                    // setUsers([
                    //     ...users,
                    //     resp.data.payload
                    // ])

                })
                .catch(error => {
                    console.log(error)
                })
        }
    }

    useEffect(() => {
        const data = [];
        users.filter(user => {
            if (
                (search.first_name && (user.first_name).toLowerCase().includes((search.first_name).toLowerCase())) ||
                (search.last_name && (user.last_name).toLowerCase().includes((search.last_name).toLowerCase())) ||
                (search.email && (user.email).toLowerCase().includes((search.email).toLowerCase()))
            ) {
                data.push(user)
            }
        })
        if (!(!!search.first_name) && !(!!search.last_name) && !(!!search.email)) {
            setFilteredUsers(users)

        } else {
            setFilteredUsers(data)
        }

    }, [search])
    useEffect(() => {

        axios.get("users")
            .then(resp => {
                setUsers(
                    resp.data.payload
                )
                setFilteredUsers(
                    resp.data.payload
                )
            })
            .catch(error => {
                console.log(error)
            })
    }, [])
    return (
        <>
            <div style={{
                paddingBottom: "50px"
            }}>Users List</div>

            <div>
                <h2 style={{
                    paddingBottom: "20px"
                }}>SEARCH</h2>
                <div className="search-inputs">
                    <input onChange={handleSearch} value={search.first_name} name="first_name"
                        type="text" placeholder="First Name"
                    />
                    <input onChange={handleSearch} value={search.last_name} name="last_name"
                        type="text" placeholder="Last Name"
                    />
                    <input onChange={handleSearch} value={search.email} name="email"
                        type="email" placeholder="Email"
                    />
                </div>
            </div>
            <table className="users-table">
                <tr>
                    <th>User Name</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
                {
                    filteredUsers.length > 0 ? (filteredUsers.map(user => {
                        return <tr key={user.id}>
                            <td>{user.username}</td>
                            <td>{user.first_name}</td>
                            <td>{user.last_name}</td>
                            <td>{user.email}</td>
                            <td>
                                <Link to={`/edit/${user.id}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none"
                                        stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <polygon points="16 3 21 8 8 21 3 21 3 16 16 3"></polygon>
                                    </svg>
                                </Link>

                                {/* <a href="#" title="Edit">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none"
                                        stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <polygon points="16 3 21 8 8 21 3 21 3 16 16 3"></polygon>
                                    </svg>
                                </a> */}
                                <a href="#" title="Delete" onClick={() => handleDelete(user.id)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none"
                                        stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="3 6 5 6 21 6"></polyline>
                                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                        <line x1="10" y1="11" x2="10" y2="17"></line>
                                        <line x1="14" y1="11" x2="14" y2="17"></line>
                                    </svg>
                                </a>
                            </td>
                        </tr>
                    })) :
                        (<tr>
                            <td colSpan={5}>no data to show</td>
                        </tr>)
                }


            </table>
        </>

    )
}

export default UsersList