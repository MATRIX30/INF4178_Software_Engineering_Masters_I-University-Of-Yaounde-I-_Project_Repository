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

const cultureTypes = ['cereals', 'vegetables', 'fruits', 'tubers', 'epices'];
const technicTypes = ['modern', 'manual'];

const UpdateProject = ({projectId, children, data}) => {

    const [open, setOpen] = useState(false);
    const [projectData, setProjectData] = useState({
        farmer: data.farmer,
        title: data.title,
        budget: data.budget,
        surface: data.surface,
        description: data.description,
        cultureType: data.cultureType,
        technic: data.technic,
        duration: data.duration,
        files: data.files,
    })

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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProjectData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }

    const handleDurationChange = (e, value) => {
        setProjectData((prevData) => ({
            ...prevData,
            duration: value,
        }))
    }

    const handleSurfaceChange = (e, value) => {
        setProjectData((prevData) => ({
            ...prevData,
            surface: value,
        }))
    }

    const handleFilesChange = (files) => {
        setProjectData((prevData) => ({
            ...prevData,
            files: files,
        }))
    }


    const handleSubmit = async(e) => {
        e.preventDefault()
        
        const data = {
            farmer: userData?._id,
            title: projectData.title,
            budget: projectData.budget,
            surface: projectData.surface,
            description: projectData.description,
            cultureType: projectData.cultureType,
            technic: projectData.technic,
            duration: projectData.duration,
            files: projectData.files,
        }

        try {
            
            const response = await axiosInstance.put(`project/update/${projectId}`, data)
            console.log(response)

        } catch (e) {
            console.log(e)
        }
        setOpen(false)
    }

    const deleteProject = async() => {

        const data = {
            id: projectId
        }

        try {
            
            const response = await axiosInstance.delete(`project/delete/${projectId}`, data)
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
                    Modification du projet
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Titre"
                        name="title"
                        value={projectData.title}
                        onChange={handleChange}
                        fullWidth
                        required
                        size='small'
                        margin='normal'
                    />
                    <TextField
                        label="Budget"
                        name="budget"
                        value={projectData.budget}
                        onChange={handleChange}
                        fullWidth
                        required
                        size='small'
                        margin='normal'
                    />
                    <TextField
                        label="Description"
                        name="description"
                        value={projectData.description}
                        onChange={handleChange}
                        fullWidth
                        required
                        multiline
                        rows={4}
                        size='small'
                        margin='normal'
                    />
                    <Select
                        label="Type de culture"
                        name="cultureType"
                        value={projectData.cultureType}
                        onChange={handleChange}
                        fullWidth
                        required
                        size='small'
                        sx={{ marginTop: 2 }}
                    >
                        {cultureTypes.map((type) => (
                            <MenuItem key={type} value={type}>
                                {type}
                            </MenuItem>
                        ))}
                    </Select>
                    <Select
                        label="Technique"
                        name="technic"
                        value={projectData.technic}
                        onChange={handleChange}
                        fullWidth
                        required
                        size='small'
                        sx={{ marginTop: 2 }}
                    >
                    {technicTypes.map((type) => (
                        <MenuItem key={type} value={type}>
                            {type}
                        </MenuItem>
                    ))}
                    </Select>
                    <Typography id="duration-slider" sx={{ marginTop: 3 }} gutterBottom>
                        Area (in square meters)
                    </Typography>
                    <Slider
                        name="duration"
                        value={projectData.surface}
                        onChange={handleSurfaceChange}
                        min={50}
                        max={1000}
                        step={50}
                        valueLabelDisplay="auto"
                        aria-labelledby="surface-slider"
                        sx={{ color: '#198754', outline: '#198754', marginBottom: 3 }}
                    />
                    <Typography id="duration-slider" sx={{ marginTop: 3 }} gutterBottom>
                        Duration of projet (in month)
                    </Typography>
                    <Slider
                        name="duration"
                        value={projectData.duration}
                        onChange={handleDurationChange}
                        min={1}
                        max={60}
                        step={1}
                        valueLabelDisplay="auto"
                        aria-labelledby="duration-slider"
                        sx={{ color: '#198754', outline: '#198754', marginBottom: 3 }}
                    />
                    <DropzoneArea
                        acceptedFiles={['image/*', 'application/pdf']}
                        dropzoneText="Drag & drop files here or browse"
                        onChange={handleFilesChange}
                        filesLimit={1}
                        showAlerts={true}
                    />
                    <div className='d-flex justify-content-between mt-5'>
                        <Button onClick={() => deleteProject()} variant="outlined" color="error">
                            Delete
                        </Button>
                        <Button type="submit" variant="contained" color="success" sx={{ color: '#fff' }}>
                            Update the project
                        </Button>
                    </div>
                </form>
                </Box>
            </Modal>
        </div>
    )
}

export default UpdateProject