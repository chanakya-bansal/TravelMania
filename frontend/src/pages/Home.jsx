import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";
import selfie from "../assets/images/capture.jpg"
import process from "../assets/images/plan_your_trip.jpg"
import travelBook from "../assets/images/explore.jpg"
import traveler from "../assets/images/travel.jpg"
import plimage from "../assets/images/plimage.png"
import plimage2 from "../assets/images/plimage2.png"
import { testimonials } from "../data/homedata.js"
import { textwrap } from "../data/homedata.js"
import { travelmania } from "../data/homedata.js"


const Home = () => {
    const navigate = useNavigate();

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
                    style={{ backgroundImage: `url(${slides[current].image})` }}>
                    <div className="slide-text" key={current}>
                        <h2 ref={titleRef} >{slides[current].title}</h2>
                        <p ref={descRef}>{slides[current].desc}</p>
                    </div>
                </div>
                <div className="marquee-wrapper">
                    <div className="marquee-track">
                        {[...textwrap, ...textwrap].map((item, index) => (
                            <span key={index}>{item.text}</span>
                        ))}
                    </div>
                    <div className="marquee-track reverse">
                        {[...textwrap, ...textwrap].map((item, index) => (
                            <span key={index}>{item.text}</span>
                        ))}
                    </div>
                    <div className="marquee-track">
                        {[...textwrap, ...textwrap].map((item, index) => (
                            <span key={index}>{item.text}</span>
                        ))}
                    </div>
                    <div className="marquee-track reverse">
                        {[...textwrap, ...textwrap].map((item, index) => (
                            <span key={index}>{item.text}</span>
                        ))}
                    </div>
                </div>

            </section>


            <section className="title-card-motto">
                <div className="texts">
                    <h1>TRAVEL MANIA</h1>
                    <h3>Planning Made Easy...</h3>
                    {travelmania.map((item, index) => (
                        <p key={index}>{item.text}</p>
                    ))}
                </div>
                <div className="buttons">
                    <button onClick={() => navigate("/travel-planner")}>Create your Travel Plan</button>
                    <button onClick={() => navigate("/explore")}>Explore Travel Plans</button>
                </div>
            </section>
            <section className="title-card-motto">
                <div className="texts">
                    <h1>Current Travel Plans</h1>
                    <div className="planner">
                        <img src={plimage} alt="none" />
                    </div>
                    <div className="planner">
                        <img src={plimage2} alt="none" />

                    </div>
                </div>
            </section>
            <section>
                <h1 className="review-heading">Testimonials:</h1>
                <div className="card-review">
                    {testimonials.map((item, index) => (
                        <div className="reviewcard" key={index}>
                            <div className="Heading">
                                <h3>{item.name}</h3>
                                <p className="rating">{"⭐".repeat(item.rating)}</p>
                                <p className="review">{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </>
    )
}

export default Home;