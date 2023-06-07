import React, { useState } from 'react';
import './index.css';
import Background from '../../components/background';

function Admin() {
  const [signupData, setSignupData] = useState({
    email: '',
    password: '',
  });

  const [signupError, setSignupError] = useState('');

  const login = async (event) => {
    event.preventDefault();

    const loginForm = document.querySelector('form');
    const formData = new FormData(loginForm);

    try {
      const response = await fetch("http://localhost:3001/api/auth/login", {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${sessionStorage.getItem('token')}`
        }
      });

      if (response.status === 200) {
        const { token } = await response.json();
        sessionStorage.setItem('token', token);
        window.location.replace('/admin2103/projects');
      } else if (response.status === 401) {
        loginForm.email.value = '';
        loginForm.password.value = '';
        alert("Erreur dans l'identifiant ou le mot de passe");
      } else {
        const errorData = await response.json();
        alert(errorData.message || "Une erreur s'est produite lors de la connexion");
      }
    } catch (error) {
      console.error("Une erreur s'est produite lors de la connexion :", error);
    }
  };

  const signup = async (event) => {
    event.preventDefault();

    const loginForm = document.querySelector('form');
    const formData = new FormData(loginForm);

    try {
      const response = await fetch("http://localhost:3001/api/auth/signup", {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${sessionStorage.getItem('token')}`
        }
      });

      if (response.status === 201) {
        alert('Inscription réussie !');
        setSignupData({ email: '', password: '' });
      } else {
        const errorData = await response.json();
        setSignupError(errorData.message || "Une erreur s'est produite lors de l'inscription");
      }
    } catch (error) {
      console.error("Une erreur s'est produite lors de l'inscription :", error);
    }
  };

  return (
    <section id="admin">
      <Background />
      <div className="admin-connect">
        <h1 className="admin-title"> Connexion</h1>
        <form className="form-connect">
          <label className='label-form-connect' htmlFor="email">Adresse email</label>
          <input className='input-form-connect' type="email" id="email" name="email" required />
          <label className='label-form-connect' htmlFor="password">Mot de passe</label>
          <input className='input-form-connect' type="password" id="password" name="password" required />
          <div className='content-button-admin'>
            <button className='button-form-connect' type="submit" onClick={login}>
              Se connecter
            </button>
            <button className='button-form-signup' type='submit' onClick={signup}>
              S'inscrire
            </button>
          </div>
        </form>
        {signupError && <p className="signup-error">{signupError}</p>}
      </div>
    </section>
  );
}

export default Admin;
