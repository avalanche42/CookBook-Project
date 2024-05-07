import React, { useState } from 'react';

const Signup = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Send form data to backend for signup
        console.log(formData);
    };

    return (
        <div>
            <h1>Signup Page</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleInputChange} />
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} />
                <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleInputChange} />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default Signup;