import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowBack } from '@material-ui/icons';
import axios from 'axios';
import {
	Button,
	Container,
	FormControl,
	FormGroup,
	TextField,
	Typography,
} from '@mui/material';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import logo from '../assets/logoWhite.png'

const roles = ['farmer', 'investor']

const Registration = () => {

	const [activeForm, setActiveForm] = useState('login')
	const [isTransitioning, setIsTransitioning] = useState(false)
	const [fullname, setFullName] = useState('')
	const [phoneNumber, setPhoneNumber] = useState('')
	const [email, setEmail] = useState('')
	const [role, setRole] = useState(roles[0])
	const [password, setPassword] = useState('')

	const navigate = useNavigate()

	const handleFormToggle = (form) => {
		setIsTransitioning(true);
		setTimeout(() => {
			setActiveForm(form);
			setIsTransitioning(false);
		}, 500);
	}

	const handleSignup = async(e) => {
		e.preventDefault()

		const data = {
			fullname: fullname,
			phoneNumber: phoneNumber,
			email: email,
			role: role,
			password: password
		}

		try{
			console.log('aaaaaaaaa');
			const response = await axios.post('http://localhost:4000/api/register', data)

			console.log(response.data)

			if((response.status == 200 || response.status == 201) && data.role == 'investor'){

				navigate('/scale')
			}
		}catch(e){
			console.log(e)
		}
		
	}

	const handleLogin = async(e) => {
		e.preventDefault()

		const data = {
			email: email,
			password: password
		}

		console.log('******');

		try{
			console.log('aaaaaaaaa');
			const response = await axios.post('http://localhost:4000/api/login', data)

			if(response.status == 200){
				localStorage.setItem('userInfo', JSON.stringify(response.data))

				navigate('/profile')
			}
		}catch(e){
			console.log(e)
		}
		
	}


	return (
		<div className='container-fluid row' style={{ height: '100vh' }}>
			<div className='col-3 bg-success d-grid justify-content-center align-items-center'>
				<div>
					<img src={logo} alt="" width={100} height={100} className='mx-auto'/>
					<h4 className='text-white text-uppercase'>AGRILAB</h4>
				</div>
				<Link to='/' className='bg-white text-success py-2 px-4 text-decoration-none'>
					{/* <ArrowBack color='#fff' fontSize='12px' /> */}
					Go to home
				</Link>
			</div>
			<div className="col-9">
				<Container maxWidth="sm" sx={{ marginTop: '50px' }}>
					<div id="toggle-forms" style={{ marginBottom: '15px' }}>
						<Button
							variant={activeForm === 'login' ? 'contained' : 'outlined'}
							onClick={() => handleFormToggle('login')}
							sx={{ 
								marginRight: '10px', 
								backgroundColor: activeForm === 'login' ? '#198754' : '',
								color: activeForm === 'login' ? '' : '',
							}}
						>
							Login
						</Button>
						<Button
							variant={activeForm === 'register' ? 'contained' : 'outlined'}
							onClick={() => handleFormToggle('register')}
							sx={{ 
								backgroundColor: activeForm === 'register' ? '#198754' : '',
							}}
						>
							Register
						</Button>
					</div>

					{activeForm === 'login' && (
						<form onSubmit={handleLogin} className={isTransitioning ? 'fade-out' : ''}>
							<Typography variant="h4" sx={{ textAlign: 'center', color: 'white' }}>
								Login
							</Typography>
							<FormGroup sx={{ marginTop: '20px' }}>
								<FormControl fullWidth>
								<TextField label="Email" type="email" onChange={(e) => setEmail(e.target.value)} />
								</FormControl>
							</FormGroup>
							<FormGroup sx={{ marginTop: '20px' }}>
								<FormControl fullWidth>
								<TextField label="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
								</FormControl>
							</FormGroup>
							<FormGroup sx={{ marginTop: '20px', textAlign: 'center' }}>
							<input
								type="submit"
								value="Login"
								className="border-success w-full cursor-pointer rounded-md border bg-success py-2 px-5 text-base text-white rounded"
							/>
							</FormGroup>
							<Typography variant="body1" className="forgot" sx={{ color: 'dodgerblue', marginTop: '10px' }}>
								Forgot Password?
							</Typography>
						</form>
					)}

					{activeForm === 'register' && (
						<form onSubmit={handleSignup} className={isTransitioning ? 'fade-out' : ''}>
							<Typography variant="h4" sx={{ textAlign: 'center', color: 'white' }}>
								Register
							</Typography>
							<FormGroup sx={{ marginTop: '20px' }}>
								<FormControl fullWidth>
									<Select
										label="Role"
										name="role"
										value={role}
										onChange={(e) => setRole(e.target.value)}
										fullWidth
										required
										sx={{ marginTop: 2 }}
									>
										{roles.map((type) => (
											<MenuItem key={type} value={type}>
												{type}
											</MenuItem>
										))}
									</Select>
								</FormControl>
							</FormGroup>
							<FormGroup sx={{ marginTop: '20px' }}>
								<FormControl fullWidth>
								<TextField label="Fullname" type="text" onChange={(e) => setFullName(e.target.value)} />
								</FormControl>
							</FormGroup>
							<FormGroup sx={{ marginTop: '20px' }}>
								<FormControl fullWidth>
								<TextField label="Email" type="email" onChange={(e) => setEmail(e.target.value)} />
								</FormControl>
							</FormGroup>
							<FormGroup sx={{ marginTop: '20px' }}>
								<FormControl fullWidth>
								<TextField label="Phone number" type="text" onChange={(e) => setPhoneNumber(e.target.value)} />
								</FormControl>
							</FormGroup>
							<FormGroup sx={{ marginTop: '20px' }}>
								<FormControl fullWidth>
								<TextField label="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
								</FormControl>
							</FormGroup>
							<FormGroup sx={{ marginTop: '20px', textAlign: 'center' }}>
								<input
									type="submit"
									value="Register"
									className="border-success w-full cursor-pointer rounded-md border bg-success py-2 px-5 text-base text-white rounded"
								/>
							</FormGroup>
						</form>
					)}
				</Container>
			</div>
		</div>
	)
}


export default Registration;
