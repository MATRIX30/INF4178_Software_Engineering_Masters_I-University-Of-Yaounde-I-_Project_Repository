import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axiosInstance from '../api/axios'
import Header from '../Header'
import InvestForm from './InvestForm'
import pdf from '../../assets/images/pdfPreview.png'



const ProjectDescription = () => {

    const [userData, setUserData] = useState()
    const [projectInfo, setProjectInfo] = useState([])
    const [farmerInfo, setFarmerInfo] = useState([])

    const params = useParams()

    useEffect(() => {
		const userInfo = JSON.parse(localStorage.getItem('userInfo'));
		
		setUserData(userInfo)
	}, [])

    useEffect(() => {
        getData()
    }, [])

    const getData = async() => {

        try {
            
            const response1 = await axiosInstance.get(`/project/getProject/${params.id}`)
            setProjectInfo(response1.data)

            const response2 = await axiosInstance.get(`/farmer/info/${response1.data.farmer}`)
            setFarmerInfo(response2.data)

        } catch (e) {
            console.log(e)
        }
    }

    function renderCultureType (t) {
        if(t == 1){
            return 'cereals'
        }else if(t == 2){
            return 'vegetables'
        }else if(t == 3){
            return 'fruits'
        }
        else if(t == 4){
            return 'tubers'
        }else if(t == 5){
            return 'epices'
        }else{
            return 'Not defined'
        }
    }

    function renderTechnic (t) {
        if(t == 1){
            return 'manual'
        }else if(t == 2){
            return 'modern'
        }else{
            return 'Not defined'
        }
    }

    return (
        <div>
            <Header />
            
            <div className="container mt-5">
            <div className="main-body">
            
                <nav aria-label="breadcrumb" className="main-breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/" className='text-decoration-none text-secondary'>Home </Link></li>
                        <span> / </span>
                        <li className="breadcrumb-item active text-success" aria-current="page"> Project details</li>
                    </ol>
                </nav>
            
                <div className="row gutters-sm">
                    <div className="col-md-4 mb-3">
                    <div className="card">
                        <div className="card-body">
                        <div className="d-flex flex-column align-items-center text-center">
                            <img src={'http://localhost:4000/' + farmerInfo.avatar} alt="Admin" className="rounded-circle" width="150" />
                            <div className="mt-3">
                                <h4>{farmerInfo.fullname}</h4>
                                <p className="text-secondary mb-1">Farmer</p>
                                <p className="text-muted font-size-sm">{farmerInfo.email} - {farmerInfo.phoneNumber}</p>
                                
                                <button className="btn btn-success mx-1">Contact farmer</button>
                                <button className="btn btn-outline-success mx-1">Message</button>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="card mt-3">
                        <ul className="list-group list-group-flush">
                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                            <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-globe me-2 icon-inline"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>Website</h6>
                            <span className="text-secondary">https://jugalux.com</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                            <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-github me-2 icon-inline"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>Github</h6>
                            <span className="text-secondary">jugalux1</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                            <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-twitter me-2 icon-inline text-info"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>Twitter</h6>
                            <span className="text-secondary">@jugalux1</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                            <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 128 128" className='me-2'><path fill="#0076b2" d="M116 3H12a8.91 8.91 0 0 0-9 8.8v104.42a8.91 8.91 0 0 0 9 8.78h104a8.93 8.93 0 0 0 9-8.81V11.77A8.93 8.93 0 0 0 116 3z"/><path fill="#fff" d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 1 1-10.5 10.49a10.5 10.5 0 0 1 10.5-10.49m20.41 29h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z"/></svg>Linkedin</h6>
                            <span className="text-secondary">Gaëlle Tamho</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                            <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-facebook me-2 icon-inline text-primary"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>Facebook</h6>
                            <span className="text-secondary">jugalux</span>
                        </li>
                        </ul>
                    </div>
                    </div>
                    <div className="col-md-8">
                    <div className="card mb-3">
                        <div className="card-body">
                        <div className="row">
                            <div className="col-sm-3">
                            <h6 className="mb-0">Project Name</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                                {projectInfo.title}
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-sm-3">
                            <h6 className="mb-0">Project Description</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                                {projectInfo.description}
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-sm-3">
                            <h6 className="mb-0">Budget</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                                {projectInfo.budget} Fcfa
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-sm-3">
                            <h6 className="mb-0">Surface</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                                {projectInfo.surface} square meters
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-sm-3">
                            <h6 className="mb-0">Duration</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                                {projectInfo.duration} Month
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-sm-3">
                            <h6 className="mb-0">Culture type</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                                { renderCultureType(projectInfo.cultureType) }
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-sm-3">
                            <h6 className="mb-0">technic</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                                { renderTechnic(projectInfo.technic) }
                            </div>
                        </div>
                        {/* <hr /> */}
                        <div className="row mt-4">
                            <div className="col-sm-12 d-flex justify-content-end">
                            {
                                userData && userData.role != 'farmer' ?
                                    <InvestForm projectId={projectInfo._id} data={projectInfo}>
                                        <Link className="btn btn-success " to="">Invest to this project</Link>
                                    </InvestForm>
                                : null
                            }
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="row gutters-sm">
                        <div className="col-sm-12 mb-3">
                            <div className="card h-100">
                                <div className="card-body h-100 d-grid align-content-center">
                                    <h6 className="text-center mb-3"><span className="material-icons text-success me-1">Farmer's </span>Documents</h6>
                                    <div className='row row-cols-4 my-3'>
                                        {
                                            projectInfo.files ? 

                                                projectInfo.files.map((file, index) => {
                                                    return(
                                                        // 'http://localhost:4000/' + file
                                                        <div>
                                                            <a href={'http://localhost:4000/' + file} target='_blank' className=''>
                                                                <img src={pdf} alt="" width={150} height={120} />
                                                            </a>
                                                            <p className='text-center text-secondary fw-bold'>{"File " + (index + 1)}</p>
                                                        </div>
                                                    )
                                                })

                                            : null

                                            // console.log(projectInfo.files)
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-sm-6 mb-3">
                            <div className="card h-100">
                                <div className="card-body">
                                    <h6 className="text-center mb-3"><span className="material-icons text-success me-1">published</span>Project Status</h6>
                                    <small>Tomato Project</small>
                                    <div className="progress mb-3" style={{height: 5}}>
                                        <div className="progress-bar bg-success" role="progressbar" style={{width: '2%'}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <small>Agrimax Project</small>
                                    <div className="progress mb-3" style={{height: 5}}>
                                        <div className="progress-bar bg-success" role="progressbar" style={{width: '2%'}} aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <small>Cereals Project</small>
                                    <div className="progress mb-3" style={{height: 5}}>
                                        <div className="progress-bar bg-success" role="progressbar" style={{width: '100%'}} aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <small>First Project (Vegetables)</small>
                                    <div className="progress mb-3" style={{height: 5}}>
                                        <div className="progress-bar bg-success" role="progressbar" style={{width: '100%'}} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>



                    </div>
                </div>

                </div>
            </div>
        </div>
    )
}

export default ProjectDescription
