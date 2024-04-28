import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const handleLogin = async (e) => {
    e.preventDefault();

    // Your login logic here
    const loginData = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    try {
      // Make a fetch request to your server for login
      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        // If login is successful, show a success message
        toast.success('Login successful!');
      } else {
        // If login fails, show an error message
        toast.error('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      // Show a generic error message
      toast.error('An error occurred during login. Please try again later.');
    }
  };

  return (
    <div className="container">
      <div className="col">
        <div className="card">
          <div className="card-body px-5">
            <h4 className="card-title text-center mt-3 fw-bold">LOGIN FORM</h4>
            <form onSubmit={handleLogin}>
              <label>Email:</label>
              <input type="email" name="email" className="p-2 mt-2 mb-2 form-control input-bg" />
              <label>Password:</label>
              <input type="password" name="password" className="p-2 mt-2 mb-2 form-control input-bg" />
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

export default Login;
