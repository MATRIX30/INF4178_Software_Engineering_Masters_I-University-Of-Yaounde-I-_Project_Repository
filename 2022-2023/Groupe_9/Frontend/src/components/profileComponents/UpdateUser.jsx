import React, { useState, useEffect } from 'react';
import axiosInstance from '../api/axios'
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const UpdateUser = ({children, data, role}) => {

    const [open, setOpen] = useState(false);
    const [userData, setUserData] = useState([])
    const [userInfos, setuserInfos] = useState({
        id: userData._id,
        fullname: userData.fullname,
        email: userData.email,
        phoneNumber: userData.phoneNumber,
    })

    useEffect(() => {
		const userInfo = JSON.parse(localStorage.getItem('userInfo'));
		
		setUserData(userInfo)
	}, [])

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setuserInfos((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        
        const data = {
            id: userData?._id,
            fullname: userInfos.fullname,
            email: userInfos.email,
            phoneNumber: userInfos.phoneNumber,
        }
        console.log(data, 'kkkk');

        // try {
            
        //     const response = await axiosInstance.patch( role == 'farmer' ? `farmer/update/${userData?._id}` : `investor/update/${userData?._id}`, data)
        //     console.log(response)

        // } catch (e) {
        //     console.log(e)
        // }
        // setOpen(false)
    }


    return (
        <div>
            <button onClick={handleOpen} className='bg-transparent border-0 w-100'>
                {children}
            </button>
            <Modal
                open={open}
                onClose={handleClose}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Box
                    sx={{
                        width: '600px',
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 4,
                        overflowY: 'scroll',
                        maxHeight: '90vh',
                        borderRadius: 1,
                    }}
                >
                <Typography variant="h5" component="h2" mb={2} sx={{ color: '#198754', fontWeight: 'bold', textAlign: 'center' }}>
                    Update of user data
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Full name"
                        name="fullname"
                        value={userData.fullname}
                        onChange={handleChange}
                        fullWidth
                        required
                        size='small'
                        margin='normal'
                    />
                    <TextField
                        label="Email"
                        name="email"
                        value={userData.email}
                        onChange={handleChange}
                        fullWidth
                        required
                        size='small'
                        margin='normal'
                    />
                    <TextField
                        label="Phone Number"
                        name="phoneNumber"
                        value={userData.phoneNumber}
                        onChange={handleChange}
                        fullWidth
                        required
                        size='small'
                        margin='normal'
                    />

                    <div className='d-flex justify-content-center mt-5'>
                        <Button type="submit" variant="contained" color="success" sx={{ color: '#fff' }}>
                            Update the user data
                        </Button>
                    </div>
                </form>
                </Box>
            </Modal>
        </div>
    )
}

export default UpdateUser