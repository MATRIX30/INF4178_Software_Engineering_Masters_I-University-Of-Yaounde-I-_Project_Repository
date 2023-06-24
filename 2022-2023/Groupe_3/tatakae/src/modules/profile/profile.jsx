import { Bars } from 'react-loading-icons'
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Img from '../../assets/images/reset.svg'
import foImg from '../../assets/images/forgot.svg'
import {
  Button,
  IconButton, 
  Select,
  Option,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel
} from "@material-tailwind/react";
import { FaEye, FaEyeSlash, FaCamera, FaTrashAlt } from 'react-icons/fa';
import {GrDownload} from 'react-icons/gr';
import {RiMoneyDollarCircleLine} from 'react-icons/ri';
import {BsCameraVideoFill} from 'react-icons/bs';
import Nav from "../../layouts/nav/nav";

import {
    PencilIcon,
  } from "@heroicons/react/24/outline";
import axiosInstance from "../../config/axios";
import CreatableSelect from 'react-select/creatable';
//  import { change_password_service, profile_service, update_profile_service } from "../auth/services/auth.service";
  
  function Main() {
  
    const [old_password, setOld_password] = useState('');
    const [new_password, setNew_password] = useState('');
    const [renew_password, setRenew_password] = useState('');
    const [errMsg, setErrMsg] = useState(null);
    const [loading, setLoading] = useState(null);
    const [hide, setHide] = useState("password");
    const [me, setME] = useState(JSON.parse(localStorage.getItem('client')) || {
        owner: "string",
        details: {
          first_name: "",
          last_name: "",
          country: "",
          language: "",
          bio: ""
        },
        skills: [
          {
            name: "string",
            grade: "string",
            numeric_value: 1
          }
        ]
      })
    const [client, setClient] = useState({
      owner: me.owner,
      details: {
        first_name: me.details.first_name,
        last_name: me.details.last_name,
        country: me.details.country,
        language: me.details.language,
        bio: me.details.bio
      },
      skills: [
        {
          name: me.skills.name,
          grade: me.skills.grade,
          numeric_value: me.skills.numeric_value
        }
      ]
    })
    const [selectedFile, setSelectedFile] = useState({
      file1: me.profile_picture,
      imagePreviewUrl1: '',
    });
    const basicNonStickyNotification = useRef();
  
    useEffect(() => {
      setTimeout(() => {
        handleProfile();
      }, 2000);
      setErrMsg(null)
      setLoading('')
    }, []);
  
    const handleProfile = () => {
      axiosInstance.get(`${import.meta.env.VITE_API_URL}profile`)
        .then(res => {
          console.log(res?.data, 'my data');
          setME(res?.data)
          localStorage.setItem('client', JSON.stringify(res?.data))
          console.log(JSON.parse(localStorage.getItem('client')), 'handleprofile');
        
        }).catch(err => {
          console.log(err, 'my data error');
        }).finally(
          console.log(' finally my data'))
    }
  
    const handleSubmitChangePassword = async (e) => {
    //   e.preventDefault();
    //   setIsLoading('...')
    //   console.log('is loading before req', isLoading)
    //   console.log({ old_password, new_password, renew_password })
  
    //   change_password_service({
    //     old_password,
    //     new_password,
    //     renew_password
    //   })
    //     .then(response => {
    //       //navigator('/')
    //       console.log(response, 'response')
    //       basicNonStickyNotification.current.showToast();
    //     })
    //     .catch(err => {
    //       console.log(localStorage.getItem('userToken'), 'user Token here error')
    //       const error = err?.response?.data?.message;
    //       console.log(error, "error ye")
    //       //console.log(err?.response?.data?.detail, "error content")
    //       setErrMsg(error);
    //     })
    //     .finally(
    //       setIsLoading('')
    //     )
    }
  
    const handleImageChange1 = (e) => {
      e.preventDefault();
  
      let reader1 = new FileReader();
      let file = e.target.files[0];
  
      reader1.onloadend = () => {
        setSelectedFile({
          file1: file,
          imagePreviewUrl1: reader1.result
        });
      }
      reader1.readAsDataURL(file)  
      }
  
    const handleSubmitUpdatedProfile = (e) => {
      console.log(client, 'data client here');
      e.preventDefault();
      setLoading(<p>
        <Bars stroke="#98ff98" className='h-4 w-4' speed={.75} />
      </p>)
      console.log(client, 'data client here')
  
      axiosInstance.put(`${import.meta.env.VITE_API_URL}profile`, {...client})
        .then(response => {
          //navigator('/')
          console.log(response, 'response upload client')
          basicNonStickyNotification.current.showToast();
          handleProfile();
          setTimeout(() => {
            setLoading(null)
          }, 1000);
        })
        .catch(err => {
          console.log(localStorage.getItem('token'), 'user Token here error upload client')
          console.log(error, "error ye")
          //console.log(err?.response?.data?.detail, "error content")
          setErrMsg(err);
        })
    }
  
    return (
      <>
      <Nav />
        <div className="container mx-auto w-11/12 text-start">
          <div className="intro-y flex items-center mt-8">
            <h2 className="text-lg font-bold text-green mr-auto">My Profile</h2>
            {/* {errMsg ? <Error content={errMsg} /> : null} */}

          </div>
          <div className="grid grid-cols-12 gap-6">
            {/* BEGIN: Profile Menu */}
            <div className="col-span-12 lg:col-span-4 2xl:col-span-3 flex lg:block flex-col">
              {/* END: Personal Information */}
              <div className="intro-y box lg:mt-5 shadow-md rounded-lg my-2 bg-white">
                <div className="flex items-center p-5 border-b border-slate-200/60 rounded-t-lg ">
                  <h2 className="font-medium text-base mr-auto  text-primary">Change Password</h2>
                </div>
                <div className="p-5">
                  <form onSubmit={handleSubmitChangePassword}>
                    <div className="intro-x ">
                      <div className="my-6">
                        <label htmlFor="change-password-form-1" className="form-label">
                          Old Password
                        </label>
                        <input
                          type={hide}
                          className="form-control py-3 w-11/12 mt-2 px-2 border rounded-lg border-b-green"
                          placeholder="Old password"
                          onChange={(e) => setOld_password(e.target.value)}
                          value={old_password}
                          required
                        />
                      </div>
                      <div className="my-6">
                        <label htmlFor="change-password-form-1" className="form-label">
                          New Password
                        </label>
                        <input
                          type={hide}
                          className="form-control py-3 w-11/12 mt-2 px-2 border rounded-lg border-b-green"
                          placeholder="New password"
                          onChange={(e) => setNew_password(e.target.value)}
                          value={new_password}
                          required
                        />
                      </div>
                      <div className="mt-6">
                        <label htmlFor="change-password-form-1" className="form-label">
                          Confirm New Password
                        </label>
                        <input
                          type={hide}
                          className="form-control py-3 w-11/12 mt-2 px-2 border rounded-lg border-b-green"
                          placeholder="Confirmation Password"
                          onChange={(e) => setRenew_password(e.target.value)}
                          value={renew_password}
                          required
                        />
                      </div>
                    </div>
                    <div className="intro-x flex justify-between text-slate-600 dark:text-slate-500 text-xs sm:text-sm mx-4  mt-4 xl:mt-8 ">
                      <div className="">
                        <Button type='submit' color="blue" className="bg-primary rounded-full py-2 item-center flex">
                          <span></span> {loading}
                        </Button>
                      </div>
                      <div className="intro-x py-2">
                        <div
                        >
                        <span
                          className="flex items-center cursor-pointer px-2 md:pr-4"
                          onClick={()=>{
                              hide === 'password' ? setHide('text') : setHide('password')
                          }} >
                          {hide === 'password' ? <FaEye /> : <FaEyeSlash />} <span className="mx-2">Passwords</span>
                          {/* {hide == "password"
                            ? "show"
                            : "hide"} */}
                            
                        </span>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="intro-y box lg:mt-5 shadow-md rounded-lg my-2 bg-white">
                <div className="flex items-center p-5 border-b border-slate-200/60 rounded-t-lg ">
                <h2 className="font-medium text-base mr-auto text-primary">
                      Historical statistics
                </h2>
                </div>
                  <div className="grid grid-cols-3 gap-x-0 py-6">
                      <div className="text-center">
                        <p className="border-r-2 text-lg font-bold text-[#3f6b75]">122</p>
                        <p className="text-sm">Uploads</p>
                      </div>
                      <div className=" text-center">
                        <p className="border-r-2 text-lg font-bold text-[#3f6b75]">122</p>
                        <p className="text-sm">Downloads</p>
                      </div>
                      <div className=" text-center">
                        <p className="border-r-2 text-lg font-bold text-[#3f6b75]">99 999 <sub className="font-medium text-sm">xaf</sub> </p>
                        <p className="text-sm">Earnings</p>
                      </div>
                  </div>
              </div>
              <div className="flex flex-wrap gap-x-4 text-black/50 text-sm underline">
                <a href="#"> Terms and conditions </a>
                <a href="#"> License agreement </a>
                <a href="#"> Privacy policy </a>
                <a href="#"> About us </a>
              </div>
              {/* END: Change Password */}
            </div>
            <div className="col-span-12 lg:col-span-8 2xl:col-span-9">
              {/* END: Profile Menu */}
              <form onSubmit={(e)=>{handleSubmitUpdatedProfile(e)}}>
                {/* BEGIN: Display Information */}
                <div className="intro-y box lg:mt-5 bg-white">
                  <div className="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                    <h2 className="font-medium text-base mr-auto  text-primary">
                      My Informations
                      <Link to='/' className="ml-4">
                        <Button
                          color="orange"
                          className="bg-primary rounded-full p-2 px-4 shadow-lg">
                            Look for jobs
                        </Button>
                      </Link>
                    </h2>
                  </div>
                  <div className="p-5 shadow-lg rounded-lg">
                    <div className="flex xl:flex-row flex-col">
                      <div className="flex-1 mt-6 xl:mt-0">
                        <div className="grid grid-cols-12 gap-x-5">
                          <div className="col-span-12 2xl:col-span-6">
                            <div>
                              <label
                                htmlFor="update-profile-form-1"
                                className="form-label"
                              >
                                First name
                              </label>
                              <input
                                type='text'
                                className="form-control py-3 w-11/12 mt-2 px-2 border focus:outline-none focus:border-b-2 rounded-lg border-b-green"
                                placeholder="First Name"
                                onChange={(e) => 
                                  setClient({...client, details:{...client.details, first_name: e.target.value}})
                                }
                                value={client.details.first_name}
                                required
                              />
                            </div>
                            <div className="mt-3">
                              <label
                                htmlFor="update-profile-form-2"
                                className="form-label"
                              >
                                Country
                              </label> <br />
                              <input
                                type='text'
                                className="form-control py-3 w-11/12 mt-2 px-2 border focus:outline-none focus:border-b-2 rounded-lg border-b-green"
                                placeholder="Country"
                                onChange={(e) => 
                                  setClient({...client, details:{...client.details, country: e.target.value}})
                                }
                                value={client.details.country}
                                required
                              />
                            </div>
                          </div>
                          <div className="col-span-12 2xl:col-span-6">
                            <div className="mt-2">
                              <label
                                htmlFor="update-profile-form-3"
                                className="form-label"
                              >
                                Email
                              </label> <br />
                              <input
                                type='email'
                                className="form-control py-3 w-11/12 mt-2 px-2 border focus:outline-none focus:border-b-2 rounded-lg border-b-green"
                                placeholder="Email"
                                onChange={(e) => {
                                  setClient({...client, details:{...client.details, email: e.target.value}})
                                }}
                                value={client.owner}
                                required
                              />
                            </div>
                            <div className="mt-3">
                              <label
                                htmlFor="update-profile-form-4"
                                className="form-label"
                              >
                                Last name
                              </label>
                              <input
                                type='type'
                                className="form-control py-3 w-11/12 mt-2 px-2 border focus:outline-none focus:border-b-2 rounded-lg border-b-green"
                                placeholder=""
                                onChange={(e) => {
                                  setClient({...client, details:{...client.details, last_name: e.target.value}})
                                }}
                                value={client.details.last_name}
                                required
                              />
                            </div>
                          </div>
                          <div className="col-span-6"> 
                            <div className="mt-3">
                              <label
                                htmlFor="update-profile-form-5"
                                className="form-label"
                              >
                                Language
                              </label>
                              <Select 
                                variant="static"
                                color="orange"
                                size="md"
                                className="py-6 px-12  text-gray rounded-t-lg focus:outline-none focus:border-b-2 border-b-green "
                                >
                                <Option defaultValue >🇬🇧 &nbsp; English</Option>
                                <Option>🇫🇷 &nbsp; Français</Option>
                                <Option>🇧🇪 &nbsp; Deutsch</Option>
                              </Select>
                            </div>
                          </div>
                        </div>
                        
                      <button
                        type="submit"
                        className="py-2 px-6 mt-3 inline-flex justify-center items-center gap-2 rounded-lg border border-transparent font-semibold bg-primary text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                      >
                        Save
                        {loading}
                      </button>
                      </div>
                      <div className="w-52 mx-auto xl:mr-0 xl:ml-6 -mt-9">
                          <div className="flex space-x-6 mt-5 rounded-lg justify-around">
                            <div className='items-center py-9 rounded' >
                                <div className="shrink-0 p-1 rounded-full ring-4 ring-green">
                                  <img className="h-36 w-36 mx-auto object-cover rounded-full zoom-in" src={Img} alt="No image yet selected" />
                                </div>
                              <label className="block">
                                <div className="text-end cursor-pointer relative -mt-9">
                                <IconButton className="w-9 h-9 rounded-full">
                                  <FaCamera />
                                </IconButton>
                                  <input
                                    type="file"
                                    accept=".jpg, .jpeg, .png"
                                    className="w-full h-full top-0 left-0 absolute opacity-0"
                                    onChange={(event) => {handleImageChange1(event)}}
                                  />
                                </div>
                              </label> 
                            </div>
                          </div>
                      </div>
                    </div>
                          <div className="mr-0 px-4">
                            <Button color="red" className="bg-red flex gap-3 rounded-full -mt-9 py-2 ml-auto">
                              <FaTrashAlt className="items-center" />  <p>Log out</p>
                            </Button>
                          </div>
                  </div>
                </div>
                {/* END: Display Information */}

            <div className="col-span-12 lg:col-span-8 2xl:col-span-9">
              {/* END: Profile Menu */}
              <form onSubmit={handleSubmitUpdatedProfile}>
                {/* BEGIN: Display Information */}
                <div className="intro-y box lg:mt-5 bg-white py-4">
                  <div className="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                    <h2 className="font-medium text-base mr-auto  text-primary">
                        My Abilities
                    </h2>
                  </div>
                  <div className="w-10/12 py-3 flex mx-auto">
                    <Skills me={me} />
                  </div>
                </div>
                {/* END: Display Information */}
              </form>
            </div>
            {/* BEGIN: Basic Non Sticky Notification Content */}
                {/* BEGIN: Personal Information */}
                <div className="intro-y box mt-5 shadow-lg rounded-lg bg-white">
                  <div className="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                    <h2 className="font-medium text-base mr-auto  text-primary">
                        Jobs
                    </h2>
                  </div>
                  <div className="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  </div>
                  <TabDetail />
                </div>
              </form>
            </div>
            {/* BEGIN: Basic Non Sticky Notification Content */}

          
          </div>
        </div>
      </>
    );
  }
  
  export default Main;
  
  
export function TabDetail() {
  const data = [
    {
      label: "Files",
      value: "html",
      desc: (   
        <> 
          <div className="grid grid-cols-4 gap-x-20 items-center my-3">
            <div>
            <div className="shrink-0 p-1">
            <div className="bg-primary rounded-xl mx-auto w-32 mt-24  h-9 absolute">
                <BsCameraVideoFill  className="text-white mx-auto mt-2" />
              </div>
              <img className="h-32 w-32 object-cover rounded-lg zoom-in" src={Img} alt="No image yet selected" />
            </div>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold pb-2">Colorful</p>
              <p className="">01.01.2023</p>
            </div>
            <div className="text-center" >
              <GrDownload className="mx-auto mb-2" size={20} />
              100
            </div>
            <div className="text-center" >
              <RiMoneyDollarCircleLine className="mx-auto mb-2" size={20} />
              <p>20 222 <sub>xaf</sub> </p>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-x-20 items-center my-3">
            <div>
            <div className="shrink-0 p-1">
            <div className="bg-primary rounded-xl mx-auto w-32 mt-24  h-9 absolute">
                <FaCamera  className="text-white mx-auto mt-2" />
              </div>
              <img className="h-32 w-32 object-cover rounded-lg zoom-in" src={Img} alt="No image yet selected" />
            </div>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold pb-2">Colorful</p>
              <p className="">01.01.2023</p>
            </div>
            <div className="text-center" >
              <GrDownload className="mx-auto mb-2" size={20} />
              100
            </div>
            <div className="text-center" >
              <RiMoneyDollarCircleLine className="mx-auto mb-2" size={20} />
              <p>20 222 <sub>xaf</sub> </p>
            </div>
          </div>
        </>
      ),
    },
    {
      label: "in feeds",
      value: "feed",
      desc: (   
        <> 
          <div className="grid grid-cols-4 gap-x-20 items-center my-3">
            <div>
            <div className="shrink-0 p-1">
            <div className="bg-primary rounded-xl mx-auto w-32 mt-24  h-9 absolute">
                <BsCameraVideoFill  className="text-white mx-auto mt-2" />
              </div>
              <img className="h-32 w-32 object-cover rounded-lg zoom-in" src={Img} alt="No image yet selected" />
            </div>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold pb-2">Colorful</p>
              <p className="">01.01.2023</p>
            </div>
            <div className="text-center" >
              <GrDownload className="mx-auto mb-2" size={20} />
              100
            </div>
            <div className="text-center" >
              <RiMoneyDollarCircleLine className="mx-auto mb-2" size={20} />
              <p>20 222 <sub>xaf</sub> </p>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-x-20 items-center my-3">
            <div>
            <div className="shrink-0 p-1">
            <div className="bg-primary rounded-xl mx-auto w-32 mt-24  h-9 absolute">
                <FaCamera  className="text-white mx-auto mt-2" />
              </div>
              <img className="h-32 w-32 object-cover rounded-lg zoom-in" src={Img} alt="No image yet selected" />
            </div>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold pb-2">Colorful</p>
              <p className="">01.01.2023</p>
            </div>
            <div className="text-center" >
              <GrDownload className="mx-auto mb-2" size={20} />
              100
            </div>
            <div className="text-center" >
              <RiMoneyDollarCircleLine className="mx-auto mb-2" size={20} />
              <p>20 222 <sub>xaf</sub> </p>
            </div>
          </div>
        </>
      ),
    },
    {
      label: "In validation",
      value: "react",
      desc: (   
        <> 
          <div className="grid grid-cols-4 gap-x-20 items-center my-3">
            <div>
            <div className="shrink-0 p-1">
            <div className="bg-primary rounded-xl mx-auto w-32 mt-24  h-9 absolute">
                <FaCamera  className="text-white mx-auto mt-2" />
              </div>
              <img className="h-32 w-32 object-cover rounded-lg zoom-in" src={foImg} alt="No image yet selected" />
            </div>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold pb-2">Colorful</p>
              <p className="">01.01.2023</p>
            </div>
            <div className="text-center" >
              <GrDownload className="mx-auto mb-2" size={20} />
              100
            </div>
            <div className="text-center" >
              <RiMoneyDollarCircleLine className="mx-auto mb-2" size={20} />
              <p>20 222 <sub>xaf</sub> </p>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-x-20 items-center my-3">
            <div>
            <div className="shrink-0 p-1">
            <div className="bg-primary rounded-xl mx-auto w-32 mt-24  h-9 absolute">
                <BsCameraVideoFill  className="text-white mx-auto mt-2" />
              </div>
              <img className="h-32 w-32 object-cover rounded-lg zoom-in" src={foImg} alt="No image yet selected" />
            </div>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold pb-2">Colorful</p>
              <p className="">01.01.2023</p>
            </div>
            <div className="text-center" >
              <GrDownload className="mx-auto mb-2" size={20} />
              100
            </div>
            <div className="text-center" >
              <RiMoneyDollarCircleLine className="mx-auto mb-2" size={20} />
              <p>20 222 <sub>xaf</sub> </p>
            </div>
          </div>
        </>
      ),
    },
 
  ];
 
  return (
    <Tabs value="html" className="mx-6">
      <TabsHeader 
        className="bg-black/30"
        indicatorProps={{
          className: "bg-blue-500 shadow-none text-white",
        }}>
        {data.map(({ label, value }) => (
          <Tab className="py-2 text-white" key={value} value={value}>
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody 
        animate={{
        initial: { y: 250 },
        mount: { y: 0 },
        unmount: { y: 250 },
        }}>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}

function Skills({me}) {
    
    const options = [
        { value: 'Html', label: 'Html' },
        { value: 'Css', label: 'Css' },
        { value: 'JavaScript', label: 'JavaScript' },
        { value: 'Kotlin', label: 'Kotlin' },
        { value: 'Flutter', label: 'Flutter' }
      ]

    return(
        <>
            <div className="w-full">
            <div className="items-center py-5 border-b border-slate-200/60 dark:border-darkmode-400">
                    <div className="flex justify-start">
                        <h2 className="font-medium text-base py-2 text-primary">
                        Description
                        </h2>
                        <p className="flex items-center cursor-pointer gap-0">
                            <PencilIcon strokeWidth={2} className="h-5 text-green w-5 ml-2" />
                        </p>
                    </div>
                    <p className="ml-3">
                      {
                        me.details.bio
                      }
                    </p>
                  </div>

                  <h2 className="font-medium text-base py-2 text-primary">
                        Skills
                        </h2>
                <CreatableSelect 
                     placeholder='Choose your skills...'
                      className="border-none"
                      styles
                    isMulti 
                    options={options} />
            </div>

        </>
    )
}
//   export function Error({ content }) {
  
//     return (
//       <Alert className="alert-danger flex items-center mb-2">
//         {({ dismiss }) => (
//           <>
//             <Lucide
//               icon="AlertOctagon"
//               className="w-6 h-6 mr-2"
//             />
//             <p className="px-6">{content}</p>
//             <button
//               type="button"
//               className="btn-close text-white"
//               aria-label="Close"
//               onClick={dismiss}
//             >
//               <Lucide icon="X" className="w-4 h-4" />
//             </button>
//           </>
//         )}
//       </Alert>)
//   }