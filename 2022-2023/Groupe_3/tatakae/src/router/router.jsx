import React from 'react';
import { Routes, Route } from "react-router-dom";


// Common path
import Home from '../modules/home/home';
import Login from '../modules/auth/login/login'
import Register from '../modules/auth/Register/reg';
import Profile from '../modules/profile/profile';
import NotFound from '../modules/notFound/NotFound';
import Feeds from '../modules/feeds/feeds';

const Router = () => {

	return(
		<>
			
					<Routes>
						
						<Route path="/" >
								<Route index element={<Home />} />

								<Route  path="login" element={<Login />} />
								<Route  path="register" element={<Register />} />
								<Route  path="profile" element={<Profile />} />
								<Route  path="feeds" element={<Feeds />} />
								<Route  path="*" element={ <NotFound /> } />
						</Route>
					</Routes>

		</>
	)
}

export default Router;