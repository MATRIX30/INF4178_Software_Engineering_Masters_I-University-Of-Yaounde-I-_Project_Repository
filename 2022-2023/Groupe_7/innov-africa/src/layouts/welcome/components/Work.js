import React from "react";
import PickMeals from "assets/images/pick-meals-image.png";
import ChooseMeals from "assets/images/choose-image.png";
import AboutBackgroundImage from "assets/images/Finding brilliant ideas-pana.png";
import DeliveryMeals from "assets/images/delivery-image.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"



const Work = () => {
  let settings = {
    dot:true,
    infinite:true,
    speed:500,
    slidesToShow:3,
    slidesToScroll : 1,
    cssEase: "linear"
  }
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Meals",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
    },
    {
      image: ChooseMeals,
      title: "Choose How Often",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    },
  ];
  return (

    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
      </div>
      <Slider {...settings}>
        <div className="card_wrapper">
          <div className="card">
            <div className="card-image">
            <img src={AboutBackgroundImage} alt="" />
         </div>
          </div>
            <div className="details">
            <h2>John boe <span class="job-title"> UI Developer</span></h2>
          </div>
        </div>

        <div className="card_wrapper">
          <div className="card">
            <div className="card-image">
            <img src={AboutBackgroundImage} alt="" />        </div>
          </div>
          <div className="details">
            <h2>John boe <span class="job-title"> UI Developer</span></h2>
          </div>
        </div>

        <div className="card_wrapper">
          <div className="card">
            <div className="card-image">
             <img src={AboutBackgroundImage} alt="" />            </div>
          </div>
          <div className="details">
            <h2>John boe <span class="job-title"> UI Developer</span></h2>
          </div>
        </div>

        <div className="card_wrapper">
          <div className="card">
            <div className="card-image">
            <img src={AboutBackgroundImage} alt="" />          </div>
          </div>
          
          <div className="details">
            <h2>John boe <span class="job-title"> UI Developer</span></h2>
          </div>
        </div>

        <div className="card_wrapper">
          <div className="card">
            <div className="card-image info-boxes-img-container">
            <img src={AboutBackgroundImage} alt="" />
             </div>
          </div>
         
          <div className="details">
            <h2>John boe <span class="job-title"> UI Developer</span></h2>
          </div>
        </div>
         {/* <div className="card_wrapper">
          {workInfoData.map((data) => (
            <div className="card" key={data.title}>
              <div className="card-image">
                <img src={data.image} alt="" />
              </div>
            <div className="details"> <span class="job-title"><h2>{data.title}</h2></span> </div>
            </div>
          ))}
      </div> */}

    </Slider>
     
      {/* <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Work;
