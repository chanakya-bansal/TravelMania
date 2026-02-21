import {useState} from "react";
import {useEffect} from "react";
import "../styles/Home.css";
import img1 from "../assets/images/beach.jpg";
import img2 from "../assets/images/citylife.jpg";
import img3 from "../assets/images/monuments.jpg";
import img4 from "../assets/images/mountains.jpg";
import img5 from "../assets/images/wildlife.jpg";
const slides=[img1,img2,img3,img4,img5];

const Home=()=>{
    const[CurrentSlide,SetCurrentSlide]=useState(0);
    useEffect(()=>{
        const timer=setInterval(()=>{
            SetCurrentSlide((prev)=>(prev+1)%slides.length);
        },5000);
        return()=>clearInterval(timer);
    },[]);

    return(
    <>
        <section className="slideshow-section">
            <div className="slideshow-container">
                {slides.map((src,index)=>(
                    <div
                            key={index}
                            className={`slide ${index === CurrentSlide ? "active" : ""}`}
                        >
                        <img src={src} alt={`Destination ${index+1}`}/>
                        </div>
                ))}
            </div>
        </section>


        <section className="title-card-motto">
        <div className="texts">
        <h1>TRAVEL MANIA</h1>
        <h3>Planning Made Easy...</h3>
        <p>Travel Mania is your smart travel companion designed to help you discover the perfect destination across India.
        Explore places based on the best season, weather, and travel preferences.
        Whether you love mountains, beaches, heritage sites, or hidden gems, we guide you to the right spot at the right time.
        Plan your trips effortlessly with curated recommendations and travel insights.
        Travel Smarter and Better...with Travel Mania.</p>
        </div>
        <div className="buttons">
        <button>Create your Travel Plan</button>
        <button>Explore Travel Plans</button>
        </div>
        </section>
        
        <section className="title-card-motto">
        <div className="texts">
            <h1>Current Travel Plan</h1>
            <div className="planner">

            </div>
            <div className="planner">

            </div>
            </div>
        </section>
    </>
    )
}

export default Home;