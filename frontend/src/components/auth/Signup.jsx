import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';


function Signup() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    })

    const navigate = useNavigate();

    function handleChange(e) {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const onSubmit = async () => {
        try {
            const response = await axios.post(`/api/signup`, formData);
            console.log(response);
            navigate('/login')
        } catch (err) {
            console.error('error', err);
        }
    };
    return (
        <div>
            <div>
                <h1>SIgn-Up</h1>
            </div>
            <div>
                <input type="text" placeholder='Name' name='name' value={formData.name} onChange={handleChange} />
                <input type="email" placeholder='Email id' name='email' value={formData.email} onChange={handleChange} />
                <input type="password" placeholder='Password' name='password' value={formData.password} onChange={handleChange} />
                <button onClick={onSubmit}>Sign-Up</button>

            </div>
        </div>
    )
}

export default Signup
