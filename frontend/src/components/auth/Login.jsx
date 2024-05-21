import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';



function Login() {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate()


    function handleChange(e) {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const onSubmit = (e) => {
        try {
            e.preventDefault();
            axios.post(`/api/login`, formData)
                .then(response => {
                    localStorage.setItem('token', response.data.token);
                    localStorage.setItem('userName', response.data.user.name); // Store the user's name
                    navigate('/todos');
                })
                .catch(error => {
                    console.error('Error logging in:', error.response ? error.response.data : error.message);
                });

            // if (token) {
            //     localStorage.setItem('token', token);
            //     console.log('Token stored in local storage');
            //     // Redirect to the todo app or perform other actions
            //     navigate('/todos')
            // }
        } catch (err) {
            console.error('Login error:', err);
        }
    };

    return (
        <div>
            <div>
                <h1>Login</h1>
            </div>
            <div>
                <input type="email" placeholder='Email id' name='email' value={formData.email} onChange={handleChange} />
                <input type="password" placeholder='Password' name='password' value={formData.password} onChange={handleChange} />
                <button onClick={onSubmit}>Login</button>
            </div>
        </div>
    )
}

export default Login
