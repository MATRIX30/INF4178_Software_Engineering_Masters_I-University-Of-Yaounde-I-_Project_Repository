import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../components/api/axios'
import bgImg from '../assets/images/circleFruit.jpg'
import logo from '../assets/logo.png'
// import { Typography, Grid, Select, MenuItem, Button } from '@material-ui/core'
import {
	Button,
	Grid,
	Typography,
} from '@mui/material';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';


const ScalePreference = () => {
    const [preferences, setPreferences] = useState({
        budgetTechnical: 1,
        budgetTypeOfCrop: 3,
        budgetDuration: 5,
        technicalTypeOfCrop: 7,
        technicDuration: 9,
        typeOfCropDuration: 1,
    })

    const navigate = useNavigate()

    const handlePreferenceChange = (event) => {
        const { name, value } = event.target;
        setPreferences((prevPreferences) => ({
            ...prevPreferences,
            [name]: parseInt(value, 10),
            // Automatically update the inverse value
            [getInversePreferenceName(name)]: 1 / parseInt(value, 10),
        }))
    }

    const getInversePreferenceName = (name) => {
        const [first, second] = name.split('')
        return `${second.toLowerCase()}${first}${name.slice(2)}`
    }

    const handleSubmit = async() => {

        const matrix = [
            [1, preferences.budgetTechnical, preferences.budgetTypeOfCrop, preferences.budgetDuration],
            [1/preferences.budgetTechnical, 1, preferences.technicalTypeOfCrop, preferences.technicDuration],
            [1/preferences.budgetTypeOfCrop, 1/preferences.technicalTypeOfCrop, 1, preferences.typeOfCropDuration],
            [1/preferences.budgetDuration, 1/preferences.technicDuration, 1/preferences.typeOfCropDuration, 1]
        ]

        console.log(matrix)

        // try {

        //     const response = await axiosInstance.post('', matrix)

        //     if (response.status == 200 || response.status == 201){
        //         navigate('/login')
        //     }
            
        // } catch (e) {
        //     console.log(e)
        // }
        navigate('/profile')
    }

    return (
        <div className='p-lg-5 p-3 pt-3' style={{ backgroundImage: `url(${bgImg})`, height: '100vh', backgroundSize: 'cover' }}>
            <div className='p-lg-5 p-2 rounded' style={{ backgroundColor: 'rgba(255, 255, 255, .9)' }}>
                <div className='d-flex justify-content-center'>
                    <img src={logo} alt="" width={70} height={70} onClick={() => navigate('/')} style={{ cursor: 'pointer' }}/>
                </div>
                <p className='text-center fs-5 text-uppercase text-success fw-bold mb-5'>Preférences relatives aux cultures</p>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="subtitle1">Budget - Technic:</Typography>
                        <Select
                            name="budgetTechnical"
                            value={preferences.budgetTechnical}
                            onChange={handlePreferenceChange}
                            fullWidth
                        >
                            <MenuItem value={1}>Equal importance</MenuItem>
                            <MenuItem value={3}>Moderate importance</MenuItem>
                            <MenuItem value={5}>Strong importance</MenuItem>
                            <MenuItem value={7}>Very strong importance</MenuItem>
                            <MenuItem value={9}>Extreme importance</MenuItem>
                        </Select>
                    </Grid>
                    
                    <Grid item xs={12} sm={6}>
                        <Typography variant="subtitle1">Budget - Type of crop:</Typography>
                        <Select
                            name="budgetTypeOfCrop"
                            value={preferences.budgetTypeOfCrop}
                            onChange={handlePreferenceChange}
                            fullWidth
                        >
                            <MenuItem value={1}>Equal importance</MenuItem>
                            <MenuItem value={3}>Moderate importance</MenuItem>
                            <MenuItem value={5}>Strong importance</MenuItem>
                            <MenuItem value={7}>Very strong importance</MenuItem>
                            <MenuItem value={9}>Extreme importance</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="subtitle1">Budget - Duration:</Typography>
                        <Select
                            name="budgetDuration"
                            value={preferences.budgetDuration}
                            onChange={handlePreferenceChange}
                            fullWidth
                        >
                            <MenuItem value={1}>Equal importance</MenuItem>
                            <MenuItem value={3}>Moderate importance</MenuItem>
                            <MenuItem value={5}>Strong importance</MenuItem>
                            <MenuItem value={7}>Very strong importance</MenuItem>
                            <MenuItem value={9}>Extreme importance</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="subtitle1">Technic - Type of crop:</Typography>
                        <Select
                            name="technicalTypeOfCrop"
                            value={preferences.technicalTypeOfCrop}
                            onChange={handlePreferenceChange}
                            fullWidth
                        >
                            <MenuItem value={1}>Equal importance</MenuItem>
                            <MenuItem value={3}>Moderate importance</MenuItem>
                            <MenuItem value={5}>Strong importance</MenuItem>
                            <MenuItem value={7}>Very strong importance</MenuItem>
                            <MenuItem value={9}>Extreme importance</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="subtitle1">Technic - Duration:</Typography>
                        <Select
                            name="technicDuration"
                            value={preferences.technicDuration}
                            onChange={handlePreferenceChange}
                            fullWidth
                        >
                            <MenuItem value={1}>Equal importance</MenuItem>
                            <MenuItem value={3}>Moderate importance</MenuItem>
                            <MenuItem value={5}>Strong importance</MenuItem>
                            <MenuItem value={7}>Very strong importance</MenuItem>
                            <MenuItem value={9}>Extreme importance</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="subtitle1">Type of crop - Duration:</Typography>
                        <Select
                            name="typeOfCropDuration"
                            value={preferences.typeOfCropDuration}
                            onChange={handlePreferenceChange}
                            fullWidth
                        >
                            <MenuItem value={1}>Equal importance</MenuItem>
                            <MenuItem value={3}>Moderate importance</MenuItem>
                            <MenuItem value={5}>Strong importance</MenuItem>
                            <MenuItem value={7}>Very strong importance</MenuItem>
                            <MenuItem value={9}>Extreme importance</MenuItem>
                        </Select>
                    </Grid>
                </Grid>

                <div className='d-flex justify-content-center mt-3'>
                    <Button variant="contained" color="primary" onClick={handleSubmit} sx={{ paddingX: 15, paddingY: 1, marginTop: 5 }}>
                        Save preferences
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ScalePreference
