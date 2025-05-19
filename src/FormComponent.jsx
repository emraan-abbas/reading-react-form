import React, {useState} from 'react'

export default function FormComponent() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = e => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('FORM DATA = ', formData)
  }

  return (
		<form onSubmit={handleSubmit}>
			<div>
				<lable>Name: </lable>
				<input
					name='name'
					placeholder='Name'
					value={formData.name}
					onChange={handleChange}
					required
				/>
			</div>
			<div>
				<lable>Email: </lable>
				<input
					name='email'
					placeholder='Email'
					value={formData.email}
					onChange={handleChange}
					required
				/>
			</div>
			<div>
				<lable>Password: </lable>
				<input
					name='password'
					placeholder='Password'
					value={formData.password}
					onChange={handleChange}
					required
				/>
			</div>
			<button type='submit'>Submit</button>
		</form>
	);
}
