import {useState} from "react";
import {useEffect} from "react";
import "../styles/Home.css";


const Home = () => {

    

    return(
    <>
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
        
    </>
    )

}
export default Home;