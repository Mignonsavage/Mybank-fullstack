import React, { useState } from 'react';

const styles = {
    Card: {
        top: '178px',
        left: '470px',
        width: '500px',
        height: 'auto',
        backgroundColor: '#323232',
        borderRadius: '24px',
        boxShadow: '2px 2px 4px rgba(255,255,255,0.1)',
        padding: '20px',
        position: 'relative',
        margin: '0 auto',
        transform: 'translateY(50%)',
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
        marginBottom: '20px', // Espacement entre les champs
    },
    Button: {
        width: '436px',
        height: '44px',
        border: 'none',
        borderRadius: '24px',
        backgroundColor: '#4CAF50', // Couleur du bouton
        color: '#ffffff',
        fontSize: '14px',
        fontFamily: 'Open Sans',
        fontWeight: 700,
        cursor: 'pointer',
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
            alert(data.message || 'Inscription réussie !');
        } catch (error) {
            alert('Une erreur est survenue. Veuillez réessayer.');
            console.error(error);
        }
    };

    return (
        <div style={styles.Card}>
            <form onSubmit={handleSubmit} style={{ textAlign: 'center' }}>
                <h2 style={{ color: 'white' }}>Inscription</h2>
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
                    S'inscrire
                </button>
            </form>
        </div>
    );
};

export default SignUp;