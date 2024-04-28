import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      // Your registration logic here
      const registrationData = {
        firstName,
        lastName,
        email,
        password,
      };

      // Make a fetch request to your server for registration
      const response = await fetch('http://localhost:4000/Register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registrationData),
      });

      if (response.ok) {
        // If registration is successful, show a success message
        toast.success('Registration successful!.');

        // Optionally, you can clear the form fields after successful registration
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
      } else {
        // If registration fails, show an error message
        toast.error('Registration failed. Please fill all the required fields.');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      // Show a generic error message
      toast.error('An error occurred during registration. Please try again later.');
    }
  };

  return (
    <div className="container">
      <div className="col">
        <div className="card">
          <div className="card-body px-5">
            <h4 className="card-title text-center mt-3 fw-bold">REGISTRATION FORM</h4>
            <form onSubmit={handleRegister}>
              <label htmlFor='firstName'>FIRST NAME:</label>
              <input
                id='firstName'
                className="p-2 mt-2 mb-2 form-control input-bg"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <label htmlFor='lastName'>Last NAME:</label>
              <input
                id='lastName'
                className="p-2 mt-2 mb-2 form-control input-bg"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <label htmlFor='email'>Email:</label>
              <input
                id='email'
                type="email"
                className="p-2 mt-2 mb-2 form-control input-bg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor='password'>Password:</label>
              <input
                id='password'
                type="password"
                className="p-2 mt-2 mb-2 form-control input-bg"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className='mt-3 d-grid'>
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
