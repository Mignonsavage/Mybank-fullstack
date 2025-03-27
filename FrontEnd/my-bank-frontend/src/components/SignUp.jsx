import React, { useState } from 'react';

const styles = {
    Card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '500px',
        height: 'auto',
        backgroundColor: '#323232',
        borderRadius: '24px',
        boxShadow: '2px 2px 4px rgba(255,255,255,0.1)',
        padding: '20px',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    },
    Input: {
        width: '436px',
        height: '44px',
        padding: '0px 8px',
        border: '0',
        boxSizing: 'border-box',
        borderRadius: '24px',
        backgroundColor: '#323232',
        color: '#94a3b8',
        fontSize: '14px',
        fontFamily: 'Open Sans',
        fontWeight: 400,
        lineHeight: '16px',
        outline: 'none',
        marginBottom: '20px',
    },
    Checkbox: {
        display: 'flex',
        alignItems: 'center',
        fontFamily: 'Open Sans',
        fontSize: '14px',
        fontWeight: 400,
        color: '#94a3b8',
        marginBottom: '20px',
    },
    Button: {
        cursor: 'pointer',
        width: '436px',
        height: '52px',
        padding: '0px 8px',
        border: '0',
        boxSizing: 'border-box',
        borderRadius: '24px',
        backgroundColor: '#ff992b',
        color: '#ffffff',
        fontSize: '18px',
        fontFamily: 'Open Sans',
        fontWeight: 600,
        lineHeight: '21px',
        outline: 'none',
    },
};

const SignUp = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        agreeToTerms: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value, // Gère les champs checkbox
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert('The two passwords don\'t match.');
            return;
        }

        if (!formData.agreeToTerms) {
            alert('You should accept the terms and conditions');
            return;
        }

        try {
            const response = await fetch('http://localhost:8000/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            alert(data.message || 'Inscription réussie!');
        } catch (error) {
            alert('Une erreur est survenue. Veuillez réessayer.');
            console.error(error);
        }
    };

    return (
        <div style={styles.Card}>
            <form onSubmit={handleSubmit} style={{ textAlign: 'center' }}>
                <h2 style={{ color: 'white' }}>Create Your Mybank Account</h2>
                <input
                    type="text"
                    name="name"
                    placeholder="Nom"
                    value={formData.name}
                    onChange={handleChange}
                    style={styles.Input}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    style={styles.Input}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    style={styles.Input}
                />
                <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm the password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    style={styles.Input}
                />
                <div style={styles.Checkbox}>
                    <input
                        type="checkbox"
                        name="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onChange={handleChange}
                        style={{ marginRight: '10px' }}
                    />
                    <label style={{ color: '#94a3b8' }}>
                        I agree to the terms and conditions
                    </label>
                </div>
                <button type="submit" style={styles.Button}>
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default SignUp;
