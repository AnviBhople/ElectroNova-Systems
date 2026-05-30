import React from "react";
import { Link } from "react-router-dom";
import mainImg1 from "./images/mainImg1.png";
import mainImg2 from "./images/mainImg2.png";
import mainImg3 from "./images/mainImg3.png";
import bgImg from "./images/background_img.jpg";

function MainApp() {
	const sectionStyle = {
		background: `radial-gradient(circle at top right, rgba(30,58,138,0.9), rgba(2,6,23,0.95)), url(${bgImg})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		color: "white",
	};

	const headingStyle = {
		fontSize: "52px",
		marginBottom: "20px",
		fontFamily: "Orbitron",
		fontWeight: "bold",
		color: "#FFD51E",
	};

	const subHeadingStyle = {
		fontSize: "20px",
		marginBottom: "20px",
		color: "#cbd5f5",
		fontFamily: "Inter",
	};

	const paragraphStyle = {
		fontSize: "16px",
		lineHeight: "1.6",
		color: "#c1c8d2",
		fontFamily: "Inter",
	};

	const buttonContainer = {
		marginTop: "30px",
		display: "flex",
		gap: "15px",
		flexWrap: "wrap",
	};

	const primaryBtn = {
		background: "#3b82f6",
		border: "none",
		padding: "12px 20px",
		borderRadius: "8px",
		color: "white",
		cursor: "pointer",
		fontWeight: "bold",
		fontFamily: "Inter",
	};

	const secondaryBtn = {
		background: "transparent",
		border: "1px solid #3b82f6",
		padding: "12px 20px",
		borderRadius: "8px",
		color: "#3b82f6",
		cursor: "pointer",
		fontFamily: "Inter",
	};

	const imageWrapper = {
		background: "rgba(255,255,255,0.05)",
		padding: "20px",
		borderRadius: "20px",
		backdropFilter: "blur(10px)",
		display: "inline-block",
		marginTop: "20px",
	};

	const baseCardStyle = {
		backgroundColor: "#111827",
		borderRadius: "20px",
		border: "2px solid #dde5f0",
		transition: "all 0.4s ease",
		cursor: "default",
		overflow: "hidden",
	};

	const quoteStyle = {
		color: "#fff",
		fontStyle: "italic",
		lineHeight: "1.6",
		fontSize: "0.95rem",
	};

	return (
		<div className="container-fluid" style={sectionStyle}>
			<div className="container py-5" style={{ paddingTop: "110px" }}>
				<div className="row align-items-center my-5">
					<div className="col-12 col-md-6 text-center text-md-start">
						<h1 style={headingStyle}>ELECTRONOVA SYSTEMS</h1>

						<h3 style={subHeadingStyle}>
							Engineering smart electronics and IoT solutions for a connected
							future
						</h3>

						<p style={paragraphStyle}>
							Building reliable electronic solutions with modern technology.
							Focused on innovation, functionality and real-world applications.
						</p>

						<div style={buttonContainer}>
							<Link to="/products">
								<button style={primaryBtn}>Explore Products</button>
							</Link>

							<Link to="/about-us">
								<button style={secondaryBtn}>Learn More</button>
							</Link>
						</div>
					</div>

					<div className="col-12 col-md-6 text-center mt-4 mt-md-0">
						<div style={imageWrapper}>
							<img
								src={mainImg1}
								className="img-fluid"
								alt="Electronics visual"
							/>
						</div>
					</div>
				</div>

				<div className="row my-5 align-items-center">
					<div className="col-12 col-md-6 text-center">
						<div style={imageWrapper}>
							<img src={mainImg2} className="img-fluid" alt="Visual 2" />
						</div>
					</div>

					<div className="col-12 col-md-6 text-center text-md-start mt-4 mt-md-0">
						<h1
							style={{
								fontFamily: "Orbitron",
								color: "#FFD51E",
								fontWeight: "bolder",
							}}>
							What We Do?
						</h1>
						<br />
						<p style={paragraphStyle}>
							At Electronova System, we design and deliver innovative learning
							solutions that bring technology and creativity together. Our focus
							is on empowering students, educators, and institutions through
							advanced educational tools, training, and infrastructure in the
							fields of Robotics, AI, IoT, STEM & STEAM Education.
						</p>
					</div>
				</div>

				<div className="row my-5 align-items-center">
					<div className="col-12 col-md-6 text-center text-md-start">
						<h1
							style={{
								fontFamily: "Orbitron",
								color: "#FFD51E",
								fontWeight: "bold",
							}}>
							Why Us?
						</h1>
						<br />
						<p style={paragraphStyle}>
							Electronova System stands out for its commitment to innovation,
							quality, and hands on learning. We offer complete Robotics, AI,
							IoT, STEM & STEAM education solutions — from lab setup to training
							and certification. With expert trainers, industry-driven
							curriculum, and durable learning kits, we ensure students gain
							practical, future-ready skills. Our strong partnerships with
							private, government, and Atal Tinkering Labs reflect our
							reliability and excellence in delivering impactful education.
						</p>
					</div>

					<div className="col-12 col-md-6 text-center mt-4 mt-md-0">
						<div style={imageWrapper}>
							<img src={mainImg3} className="img-fluid" alt="Visual 3" />
						</div>
					</div>
				</div>
				<br />
				<br />
				<br />
				<section
					className="py-5"
					style={{
						backgroundColor: "#101e45",
						color: "#f9fafb",
						borderRadius: "20px",
					}}>
					<div className="container">
						<div className="row mb-5 text-center">
							<div className="col-12">
								<h2
									style={{
										fontFamily: "Orbitron",
										letterSpacing: "4px",
										fontWeight: "bold",
										color: "#FFD51E",
									}}>
									OUR LEADERSHIP
								</h2>
							</div>
						</div>

						<div className="row g-4">
							<div className="col-12 col-lg-4">
								<div
									className="p-4 h-100 shadow-lg"
									style={baseCardStyle}
									onMouseEnter={(e) => {
										e.currentTarget.style.transform = "translateY(-10px)";
										e.currentTarget.style.borderColor = "#2a74ec";
										e.currentTarget.style.boxShadow =
											"0 10px 40px rgba(238, 241, 247, 0.7)";
									}}
									onMouseLeave={(e) => {
										e.currentTarget.style.transform = "translateY(0)";
										e.currentTarget.style.borderColor = "#dde5f0";
										e.currentTarget.style.boxShadow = "none";
									}}>
									<div className="mb-3"></div>
									<p style={quoteStyle}>
										"Working as the Head Accountant at Electronova Systems has
										been a really valuable experience for me. I’ve had the
										opportunity to manage financial operations, which has helped
										me grow stronger in accounting practices. The environment
										encourages learning and technical growth."
									</p>
									<div className="mt-4 pt-3 border-top border-secondary">
										<h5 className="mb-0" style={{ color: "#FFD51E" }}>
											Komal Ashokrao Sune
										</h5>
										<small className="text-primary text-uppercase fw-bold">
											Head Accountant
										</small>
									</div>
								</div>
							</div>

							<div className="col-12 col-lg-4">
								<div
									className="p-4 h-100"
									style={{
										...baseCardStyle,
										border: "2px solid #3b82f6",
										background: "linear-gradient(145deg, #111827, #1e293b)",
									}}
									onMouseEnter={(e) => {
										e.currentTarget.style.transform = "scale(1.03)";
										e.currentTarget.style.boxShadow =
											"0 10px 40px rgba(238, 241, 247, 0.2)";
									}}
									onMouseLeave={(e) => {
										e.currentTarget.style.transform = "scale(1)";
										e.currentTarget.style.boxShadow = "none";
									}}>
									<h5
										className="mb-0"
										style={{ color: "#FFD51E", fontSize: "1.3rem" }}>
										Arjun Panditrao Mahore
									</h5>
									<br />
									<div className="mb-3">
										<small className="badge bg-primary text-uppercase">
											CEO & Founder
										</small>
									</div>
									<br />
									<p
										style={{
											...quoteStyle,
											color: "#fff",
											fontSize: "1rem",
										}}>
										Leading Electronova has been a purpose-driven journey
										focused on innovation. With two patents and mentorship
										experience at IIT Kanpur, I focus on designing prototypes
										and inspiring the next generation of engineers.
									</p>
									<br />
									<div className="d-flex flex-wrap gap-2 mt-3">
										<span
											className="badge border border-primary bg-primary text-center text-white"
											style={{ fontSize: "0.8rem" }}>
											Patent Holder
										</span>
										<span
											className="badge border border-primary bg-primary text-center text-white"
											style={{ fontSize: "0.8rem" }}>
											State Athlete
										</span>
									</div>
								</div>
							</div>

							<div className="col-12 col-lg-4">
								<div
									className="p-4 h-100 shadow-lg"
									style={baseCardStyle}
									onMouseEnter={(e) => {
										e.currentTarget.style.transform = "translateY(-10px)";
										e.currentTarget.style.borderColor = "#3b82f6";
										e.currentTarget.style.boxShadow =
											"0 10px 40px rgba(238, 241, 247, 0.7)";
									}}
									onMouseLeave={(e) => {
										e.currentTarget.style.transform = "translateY(0)";
										e.currentTarget.style.borderColor = "#dde5f0";
										e.currentTarget.style.boxShadow = "none";
									}}>
									<h5
										className="mb-0"
										style={{ color: "#FFD51E", fontSize: "1.3rem" }}>
										Shreyash Gawande
									</h5>
									<small className="text-secondary text-uppercase fw-bold">
										Co-founder & Director
									</small>
									<p
										className="mt-3"
										style={{
											...quoteStyle,
											color: "#fff",
											fontSize: "1rem",
										}}>
										Expert in Embedded Systems and IoT. Having reached 7,000+
										students through 150+ workshops, my mission is making
										technology practical, accessible, and impactful for
										innovators.
									</p>
									<div className="mt-4 pt-3 border-top border-secondary">
										<div
											className="text-primary small fw-bold"
											style={{ fontSize: "1rem" }}>
											7,000+ Students Mentored
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<br />
					<br />
					<div className="d-flex justify-content-center">
						<Link to="/team">
							<button style={primaryBtn}>Meet our Team</button>
						</Link>
					</div>
				</section>
			</div>
		</div>
	);
}

export default MainApp;
