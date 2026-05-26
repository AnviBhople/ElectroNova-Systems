import React from "react";
import { Link } from "react-router-dom";
import bgImg from "./images/background_img.jpg";
import roboLab from "./images/robo_lab.jpg";

function About() {
  const [active, setActive] = React.useState(0);

  const learnData = [
    {
      title: "Robotics",
      text: "Build, test, and understand robotic systems through hands-on kits and practical learning.",
    },
    {
      title: "Artificial Intelligence & ML",
      text: "Learn the basics of intelligent systems, automation, and machine learning applications.",
    },
    {
      title: "IoT & Smart Technologies",
      text: "Explore sensors, smart devices, connectivity, and real-world IoT-based solutions.",
    },
    {
      title: "Innovation & Project Building",
      text: "Convert ideas into working models through guided project-based learning.",
    },
  ];

  const whatWeDo = [
    {
      icon: "fa-solid fa-robot",
      title: "Robotics Kits & Tools",
    },
    {
      icon: "fa-solid fa-chalkboard-user",
      title: "Training Programs & Workshops",
    },
    {
      icon: "fa-solid fa-screwdriver-wrench",
      title: "Lab Setup Services",
    },
    {
      icon: "fa-solid fa-briefcase",
      title: "Internship & Project-Based Learning",
    },
  ];

  const whyChoose = [
    "Hands-on, project-based learning",
    "Industry-relevant training",
    "Innovation-focused approach",
    "Real-world exposure",
    "Customized solutions",
  ];

  const pageStyle = {
    minHeight: "100vh",
    color: "#ffffff",
    fontFamily: "Inter",
    background: `
      radial-gradient(circle at top left, rgba(0,191,255,0.18), transparent 28%),
      radial-gradient(circle at bottom right, rgba(59,130,246,0.20), transparent 30%),
      linear-gradient(rgba(4, 18, 45, 0.94), rgba(6, 20, 48, 0.96)),
      url(${bgImg})
    `,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    paddingTop: "135px",
    overflow: "hidden",
  };

  const containerStyle = {
    width: "min(1180px, 90%)",
    margin: "0 auto",
  };

  const heroStyle = {
    ...containerStyle,
    minHeight: "430px",
    display: "grid",
    gridTemplateColumns: "1.1fr 0.9fr",
    alignItems: "center",
    gap: "45px",
    padding: "40px 0 55px",
  };

  const heroTitleStyle = {
    fontFamily: "Orbitron",
    fontSize: "clamp(2.8rem, 6vw, 5rem)",
    letterSpacing: "4px",
    fontWeight: "500",
    marginBottom: "18px",
  };

  const eyebrowStyle = {
    color: "#38bdf8",
    textTransform: "uppercase",
    letterSpacing: "3px",
    fontSize: "13px",
    fontWeight: "700",
    marginBottom: "14px",
  };

  const textStyle = {
    color: "#dbeafe",
    lineHeight: "1.8",
    fontSize: "16px",
    fontFamily: "Inter",
    margin: 0,
  };

  const sectionStyle = {
    ...containerStyle,
    padding: "45px 0",
  };

  const headingStyle = {
    fontFamily: "Orbitron",
    fontSize: "clamp(2rem, 4vw, 3rem)",
    letterSpacing: "4px",
    fontWeight: "500",
    marginBottom: "16px",
    textAlign: "center",
  };

  const smallHeadingStyle = {
    fontFamily: "Orbitron",
    fontSize: "1.35rem",
    letterSpacing: "2px",
    fontWeight: "500",
    marginBottom: "12px",
  };

  const glassBoxStyle = {
    background:
      "linear-gradient(135deg, rgba(255,255,255,0.16), rgba(255,255,255,0.07))",
    border: "1px solid rgba(255,255,255,0.20)",
    boxShadow: "0 18px 45px rgba(0,0,0,0.25), 0 0 28px rgba(56,189,248,0.14)",
    backdropFilter: "blur(14px)",
    WebkitBackdropFilter: "blur(14px)",
    borderRadius: "22px",
  };

  const heroImageBox = {
    ...glassBoxStyle,
    padding: "12px",
    position: "relative",
  };

  const heroImageStyle = {
    width: "100%",
    height: "360px",
    objectFit: "cover",
    borderRadius: "18px",
    display: "block",
  };

  const twoColumnGrid = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "26px",
    alignItems: "stretch",
  };

  const contentCardStyle = {
    ...glassBoxStyle,
    padding: "34px",
    textAlign: "left",
  };

  const centerContentCardStyle = {
    ...glassBoxStyle,
    padding: "34px",
    textAlign: "center",
  };

  const featureGrid = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "18px",
    marginTop: "28px",
  };

  const featureCardStyle = {
    ...glassBoxStyle,
    padding: "24px 18px",
    textAlign: "center",
    transition: "0.3s ease",
  };

  const iconCircleStyle = {
    width: "52px",
    height: "52px",
    borderRadius: "50%",
    display: "grid",
    placeItems: "center",
    margin: "0 auto 16px",
    background: "rgba(14,165,233,0.16)",
    border: "1px solid rgba(56,189,248,0.35)",
    color: "#67e8f9",
    fontSize: "22px",
  };

  const buttonWrapStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "16px",
    flexWrap: "wrap",
    marginTop: "28px",
  };

  const learnButtonStyle = (index) => ({
    padding: "12px 24px",
    borderRadius: "999px",
    border: "1px solid rgba(56,189,248,0.75)",
    background:
      active === index
        ? "linear-gradient(135deg, #06b6d4, #38bdf8)"
        : "rgba(255,255,255,0.04)",
    color: active === index ? "#06172f" : "#ffffff",
    cursor: "pointer",
    transition: "all 0.3s ease",
    transform: active === index ? "translateY(-4px)" : "translateY(0)",
    boxShadow:
      active === index ? "0 14px 28px rgba(56,189,248,0.28)" : "none",
    fontFamily: "Inter",
    fontWeight: "700",
    minWidth: "190px",
  });

  const missionVisionGrid = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "26px",
  };

  const whyGrid = {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gap: "16px",
    marginTop: "28px",
  };

  const whyCardStyle = {
    ...glassBoxStyle,
    padding: "20px 16px",
    textAlign: "center",
    color: "#e0f2fe",
    fontWeight: "700",
    fontSize: "14px",
  };

  const ctaStyle = {
    ...containerStyle,
    marginTop: "30px",
    marginBottom: "70px",
    padding: "45px 30px",
    textAlign: "center",
    ...glassBoxStyle,
  };

  const buttonStyle = {
    marginTop: "24px",
    padding: "13px 34px",
    background: "linear-gradient(135deg, #0284c7, #38bdf8)",
    border: "none",
    borderRadius: "10px",
    color: "#ffffff",
    fontSize: "16px",
    fontFamily: "Inter",
    fontWeight: "700",
    cursor: "pointer",
    boxShadow: "0 14px 28px rgba(14,165,233,0.28)",
  };

  return (
    <div style={pageStyle}>
      {/* HERO */}
      <section style={heroStyle} className="about-hero">
        <div>
          <p style={eyebrowStyle}>ElectroNova Systems</p>

          <h1 style={heroTitleStyle}>About Us</h1>

          <p style={{ ...textStyle, maxWidth: "620px", fontSize: "18px" }}>
            Empowering innovation through Robotics, AI, IoT, and future-ready
            education.
          </p>

          <div
            style={{
              width: "90px",
              height: "3px",
              background: "linear-gradient(90deg, #06b6d4, transparent)",
              marginTop: "26px",
              borderRadius: "999px",
            }}
          ></div>
        </div>

        <div style={heroImageBox}>
          <img src={roboLab} alt="Students learning robotics" style={heroImageStyle} />
        </div>
      </section>

      {/* WHO WE ARE + OUR IMPACT */}
      <section style={sectionStyle}>
        <div style={twoColumnGrid} className="about-two-grid">
          <div style={contentCardStyle}>
            <h2 style={{ ...headingStyle, textAlign: "left" }}>Who We Are</h2>
            <p style={textStyle}>
              ElectroNova System is a leading organization dedicated to
              advancing Robotics, Artificial Intelligence (AI), Internet of
              Things (IoT), and STEM & STEAM education. We provide high-quality
              robotics kits, training solutions, and lab setup services designed
              to promote hands-on learning and innovation.
            </p>
          </div>

          <div style={contentCardStyle}>
            <h2 style={{ ...headingStyle, textAlign: "left" }}>Our Impact</h2>
            <p style={textStyle}>
              We collaborate with private institutions, government schools, and
              Atal Tinkering Labs (ATLs) to establish world-class innovation
              labs. Our goal is to inspire creativity, problem-solving, and
              technological thinking from an early stage.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>What We Do</h2>

        <p
          style={{
            ...textStyle,
            textAlign: "center",
            maxWidth: "850px",
            margin: "0 auto",
          }}
        >
          We design and deliver innovative learning solutions that bring
          technology and creativity together through advanced tools, training,
          and infrastructure.
        </p>

        <div style={featureGrid} className="about-feature-grid">
          {whatWeDo.map((item, index) => (
            <div
              key={index}
              style={featureCardStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow =
                  "0 22px 48px rgba(56,189,248,0.22)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 18px 45px rgba(0,0,0,0.25), 0 0 28px rgba(56,189,248,0.14)";
              }}
            >
              <div style={iconCircleStyle}>
                <i className={item.icon}></i>
              </div>
              <h3
                style={{
                  fontFamily: "Inter",
                  fontSize: "15px",
                  fontWeight: "800",
                  margin: 0,
                  color: "#ffffff",
                }}
              >
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT YOU WILL LEARN */}
      <section style={sectionStyle}>
        <div style={centerContentCardStyle}>
          <h2 style={headingStyle}>What You Will Learn</h2>

          <div style={buttonWrapStyle}>
            {learnData.map((item, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                style={learnButtonStyle(index)}
              >
                {item.title}
              </button>
            ))}
          </div>

          <p
            style={{
              ...textStyle,
              maxWidth: "760px",
              margin: "26px auto 0",
              color: "#e0f2fe",
            }}
          >
            {learnData[active].text}
          </p>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section style={sectionStyle}>
        <div style={missionVisionGrid} className="about-two-grid">
          <div style={contentCardStyle}>
            <div style={iconCircleStyle}>
              <i className="fa-solid fa-bullseye"></i>
            </div>
            <h3 style={{ ...smallHeadingStyle, textAlign: "center" }}>
              Our Mission
            </h3>
            <p style={{ ...textStyle, textAlign: "center" }}>
              To empower students and institutions with practical,
              future-focused technological education.
            </p>
          </div>

          <div style={contentCardStyle}>
            <div style={iconCircleStyle}>
              <i className="fa-regular fa-lightbulb"></i>
            </div>
            <h3 style={{ ...smallHeadingStyle, textAlign: "center" }}>
              Our Vision
            </h3>
            <p style={{ ...textStyle, textAlign: "center" }}>
              To create a generation of innovators and technology leaders
              through experiential learning.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>Why Choose Us</h2>

        <div style={whyGrid} className="about-why-grid">
          {whyChoose.map((item, index) => (
            <div key={index} style={whyCardStyle}>
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={ctaStyle}>
        <h2
          style={{
            fontFamily: "Orbitron",
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            letterSpacing: "4px",
            fontWeight: "500",
            marginBottom: "10px",
          }}
        >
          Let’s Build the Future Together
        </h2>

        <p style={{ ...textStyle, textAlign: "center" }}>
          Partner with us to create practical, future-ready learning
          experiences.
        </p>

        <Link to="/contact-us">
          <button style={buttonStyle}>Contact Us</button>
        </Link>
      </section>

      <style>
        {`
          @media (max-width: 992px) {
            .about-hero,
            .about-two-grid {
              grid-template-columns: 1fr !important;
            }

            .about-feature-grid {
              grid-template-columns: repeat(2, 1fr) !important;
            }

            .about-why-grid {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }

          @media (max-width: 576px) {
            .about-feature-grid,
            .about-why-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}
      </style>
    </div>
  );
}

export default About;