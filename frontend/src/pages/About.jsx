// import {useState} from "react";
// import "../styles/About.css";

// const About = () => {

//     return(
//         <>

//         <section className="our-motto">
//             <div className="motto">
//             Our Motto-
//             Planning Made Easy
//             </div>
//             <div className="explain-motto">
//             At Travel Mania, we believe travel should be exciting — not stressful.
//             Our goal is to simplify your journey from the very first idea to the final destination.

//             With smart planning tools, curated destinations, and seamless guidance, we make travel preparation effortless, organized, and enjoyable.

//             Because your adventure should begin with excitement, not confusion.
//             </div>
//         </section>

//         <section className="contact-the-team">
//             <div className="Contact">
//             Contact Us and meet the team
//             </div>
//         </section>



//         </>
//     )

// }
// export default About;






import { useState } from "react";
import "../styles/About.css";

const teamMembers = [
  {
    name: "Chanakya Bansal",
    role: "Co-CEO",
    email: "chanakya.bansal@gmail.com",
    phone: "+91 9424439888",
    avatar: "CB",
  },
  {
    name: "Soumalya Kuila",
    role: "Co-CEO",
    email: "soumalya.kuila@gmail.com",
    phone: "+91 9424439888",
    avatar: "SK",
  },
  {
    name: "Khushi Shrivastava",
    role: "Co-CEO",
    email: "khushi.shrivastava@gmail.com",
    phone: "+91 9424439888",
    avatar: "KS",
  },
  {
    name: "Sayantika Kundu",
    role: "Co-CEO",
    email: "sayantika.kundu@gmail.com",
    phone: "+91 9424439888",
    avatar: "SK",
  },
  {
    name: "Apoorv Verma",
    role: "Co-CEO",
    email: "apvstmp@gmail.com",
    phone: "+91 9424439888",
    avatar: "AV",
  },
];

const About = () => {
  const [showTeam, setShowTeam] = useState(false);

  return (
    <>
      {/* OUR MOTTO SECTION */}
      <section className="our-motto">
        <div className="motto-bg">
          <span className="bg-circle c1" />
          <span className="bg-circle c2" />
          <span className="bg-circle c3" />
        </div>

        <div className="motto-content">
          <div className="motto-tag">✦ Our Motto</div>
          <div className="motto">Planning Made Easy</div>
          <div className="motto-divider" />
          <div className="explain-motto">
            At Travel Mania, we believe travel should be exciting — not stressful. Our goal is to
            simplify your journey from the very first idea to the final destination. With smart
            planning tools, curated destinations, and seamless guidance, we make travel preparation
            effortless, organized, and enjoyable. Because your adventure should begin with
            excitement, not confusion.
          </div>
        </div>

        <div className="motto-visual">
          <div className="plane-track">
            <span className="plane">✈</span>
          </div>
          <div className="destination-dots">
            <span className="dot d1" />
            <span className="dot d2" />
            <span className="dot d3" />
            <span className="dot d4" />
            <span className="dot d5" />
          </div>
          <div className="visual-label">Your journey starts here</div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact-the-team">
        <div className="contact-text">
          <div className="Contact">Contact Us</div>
          <p className="contact-sub">
            Have a question or just want to say hi? Reach us at{" "}
            <a href="mailto:hello@travelmania.com">hello@travelmania.com</a>
          </p>

          <button
            className={`meet-team-btn ${showTeam ? "active" : ""}`}
            onClick={() => setShowTeam(!showTeam)}
          >
            {showTeam ? "✕ Hide the Team" : "👋 Meet the Team"}
          </button>
        </div>

        {showTeam && (
          <div className="team-reveal">
            {teamMembers.map((m, i) => (
              <div
                className="team-card"
                key={i}
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="team-avatar">{m.avatar}</div>
                <div className="team-info">
                  <div className="team-name">{m.name}</div>
                  <div className="team-role">{m.role}</div>
                  <div className="team-contact-details">
                    <span>📧 {m.email}</span>
                    <span>📞 {m.phone}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default About;
