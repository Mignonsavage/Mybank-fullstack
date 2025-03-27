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
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
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
                <h2 style={{ color: 'white' }}>Create Your Mybank account</h2>
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
                    placeholder="Mot de passe"
                    value={formData.password}
                    onChange={handleChange}
                    style={styles.Input}
                />
                <button type="submit" style={styles.Button}>
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default SignUp;