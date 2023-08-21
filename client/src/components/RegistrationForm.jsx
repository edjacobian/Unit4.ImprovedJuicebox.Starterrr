import React, { useState } from 'react';

const RegistrationForm = ({ setToken }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegistration = async (e) => {
    e.preventDefault();
    const response = await fetch('/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password }),
    });

    if (response.ok) {
      // Registration successful, handle accordingly (e.g., show success message)
      const data = await response.json();
      const token = data.token;
    } else {
      // Registration failed, handle accordingly (e.g., show error message)
    }
  };

  return (
    <form onSubmit={handleRegistration}>
      {/* Input fields for username, email, and password */}
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
