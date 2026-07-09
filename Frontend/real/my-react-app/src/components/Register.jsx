import { useState } from 'react';

function Register() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/users/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    const data = await response.json();
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={(e) => setFormData({...formData, name: e.target.value})} />
      <input type="email" onChange={(e) => setFormData({...formData, email: e.target.value})} />
      <button type="submit">Submit</button>
    </form>
  );
}