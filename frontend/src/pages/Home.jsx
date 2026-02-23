import { useEffect, useRef, useState } from "react";
import "../styles/Home.css";
import selfie from "../assets/images/capture.jpg"
import process from "../assets/images/plan_your_trip.jpg"
import travelBook from "../assets/images/explore.jpg"
import traveler from "../assets/images/travel.jpg"
import {testimonials} from "../data/homedata.js"


const Home = () => {

    const slides = [
        { image: selfie, title: "Capture Memories", desc: "Every journey tells a story worth remembering." },
        { image: process, title: "Plan Your Trip", desc: "Seamlessly organize every detail of your adventure." },
        { image: travelBook, title: "Explore the World", desc: "Discover destinations you've always dreamed of." },
        { image: traveler, title: "Travel Your Way", desc: "Your journey, your rules, your adventure." },
    ];
    const [current, setCurrent] = useState(0);
    const titleRef = useRef();
    const descRef = useRef();


    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent(prev => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);


    function scrambleTo(el, newText, duration = 750) {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        const steps = 20;
        const interval = duration / steps;
        let step = 0;

        const timer = setInterval(() => {
            el.textContent = newText
                .split("")
                .map((char, i) => {
                    if (char === " ") return " ";
                    if (i < (step / steps) * newText.length) return char;
                    return chars[Math.floor(Math.random() * chars.length)];
                })
                .join("");

            step++;
            if (step > steps) {
                el.textContent = newText;
                clearInterval(timer);
            }
        }, interval);
    }


    useEffect(() => {
        scrambleTo(titleRef.current, slides[current].title);
        scrambleTo(descRef.current, slides[current].desc);
    }, [current]);

    return (
        <>
            <section className="slideshow-section">
                <div className="upper"
                key={current}
                style={{backgroundImage:`url(${slides[current].image})`}}>
                    <div className="slide-text" key={current}>
                        <h2 ref={titleRef} >{slides[current].title}</h2>
                        <p ref={descRef}>{slides[current].desc}</p>
                    </div>
                </div>
                <div className="marquee-wrapper">
                    <div className="marquee-track">
                        <span>EXPLORE • DISCOVER • TRAVEL • ADVENTURE • WANDER • EXPLORE • DISCOVER • TRAVEL • ADVENTURE • WANDER •</span>
                        <span>EXPLORE • DISCOVER • TRAVEL • ADVENTURE • WANDER • EXPLORE • DISCOVER • TRAVEL • ADVENTURE • WANDER •</span>
                        <span>EXPLORE • DISCOVER • TRAVEL • ADVENTURE • WANDER • EXPLORE • DISCOVER • TRAVEL • ADVENTURE • WANDER •</span>
                        <span>EXPLORE • DISCOVER • TRAVEL • ADVENTURE • WANDER • EXPLORE • DISCOVER • TRAVEL • ADVENTURE • WANDER •</span>
                    </div>
                    <div className="marquee-track reverse">
                        <span>DESTINATIONS • JOURNEY • ROAM • ESCAPE • EXPLORE • DESTINATIONS • JOURNEY • ROAM • ESCAPE • EXPLORE •</span>
                        <span>DESTINATIONS • JOURNEY • ROAM • ESCAPE • EXPLORE • DESTINATIONS • JOURNEY • ROAM • ESCAPE • EXPLORE •</span>
                        <span>DESTINATIONS • JOURNEY • ROAM • ESCAPE • EXPLORE • DESTINATIONS • JOURNEY • ROAM • ESCAPE • EXPLORE •</span>
                        <span>DESTINATIONS • JOURNEY • ROAM • ESCAPE • EXPLORE • DESTINATIONS • JOURNEY • ROAM • ESCAPE • EXPLORE •</span>
                    </div>
                    <div className="marquee-track">
                        <span>EXPLORE • DISCOVER • TRAVEL • ADVENTURE • WANDER • EXPLORE • DISCOVER • TRAVEL • ADVENTURE • WANDER •</span>
                        <span>EXPLORE • DISCOVER • TRAVEL • ADVENTURE • WANDER • EXPLORE • DISCOVER • TRAVEL • ADVENTURE • WANDER •</span>
                        <span>EXPLORE • DISCOVER • TRAVEL • ADVENTURE • WANDER • EXPLORE • DISCOVER • TRAVEL • ADVENTURE • WANDER •</span>
                        <span>EXPLORE • DISCOVER • TRAVEL • ADVENTURE • WANDER • EXPLORE • DISCOVER • TRAVEL • ADVENTURE • WANDER •</span>
                    </div>
                    <div className="marquee-track reverse">
                        <span>DESTINATIONS • JOURNEY • ROAM • ESCAPE • EXPLORE • DESTINATIONS • JOURNEY • ROAM • ESCAPE • EXPLORE •</span>
                        <span>DESTINATIONS • JOURNEY • ROAM • ESCAPE • EXPLORE • DESTINATIONS • JOURNEY • ROAM • ESCAPE • EXPLORE •</span>
                        <span>DESTINATIONS • JOURNEY • ROAM • ESCAPE • EXPLORE • DESTINATIONS • JOURNEY • ROAM • ESCAPE • EXPLORE •</span>
                        <span>DESTINATIONS • JOURNEY • ROAM • ESCAPE • EXPLORE • DESTINATIONS • JOURNEY • ROAM • ESCAPE • EXPLORE •</span>
                    </div>
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
                    <h1>Current Travel Plans</h1>
                    <div className="planner">

                    </div>
                    <div className="planner">
                        
                    </div>
                </div>
            </section>
            <section>
                <h1 className="review-heading">Testimonials:</h1>
                <div className="card-review">
                {testimonials.map((t,index)=>(
                    <div className="reviewcard" key={index}>
                        <div className="Heading">
                            <h3>{t.name}</h3>
                            <p className="rating">{"⭐".repeat(t.rating)}</p>
                            <p className="review">{t.text}</p>
                        </div>
                    </div>
                     ))}
                </div>
            </section>

        </>
    )
}

export default Home;