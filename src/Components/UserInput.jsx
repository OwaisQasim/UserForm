import React, { useState } from 'react';

export default function UserInput() {
    const [formData, setFormData] = useState({
        username: '',
        age: '',
    });

    const submitted = (event) => {
        event.preventDefault();
        console.log('Username:', formData.username);
        console.log('Age:', formData.age);
    };

    const inputFields = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <form onSubmit={submitted}>
            <div>
                <label htmlFor="username">User Name</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    autoComplete="username"
                    placeholder="Enter Username"
                    value={formData.username}
                    onChange={inputFields}
                />
            </div>
            <div>
                <label htmlFor="age">Enter Age</label>
                <input
                    type="number"
                    id="age"
                    name="age"
                    autoComplete="age"
                    placeholder="Enter Age"
                    value={formData.age}
                    onChange={inputFields}
                />
            </div>
            <button type="submit">Enter</button>
        </form>
    );
}
