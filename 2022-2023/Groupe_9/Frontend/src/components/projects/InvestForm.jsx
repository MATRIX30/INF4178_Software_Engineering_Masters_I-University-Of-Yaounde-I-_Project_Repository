import React, { useState, useEffect } from 'react';
import axiosInstance from '../api/axios'
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import { DropzoneArea } from 'material-ui-dropzone';


const InvestForm = ({projectId, children, data}) => {

    const [open, setOpen] = useState(false);
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')

    const [userData, setUserData] = useState()

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

    const handleSurfaceChange = (e, value) => {
        setPrice(value)
    }


    const handleSubmit = async(e) => {
        e.preventDefault()
        
        const data = {
            investor: userData?._id,
            project: projectId,
            money: price,
            description: description
        }

        console.log(data)

        try {
            
            const response = await axiosInstance.post(`investment/createInvestment`, data)
            console.log(response)

        } catch (e) {
            console.log(e)
        }
        setOpen(false)
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
                    Add Investment form
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Description"
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        fullWidth
                        required
                        size='small'
                        margin='normal'
                    />
                    <Typography id="duration-slider" sx={{ marginTop: 3 }} gutterBottom>
                        Montant à investir
                    </Typography>
                    <Slider
                        name="price"
                        value={price}
                        onChange={handleSurfaceChange}
                        min={500000}
                        max={200000000}
                        step={100000}
                        valueLabelDisplay="auto"
                        aria-labelledby="surface-slider"
                        sx={{ color: '#198754', outline: '#198754', marginBottom: 3 }}
                    />
                    <div className='d-flex justify-content-center mt-5'>
                        <Button type="submit" variant="contained" color="success" sx={{ color: '#fff' }}>
                            Add investment
                        </Button>
                    </div>
                </form>
                </Box>
            </Modal>
        </div>
    )
}

export default InvestForm