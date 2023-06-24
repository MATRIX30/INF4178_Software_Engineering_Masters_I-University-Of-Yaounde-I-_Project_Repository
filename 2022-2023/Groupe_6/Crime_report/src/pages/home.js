import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import Navbar from '../components/navbar';
import Fond from "../assets/img/knife.jpg";
import about from "../assets/img/police.jpg";
import crime from "../assets/img/weapon.jpg";
import crimes from "../assets/img/crimes.jpg";
import enquete from "../assets/img/enquete.jpg";


export class Home extends React.Component {

	render() {
		return (
			<div>

			<Navbar/>
			
			<div className="row-lg-12">
			<div style={{backgroundImage: 'url('+Fond+')',backgroundSize: "cover", height: "620px",}} >
				<div className="pb-5 mb-5"></div>
				<div className="pb-5 mb-3"></div>
				<h1 className=" text-center pt-5 mb-3  " style={{color:"orange" }}> Report your crime ... </h1>
				<div className="col-lg-9 justify-content-center">
					<p className="text-center offset-lg-5 text-light" > If you are victim of a crime you can report it on this platform with image that prouve your 
					report if you have and we are here to help you. You can report your crime anonymously
 . </p>
				</div>
				<div className="d-flex justify-content-center pt-5">
				<a href="/report" type="button" className="btn rounded text-white" style={{backgroundColor:"orange"}}>Report Crime</a></div>
			</div>
			</div>
			<div className="mx-5">
			<div className="row py-5">
			<div className="col-lg-6">
				<div className="rounded " style={{backgroundImage: 'url('+about+')',height:'300px',backgroundSize: "cover"}} />
			</div>
			<div className="col-lg-6">
				<h1 className="text-center"> ABOUT </h1>
				<p>Africa faces a seemingly ever-increasing range of security challenges, our main concern here is to look a way of voicing particular concern over terrorist attacks, population displacement and the resurgence of old armed groups in many African’s nation 
The general objective of this platform is enables victims to report crimes anonymously while providing law enforcement agencies with real-time data on crime trends.
			Then if your are victim of a crime you can report it on this platform with
			 image that prouve your report if you have and we are here to help you.</p>
			 <div className="d-flex justify-content-center pt-3">
				<a href="/report" type="button" className="btn rounded text-white" style={{backgroundColor:"orange"}}>Report Crime</a></div>
			</div>
			</div>

			<h1 className="text py-2"> CRIMES </h1>
			<div className="row">
				<div className="col-lg-4 py-2 pb-5">
					<div className="card  border rounded" >
						<img className=" rounded" style={{height:''}} src={crimes}/>
						<span className="mx-2"> <h4 className="pt-4  my-0" style={{color:""}}> Woman's aggression  </h4>
						<p className=" text-secondary"> Mimboman - Yaoundé </p>
						<p>My mother was beaten by her husband who then fled. I am currently seriously injured and bathed in a pool of blood please help me ... </p>
						<a className="" style={{textDecoration: "none", color:"orange", cursor:"pointer"}}>See more >>> </a>
						

						</span>	
					</div>
				</div>
				<div className="col-lg-4 py-2">
					<div className="card  border rounded" >
						<img className=" rounded" style={{height:'265px'}} src={Fond}/>
						<span className="mx-2"> <h4 className="pt-4  my-0" style={{color:""}}> Boko Haram terrorisim  </h4>
						<p className=" text-secondary"> Touba - Maroua </p>
						<p>Yesterday while I was returning, terrorists stopped me and beat me on the road around 8 p.m. I escaped by chance... </p>
						<a className="" style={{textDecoration: "none", color:"orange", cursor:"pointer"}}>See more >>> </a>
						</span>	
					</div>
				</div>
				<div className="col-lg-4 py-2">
					<div className="card  border rounded" >
						<img className=" rounded" style={{height:'265px'}} src={enquete}/>
						<span className="mx-2"> <h4 className="pt-4  my-0" style={{color:""}}> Children Kidnapping  </h4>
						<p className=" text-secondary"> Moyo - Bambili </p>
						<p>My three children were kidnapped after school tonight. People say they saw them get into a red car with smoked windows... </p>
						<a className="" style={{textDecoration: "none", color:"orange", cursor:"pointer"}}>See more >>> </a>
						</span>	
					</div>
				</div>


			</div>
			</div>
 			<div className="py-4" style={{backgroundColor:"black"}}>
 				
 			</div>
			</div>
 		);
	}
}

export default Home;