import React, { useState, useEffect } from 'react';
import { Grid, TextField, FormControl, InputLabel, Select, MenuItem, Button } from '@material-ui/core';
import { Skeleton } from '@mui/material';
import axiosInstance from '../api/axios';
import ProjectBox from './ProjectBox';
import Header from '../Header';
import img from '../../assets/images/apple.jpg'


const ProjectsPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filterValue, setFilterValue] = useState('');
    const [projects, setProjects] = useState([])

    useEffect(() => {
        applyFilters()
    }, [searchQuery])

    useEffect(() => {
        getData()
    }, [])

    const getData = async() => {

        try{
            const response = await axiosInstance.get('project/getProjects')
            setProjects(response.data)
        }
        catch(e){
            console.log(e)
        }
    }

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleFilterChange = (event) => {
        setFilterValue(event.target.value);
    };

    const applyFilters = () => {
        let updatedFilteredItems = projects;

        // Appliquer le filtre par recherche
        updatedFilteredItems = updatedFilteredItems.filter((item) =>
            item.title.toLowerCase().includes(searchQuery.toLowerCase())
        );

        // Appliquer le filtre par valeur
        if (filterValue !== '') {
            updatedFilteredItems = updatedFilteredItems.filter((item) => item.filter === filterValue);
        }

        // Mettre à jour la liste des éléments filtrés
        setProjects(updatedFilteredItems);
    };

    return (
        <div>
            <Header />

            <div className='my-5 py-3 mx-4'>
                <Grid container spacing={2}>
                    {/* <Grid item xs={6}>
                        <TextField label="Search ..." value={searchQuery} onChange={handleSearchChange} fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl fullWidth>
                            <InputLabel id="filter-label">Filter</InputLabel>
                            <Select labelId="filter-label" value={filterValue} onChange={handleFilterChange}>
                                <MenuItem value="">All</MenuItem>
                                <MenuItem value="filter1">Filter 1</MenuItem>
                                <MenuItem value="filter2">Filter 2</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} className='d-flex justify-content-end'>
                        <Button variant="contained" onClick={applyFilters}>
                            Apply filters
                        </Button>
                    </Grid> */}

                    <p className='text-center text-uppercase text-secondary fs-5 ms-2 my-3'>Published project</p>

                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            {
                                projects.length != 0 ?
                                    projects.map((item) => (
                                        <Grid item key={item.id} xs={6} sm={4} md={3}>
                                            <ProjectBox 
                                                image={img}
                                                title={item.title}
                                                description={item.description}
                                                id={item._id}
                                                action={{
                                                    type: "internal",
                                                    route: `/project/${item._id}`,
                                                    color: "success",
                                                    label: "read more",
                                                }}
                                            />
                                        </Grid>
                                    ))
                                :
                                    <>
                                        <Skeleton sx={{ bgcolor: 'rgba(0, 255, 0, .3)', borderRadius: 2, margin: 2 }} variant="rectangular" width={280} height={158} />
                                        <Skeleton sx={{ bgcolor: 'rgba(0, 255, 0, .3)', borderRadius: 2, margin: 2  }} variant="rectangular" width={280} height={158} />
                                        <Skeleton sx={{ bgcolor: 'rgba(0, 255, 0, .3)', borderRadius: 2, margin: 2  }} variant="rectangular" width={280} height={158} />
                                        <Skeleton sx={{ bgcolor: 'rgba(0, 255, 0, .3)', borderRadius: 2, margin: 2  }} variant="rectangular" width={280} height={158} />
                                    </>
                            }
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default ProjectsPage
