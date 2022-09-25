import axios from 'axios';
import React, { useState } from 'react'

function AddUser() {

    const [userData, setUserData] = useState({
        username: '',
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        avatar: ''
    });
    const handleChange = (e) => {
        const { name, value } = e.target
        setUserData({
            ...userData,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

            console.log('userData', userData)
            axios.post("users")
            .then((resp) => {
                console.log(resp)

                // setUsers(
                //     resp.data.payload
                // )
                // setFilteredUsers(
                //     resp.data.payload
                // )
            })
            .catch(error => {

                console.log('add new user error')
                console.log(error)
            })
          
        // }
    }
    return (
        <div className="create">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter User Name ..."
                    name="username" onChange={handleChange}
                    value={userData.username} />

                <input type="text" placeholder="Enter First Name ..."
                    name="first_name" onChange={handleChange}
                    value={userData.first_name} />

                <input type="text" placeholder="Enter Last Name ..."
                    name="last_name" onChange={handleChange}
                    value={userData.last_name} />

                <input type="email" placeholder="Enter Email ..."
                    name="email" onChange={handleChange}
                    value={userData.email} />

                <input type="password" placeholder="Password ..."
                    name="password" onChange={handleChange}
                    value={userData.password} />

                <input type="submit" value="Add" />
            </form>
        </div>
    )
}

export default AddUser