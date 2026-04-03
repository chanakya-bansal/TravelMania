import "../styles/Explore.css";

import parisImg from "../assets/images/paris.png";
import londonImg from "../assets/images/london.jpg";
import tokyoImg from "../assets/images/tokyo.jpg";

/*card component*/
function ItineraryCard({ image, city, days, highlights, tip }) {
    return (
        <div className="itinerary-card">
            {/* Left image section */}
            <div className="itinerary-image-box">
                <img src={image} alt={city} className="itinerary-image" />
            </div>

            {/* Middle text section */}
            <div className="itinerary-content">
                <h2 className="city-title">{city}</h2>
                <p className="days-text">{days}</p>

                <ul className="highlights-list">
                    {highlights.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>

                <p className="travel-tip">
                    <span className="tip-label">Travel Tip</span>
                    {tip}
                </p>
            </div>

            {/* Right button section */}
            <div className="add-btn-box">
                <button
                    className="add-btn"
                    onClick={() => alert(`${city} itinerary will be added to Travel Planner!`)}
                >
                    ADD
                </button>
            </div>
        </div>
    );
}

export default function Explore() {
    return (
        <div className="explore-page">
            <div className="explore-container">
                <div className="explore-header">
                    <h1 className="explore-title">BUILT-IN ITINERARIES</h1>
                    <div className="explore-underline"></div>
                    <p className="explore-subtitle">Planning made easy...</p>
                </div>

                <ItineraryCard
                    image={parisImg}
                    city="Paris"
                    days="5 Day Travel Itinerary"
                    highlights={[
                        "Eiffel Tower, Louvre, Montmartre",
                        "Seine River Cruise",
                        "Café hopping experience",
                    ]}
                    tip="Explore via metro + walking"
                />

                <ItineraryCard
                    image={londonImg}
                    city="London"
                    days="4 Day Itinerary"
                    highlights={[
                        "Tower Bridge, Big Ben, London Eye",
                        "Pub + street food",
                        "Thames river walk",
                    ]}
                    tip="Tube (metro) recommended"
                />

                <ItineraryCard
                    image={tokyoImg}
                    city="Tokyo"
                    days="5 Day Itinerary"
                    highlights={[
                        "Shibuya crossing, temples",
                        "Anime + shopping streets",
                        "Ramen & sushi spots",
                    ]}
                    tip="Metro travel works best"
                />
            </div>
        </div>
    );
}